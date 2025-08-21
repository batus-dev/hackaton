import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setEmotion } from '@/features/chat/chatSlice'

const EMOTIONS = ['alegría', 'nostalgia', 'adrenalina', 'relax', 'misterio']

export default function EmotionChips() {
  const dispatch = useAppDispatch()
  const selected = useAppSelector((s) => s.chat.selectedEmotion)
  return (
    <div className="flex flex-wrap gap-2">
      {EMOTIONS.map((e) => (
        <button
          key={e}
          onClick={() => dispatch(setEmotion(e))}
          className={`px-3 py-1 rounded-full text-sm border ${
            selected === e ? 'bg-blue-600 border-blue-500' : 'border-white/20 hover:bg-white/5'
          }`}
        >
          {e}
        </button>
      ))}
    </div>
  )
}
