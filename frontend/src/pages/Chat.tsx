import RecommendationCard from '@/components/RecommendationCard'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import ChatComposer from '@/components/ChatComposer'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addMessage } from '@/features/chat/chatSlice'
import { setItems, setStatus } from '@/features/recommendations/recommendationsSlice'
import { getRecommendationsByEmotion, searchContents } from '@/services/recommendations.service'
import { track } from '@/services/analytics'

export default function Chat() {
  const status = useAppSelector((s) => s.recommendations.status)
  const recs = useAppSelector((s) => s.recommendations.items)
  const dispatch = useAppDispatch()

  const onSend = async (text: string) => {
    dispatch(addMessage({ id: crypto.randomUUID(), role: 'user', text, createdAt: Date.now() }))
    dispatch(setStatus('loading'))
    
    try {
      let items: any[]
      
      // Detectar si es una pill de emoción
      const isEmotionPill = text.includes('ganas de reirme') || 
                           text.includes('algo emocionante') || 
                           text.includes('buen drama') || 
                           text.includes('miniserie atrapante')
      
      if (isEmotionPill) {
        // Mapear pills a emociones
        let emotion = 'sorpresa'
        if (text.includes('ganas de reirme')) emotion = 'alegría'
        else if (text.includes('algo emocionante')) emotion = 'adrenalina'
        else if (text.includes('buen drama')) emotion = 'nostalgia'
        else if (text.includes('miniserie atrapante')) emotion = 'relax'
        
        track('sorprendeme.request', { emotion })
        items = await getRecommendationsByEmotion(emotion)
      } else {
        track('search.query', { q: text })
        items = await searchContents(text)
      }
      
      dispatch(setItems(items))
      dispatch(setStatus('succeeded'))
    } catch (e) {
      console.error(e)
      dispatch(setStatus('failed'))
    }
  }

  return (
    <div className="min-h-screen-dynamic bg-bg text-text pb-[120px]">
      {/* Header */}
      <div className="max-w-container mx-auto px-4 py-8 md:px-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-text mb-3">
            Conectá con lo que sentís y disfrutá sin buscar
          </h1>
          <p className="text-text-dim max-w-2xl mx-auto">
            ¿Tenés poco tiempo o pocas ganas de decidir? Contanos para qué estás hoy y dejate sorprender
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-container mx-auto px-4 md:px-6">
        {status === 'loading' && <LoadingSkeleton />}
        
        {status === 'failed' && (
          <div className="text-center py-12">
            <p className="text-error mb-4">Hubo un error al buscar recomendaciones</p>
            <button
              onClick={() => onSend('sorpresa')}
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
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
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

      {/* Fixed Composer */}
      <ChatComposer onSend={onSend} isLoading={status === 'loading'} />
    </div>
  )
}
