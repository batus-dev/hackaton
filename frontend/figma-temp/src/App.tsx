import { useState, useRef, useEffect } from "react";
import { Header } from "./components/Header";
import { Pill } from "./components/Pill";
import { MessageBubble } from "./components/MessageBubble";
import { Composer } from "./components/Composer";
import { ContentCard } from "./components/ContentCard";
import { Button } from "./components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription 
} from "./components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "./components/ui/utils";

interface Message {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  year?: number;
  genre: string;
  seasons?: string;
  duration?: string;
  ageRating: string;
  description: string;
  type: 'movie' | 'series' | 'documentary';
}

const MOOD_PILLS = [
  { emoji: "😂", text: "Tengo ganas de reirme un rato" },
  { emoji: "🤯", text: "Necesito algo emocionante para el fin de semana" },
  { emoji: "🥹", text: "Estoy para un buen drama" },
  { emoji: "🍿", text: "Quiero una miniserie atrapante para maratonear" },
  { emoji: "👾", text: "Quiero volver a mi infancia de los 90" },
  { emoji: "🤓", text: "Algún documental que me haga pensar" },
];

const SAMPLE_CONTENT: ContentItem[] = [
  {
    id: '1',
    title: 'Hunters',
    thumbnail: 'https://images.unsplash.com/photo-1489599037158-5eb1e4e24e95?w=400&h=600&fit=crop',
    rating: 5.7,
    genre: 'Drama, Crimen',
    seasons: '2 temporadas',
    duration: '2018',
    ageRating: '+16',
    description: 'Una caza de nazis en la Nueva York de los 70. Ideal si buscás algo intenso, entretenido y con un toque de justicia brutal.',
    type: 'series'
  },
  {
    id: '2',
    title: 'Maje',
    thumbnail: 'https://images.unsplash.com/photo-1489599037158-5eb1e4e24e95?w=400&h=600&fit=crop',
    rating: 5.7,
    genre: 'Documental, Crimen',
    duration: '1 h 7 min',
    year: 2025,
    ageRating: '+16',
    description: 'En 2017 el cuerpo de un ingeniero aparece sin vida en un barrio de Valencia. Buena elección si tenés ganas de un documental atrapante.',
    type: 'documentary'
  }
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedPills, setSelectedPills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePillClick = (pillText: string) => {
    setInputValue(pillText);
    // Ensure composer maintains focus after pill click
    setTimeout(() => {
      const textarea = composerRef.current?.querySelector('textarea');
      if (textarea) {
        textarea.focus();
        // Position cursor at end of text
        textarea.setSelectionRange(pillText.length, pillText.length);
      }
    }, 0);
  };

  const handleInputChange = (value: string) => {
    // Direct, immediate state update without any processing
    setInputValue(value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const handleStartOver = () => {
    setInputValue("");
    setMessages([]);
    setSelectedPills([]);
    setIsLoading(false);
    setShowResults(false);
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
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      setResultsOpen(true);
    }, 2000);
  };

  const ConversationPane = () => (
    <div className="flex h-full flex-col">
      {/* Header Content */}
      <div className="flex-1 overflow-hidden p-6 lg:p-8">
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
                {isLoading && (
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
          disabled={isLoading}
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
        {showResults ? (
          <div className="space-y-6">
            {SAMPLE_CONTENT.map((item) => (
              <ContentCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <div className="mb-4 text-6xl">🎯</div>
              <p className="text-[#B3B8C2]">
                Tus recomendaciones aparecerán aquí después de que me cuentes qué estás buscando
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="dark flex h-screen flex-col bg-[#0E0F12]">
      <Header showResults={showResults} onStartOver={handleStartOver} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Conversation Pane - Full width on mobile, left half on desktop */}
        <div className="flex w-full flex-col lg:w-1/2 xl:w-3/5">
          <ConversationPane />
        </div>

        {/* Results Pane - Hidden on mobile, shown in sheet */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-2/5">
          <div className="w-full border-l border-[#2A2E35]">
            <ResultsPane />
          </div>
        </div>

        {/* Mobile/Tablet Results Sheet - Hidden on desktop (xl breakpoint and up) */}
        <Sheet open={resultsOpen} onOpenChange={setResultsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline" 
              size="sm"
              className={cn(
                "fixed bottom-6 right-6 z-50 bg-[#5B8CFF] text-white border-[#5B8CFF] hover:bg-[#4A7AE7] xl:hidden",
                !showResults && "hidden"
              )}
            >
              <Menu className="h-4 w-4 mr-2" />
              Ver resultados
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] bg-[#0E0F12] border-[#2A2E35] xl:hidden">
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