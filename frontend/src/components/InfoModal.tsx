import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeModal } from '@/features/ui/uiSlice'

export default function InfoModal() {
  const dispatch = useAppDispatch()
  const id = useAppSelector((s) => s.ui.modalContentId)
  const item = useAppSelector((s) => (id ? s.watchlist.entities[id] ?? s.recommendations.items.find(i => i.id === id) : null))

  if (!id || !item) return null

  const meta = item.type === 'movie' ? `${item.durationMinutes} min` : `${item.seasons} temporadas`
  const year = new Date().getFullYear() - Math.floor(Math.random() * 10) // Mock year

  return (
    <div 
      className="fixed inset-0 bg-bg/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={() => dispatch(closeModal())}
    >
      <div 
        className="bg-surface border border-border rounded-lg max-w-lg w-full overflow-hidden shadow-2 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex items-start gap-4">
          {/* Imagen comentada temporalmente - no viene de la API */}
          {/* <img 
            src={item.posterUrl} 
            alt={item.title} 
            className="w-24 aspect-[2/3] object-cover rounded-md flex-shrink-0" 
          /> */}
          <div className="w-24 aspect-[2/3] bg-surface-2 rounded-md flex items-center justify-center flex-shrink-0">
            <span className="text-text-dim text-xs">Sin imagen</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-text mb-2">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-text-dim mb-3 flex-wrap">
              <span>{meta}</span>
              <span>•</span>
              <span>{year}</span>
              <span>•</span>
              <span>{item.genres.join(', ')}</span>
              <span className="bg-surface-2 text-warning px-2 py-0.5 rounded text-xs font-medium">
                {item.parentalRating}
              </span>
            </div>
            <p className="text-sm text-text-dim leading-relaxed">{item.description}</p>
          </div>
        </div>
        <div className="px-6 pb-6 flex justify-end gap-3 border-t border-border pt-4">
          <button 
            onClick={() => dispatch(closeModal())} 
            className="px-6 py-2 bg-surface-2 hover:bg-border text-text rounded-lg transition-all duration-150 min-h-[44px]"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
