import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setEmotion } from '@/features/chat/chatSlice'

const EMOTION_PILLS = [
  '😄 Tengo ganas de reirme un rato',
  '🤯 Necesito algo emocionante para el fin de semana',
  '🥺 Estoy para un buen drama',
  '🍿 Quiero una miniserie atrapante para maratonear'
]

export default function EmotionChips() {
  const dispatch = useAppDispatch()
  const selected = useAppSelector((s) => s.chat.selectedEmotion)
  
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
      {EMOTION_PILLS.map((pill, index) => {
        return (
          <button
            key={index}
            onClick={() => dispatch(setEmotion(pill))}
            className={`flex-shrink-0 px-4 py-3 rounded-full text-sm border transition-all duration-200 snap-start min-w-max ${
              selected === pill 
                ? 'bg-surface-2 border-brand text-brand shadow-1' 
                : 'bg-surface-2 border-border text-text-dim hover:bg-surface hover:border-text-dim hover:shadow-1 focus:outline-none focus:ring-2 focus:ring-brand'
            }`}
            aria-label={`Seleccionar emoción: ${pill}`}
          >
            {pill}
          </button>
        )
      })}
    </div>
  )
}
