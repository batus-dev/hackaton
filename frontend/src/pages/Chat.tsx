import { useState, useRef, useEffect } from "react";
import RecommendationCard from '@/components/RecommendationCard'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { Header } from '@/components/Header'
import { Pill } from '@/components/Pill'
import { MessageBubble } from '@/components/MessageBubble'
import { Composer } from '@/components/Composer'
import { ContentCard } from '@/components/ContentCard'
import { Button } from '@/components/ui/button'
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription 
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/components/ui/utils'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addMessage } from '@/features/chat/chatSlice'
import { setItems, setStatus } from '@/features/recommendations/recommendationsSlice'
import { getRecommendationsByEmotion, searchContents } from '@/services/recommendations.service'
import { track } from '@/services/analytics'

interface Message {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const MOOD_PILLS = [
  { emoji: "😂", text: "Tengo ganas de reirme un rato" },
  { emoji: "🤯", text: "Necesito algo emocionante para el fin de semana" },
  { emoji: "🥹", text: "Estoy para un buen drama" },
  { emoji: "🍿", text: "Quiero una miniserie atrapante para maratonear" },
  { emoji: "👾", text: "Quiero volver a mi infancia de los 90" },
  { emoji: "🤓", text: "Algún documental que me haga pensar" },
];

export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedPills, setSelectedPills] = useState<string[]>([]);
  const [resultsOpen, setResultsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLDivElement>(null);

  // Redux state
  const status = useAppSelector((s) => s.recommendations.status)
  const recs = useAppSelector((s) => s.recommendations.items)
  const dispatch = useAppDispatch()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePillClick = (pillText: string) => {
    setInputValue(pillText);
    setTimeout(() => {
      const textarea = composerRef.current?.querySelector('textarea');
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(pillText.length, pillText.length);
      }
    }, 0);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const handleStartOver = () => {
    setInputValue("");
    setMessages([]);
    setSelectedPills([]);
    dispatch(setStatus('idle'));
    setResultsOpen(false);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    dispatch(addMessage({ id: crypto.randomUUID(), role: 'user', text: inputValue, createdAt: Date.now() }))
    setInputValue("");
    setResultsOpen(false); // Cerrar sheet si está abierto
    dispatch(setStatus('loading'));
    
    try {
      let items: any[]
      
      // Detectar si es una pill de emoción
      const isEmotionPill = inputValue.includes('ganas de reirme') || 
                           inputValue.includes('algo emocionante') || 
                           inputValue.includes('buen drama') || 
                           inputValue.includes('miniserie atrapante')
      
      if (isEmotionPill) {
        // Mapear pills a emociones
        let emotion = 'sorpresa'
        if (inputValue.includes('ganas de reirme')) emotion = 'alegría'
        else if (inputValue.includes('algo emocionante')) emotion = 'adrenalina'
        else if (inputValue.includes('buen drama')) emotion = 'nostalgia'
        else if (inputValue.includes('miniserie atrapante')) emotion = 'relax'
        
        track('sorprendeme.request', { emotion })
        items = await getRecommendationsByEmotion(emotion)
      } else {
        track('search.query', { q: inputValue })
        items = await searchContents(inputValue)
      }
      
      dispatch(setItems(items))
      dispatch(setStatus('succeeded'))
      // Solo abrir el sheet automáticamente en móvil
      if (window.innerWidth < 768) { // md breakpoint
        setResultsOpen(true);
      }
    } catch (e) {
      console.error('Error in handleSend:', e)
      dispatch(setStatus('failed'))
    }
  };

  const ConversationPane = () => (
    <div className="flex h-full flex-col">
      {/* Header Content */}
      <div className="flex-1 overflow-y-auto p-6 lg:p-8">
        <div className="mx-auto max-w-2xl">
          {/* Main heading */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl lg:text-4xl font-bold text-white">
              Conectá con lo que sentís y disfrutá sin buscar
            </h1>
            <p className="text-lg text-[#B3B8C2]">
              ¿Tenés poco tiempo o pocas ganas de decidir? Contanos para qué estás hoy y dejate sorprender
            </p>
          </div>

          {/* Pills */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {MOOD_PILLS.map((pill) => (
                <Pill
                  key={pill.text}
                  emoji={pill.emoji}
                  text={pill.text}
                  selected={selectedPills.includes(pill.text)}
                  onClick={() => handlePillClick(pill.text)}
                />
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          {messages.length > 0 && (
            <div className="mb-6">
              <div className="space-y-4 rounded-lg bg-[#15171B] p-4">
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    type={message.type}
                    content={message.content}
                  />
                ))}
                {status === 'loading' && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-[#15171B] px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-[#B3B8C2] [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-[#B3B8C2] [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-[#B3B8C2]"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Composer */}
      <div ref={composerRef}>
        <Composer
          value={inputValue}
          onChange={handleInputChange}
          onSend={handleSend}
          onClear={handleClearInput}
          disabled={status === 'loading'}
        />
      </div>
    </div>
  );

  const ResultsPane = () => (
    <div className="flex h-full flex-col bg-[#0E0F12]">
      <div className="border-b border-[#2A2E35] p-6">
        <h2 className="text-xl font-bold text-white">Recomendaciones</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        {status === 'loading' && <LoadingSkeleton />}
        
        {status === 'failed' && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">Hubo un error al buscar recomendaciones</p>
            <button
              onClick={() => handleSend()}
              className="px-6 py-3 bg-[#5B8CFF] hover:bg-[#4A7AE7] text-white rounded-lg transition-all duration-150"
            >
              Reintentar
            </button>
          </div>
        )}
        
        {status === 'succeeded' && recs.length > 0 ? (
          <div className="space-y-6">
            {recs.map((item) => (
              <RecommendationCard key={item.id} item={item} />
            ))}
          </div>
        ) : status !== 'loading' && status !== 'failed' ? (
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <div className="mb-4 text-6xl">🎯</div>
              <p className="text-[#B3B8C2]">
                Tus recomendaciones aparecerán aquí después de que me cuentes qué estás buscando
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="dark flex h-screen flex-col bg-[#0E0F12]">
      <Header showResults={status === 'succeeded' && recs.length > 0} onStartOver={handleStartOver} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Conversation Pane - Full width on mobile when no results, left half when results exist */}
        <div className={cn(
          "flex flex-col transition-all duration-300 overflow-hidden",
          status === 'succeeded' && recs.length > 0 
            ? "w-full md:w-1/2 lg:w-3/5" 
            : "w-full"
        )}>
          <ConversationPane />
        </div>

        {/* Results Pane - Show when there are results */}
        {status === 'succeeded' && recs.length > 0 && (
          <div className="hidden md:flex md:w-1/2 lg:w-2/5">
            <div className="w-full border-l border-[#2A2E35]">
              <ResultsPane />
            </div>
          </div>
        )}

        {/* Mobile/Tablet Results Sheet - Hidden on desktop (xl breakpoint and up) */}
        <Sheet open={resultsOpen} onOpenChange={setResultsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline" 
              size="sm"
              className={cn(
                "fixed bottom-24 right-6 z-50 bg-[#5B8CFF] text-white border-[#5B8CFF] hover:bg-[#4A7AE7] md:hidden",
                !(status === 'succeeded' && recs.length > 0) && "hidden"
              )}
            >
              <Menu className="h-4 w-4 mr-2" />
              Ver resultados ({recs.length})
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] bg-[#0E0F12] border-[#2A2E35] md:hidden">
            <SheetTitle className="sr-only">Recomendaciones de contenido</SheetTitle>
            <SheetDescription className="sr-only">
              Resultados de recomendaciones basados en tu estado de ánimo y preferencias
            </SheetDescription>
            <ResultsPane />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
