import { useState } from 'react'
import EmotionChips from '@/components/EmotionChips'
import RecommendationCard from '@/components/RecommendationCard'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addMessage } from '@/features/chat/chatSlice'
import { setItems, setStatus } from '@/features/recommendations/recommendationsSlice'
import { getRecommendationsByEmotion, searchContents } from '@/services/recommendations.service'
import { track } from '@/services/analytics'

export default function Chat() {
  const [input, setInput] = useState('')
  const emotion = useAppSelector((s) => s.chat.selectedEmotion)
  const status = useAppSelector((s) => s.recommendations.status)
  const recs = useAppSelector((s) => s.recommendations.items)
  const dispatch = useAppDispatch()

  const onSend = async () => {
    const text = input.trim()
    if (!text && !emotion) return
    dispatch(addMessage({ id: crypto.randomUUID(), role: 'user', text: text || `Quiero sentir ${emotion}`, createdAt: Date.now(), emotion }))
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
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Chat emocional</h1>
      <div className="space-y-4">
        <EmotionChips />
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onSend()
              }
            }}
            placeholder="Buscar contenidos o emociones (p. ej., comedia, nostalgia, acción)"
            className="flex-1 px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button onClick={onSend} disabled={status==='loading'} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50">Sorpréndeme</button>
        </div>
        {status === 'loading' && <p className="text-gray-400">Buscando recomendaciones...</p>}
        {status !== 'loading' && (
          recs.length === 0 ? (
            <p className="text-gray-400">
              {status === 'succeeded' ? 'No se encontraron resultados.' : 'Usa el chat para obtener recomendaciones personalizadas por emoción o por texto.'}
            </p>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {recs.map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
