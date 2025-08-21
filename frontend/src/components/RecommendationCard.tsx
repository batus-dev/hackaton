import type { Content } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggle } from '@/features/watchlist/watchlistSlice'
import { openModal } from '@/features/ui/uiSlice'
import { track } from '@/services/analytics'

interface Props {
  item: Content
}

export default function RecommendationCard({ item }: Props) {
  const dispatch = useAppDispatch()
  const inList = useAppSelector((s) => !!s.watchlist.entities[item.id])

  const meta = item.type === 'movie' ? `${item.durationMinutes} min` : `${item.seasons} temporadas`
  const genres = item.genres.join(', ')

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden flex flex-col">
      <img src={item.posterUrl} alt={item.title} className="h-48 w-full object-cover" />
      <div className="p-3 flex-1 flex flex-col gap-2">
        <h3 className="font-semibold truncate">{item.title}</h3>
        <p className="text-xs text-gray-400 truncate">{genres} • {meta} • {item.parentalRating}</p>
        <p className="text-sm text-gray-300">{item.description}</p>
        <div className="mt-auto flex gap-2 pt-2">
          <button
            onClick={() => {
              track('play.start', { contentId: item.id })
              alert('Reproductor simulado: ' + item.title)
            }}
            className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-sm"
          >
            Reproducir
          </button>
          <button
            onClick={() => {
              dispatch(toggle(item))
              track(inList ? 'watchlist.remove' : 'watchlist.add', { contentId: item.id })
            }}
            className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-sm"
          >
            {inList ? 'Quitar de Mi Lista' : 'Agregar a Mi Lista'}
          </button>
          <button
            onClick={() => dispatch(openModal(item.id))}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-sm"
          >
            +Info
          </button>
        </div>
      </div>
    </div>
  )
}
