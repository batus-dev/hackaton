import { useState } from 'react'
import EmotionChips from '@/components/EmotionChips'
import RecommendationCard from '@/components/RecommendationCard'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addMessage } from '@/features/chat/chatSlice'
import { setItems, setStatus } from '@/features/recommendations/recommendationsSlice'
import { getRecommendationsByEmotion, searchContents } from '@/services/recommendations.service'
import { track } from '@/services/analytics'
import { SendIcon, SparklesIcon } from '@/components/Icons'

export default function Chat() {
  const [input, setInput] = useState('')
  const emotion = useAppSelector((s) => s.chat.selectedEmotion)
  const status = useAppSelector((s) => s.recommendations.status)
  const recs = useAppSelector((s) => s.recommendations.items)
  const dispatch = useAppDispatch()

  const onSend = async () => {
    const text = input.trim()
    if (!text && !emotion) return
    dispatch(addMessage({ id: crypto.randomUUID(), role: 'user', text: text || emotion, createdAt: Date.now(), emotion }))
    setInput('')
    dispatch(setStatus('loading'))
    if (text) {
      track('search.query', { q: text })
    } else {
      track('sorprendeme.request', { emotion })
    }
    try {
      const items = text
        ? await searchContents(text)
        : await getRecommendationsByEmotion(emotion || 'sorpresa')
      dispatch(setItems(items))
      dispatch(setStatus('succeeded'))
    } catch (e) {
      console.error(e)
      dispatch(setStatus('failed'))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Chat Header - Sticky */}
      <div className="sticky top-0 z-20 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-container mx-auto px-4 py-6 md:px-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
              Hacé match con tu próximo contenido
            </h1>
            <p className="text-text-dim">
              Armá una colección de pelis y series personalizada
            </p>
          </div>
          
          {/* Input Container */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="relative flex items-center bg-surface border border-border rounded-full shadow-1 overflow-hidden">
              <div className="flex items-center pl-4">
                <SparklesIcon className="text-text-dim" size={20} />
              </div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    onSend()
                  }
                }}
                placeholder="¿Para qué estás hoy?"
                className="flex-1 px-4 py-4 bg-transparent text-text placeholder-text-dim focus:outline-none"
                disabled={status === 'loading'}
              />
              <button
                onClick={onSend}
                disabled={status === 'loading' || (!input.trim() && !emotion)}
                className="m-2 p-3 bg-brand hover:bg-brand-press disabled:opacity-50 disabled:cursor-not-allowed text-bg rounded-full transition-all duration-150 shadow-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Enviar"
              >
                <SendIcon size={18} />
              </button>
            </div>
          </div>

          {/* Emotion Pills */}
          <EmotionChips />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 max-w-container mx-auto px-4 py-6 md:px-6 w-full">
        {status === 'loading' && <LoadingSkeleton />}
        
        {status === 'failed' && (
          <div className="text-center py-12">
            <p className="text-error mb-4">Hubo un error al buscar recomendaciones</p>
            <button
              onClick={onSend}
              className="px-6 py-3 bg-brand hover:bg-brand-press text-bg rounded-lg transition-all duration-150"
            >
              Reintentar
            </button>
          </div>
        )}
        
        {status !== 'loading' && status !== 'failed' && (
          recs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-dim text-lg">
                Decime cómo querés sentirte y te recomiendo algo al toque.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {recs.map((item, index) => (
                <div 
                  key={item.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <RecommendationCard item={item} />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
