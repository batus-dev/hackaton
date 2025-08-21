import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeModal } from '@/features/ui/uiSlice'

export default function InfoModal() {
  const dispatch = useAppDispatch()
  const id = useAppSelector((s) => s.ui.modalContentId)
  const item = useAppSelector((s) => (id ? s.watchlist.entities[id] ?? s.recommendations.items.find(i => i.id === id) : null))

  if (!id || !item) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 border border-white/10 rounded-lg max-w-lg w-full overflow-hidden">
        <div className="p-4 flex items-start gap-4">
          <img src={item.posterUrl} alt={item.title} className="w-24 h-36 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{item.genres.join(', ')} • {item.parentalRating}</p>
            <p className="text-sm text-gray-300 mt-2">{item.description}</p>
          </div>
        </div>
        <div className="p-4 flex justify-end gap-2 border-t border-white/10">
          <button onClick={() => dispatch(closeModal())} className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-sm">Cerrar</button>
        </div>
      </div>
    </div>
  )
}
