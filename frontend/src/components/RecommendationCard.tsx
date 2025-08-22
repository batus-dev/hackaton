import type { Content } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggle } from '@/features/watchlist/watchlistSlice'
import { openModal } from '@/features/ui/uiSlice'
import { track } from '@/services/analytics'
import { PlayIcon, InfoIcon, PlusIcon } from './Icons'

interface Props {
  item: Content
}

export default function RecommendationCard({ item }: Props) {
  const dispatch = useAppDispatch()
  const inList = useAppSelector((s) => !!s.watchlist.entities[item.id])

  const meta = item.type === 'movie' ? `${item.durationMinutes} min` : `${item.seasons} temporadas`
  const genres = item.genres.join(', ')
  const year = new Date().getFullYear() - Math.floor(Math.random() * 10) // Mock year

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-2 hover:-translate-y-1 group">
      {/* Desktop Layout - Compact */}
      <div className="hidden lg:grid lg:grid-cols-[180px_1fr] gap-4 p-4">
        <div className="relative">
          <img
            src={item.posterUrl || '/flow-logo.svg'}
            alt={item.title}
            className="w-full aspect-[2/3] object-cover rounded-md"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/flow-logo.svg' }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-base font-semibold text-text mb-1 line-clamp-2">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-text-dim mb-2 flex-wrap">
              <span>{meta}</span>
              <span>•</span>
              <span>{year}</span>
              <span>•</span>
              <span className="truncate">{genres}</span>
              <span className="bg-surface-2 text-warning px-1.5 py-0.5 rounded text-xs font-medium flex-shrink-0">
                {item.parentalRating}
              </span>
            </div>
          </div>
          <p className="text-sm text-text-dim line-clamp-2 flex-1">{item.description}</p>
          <div className="flex items-center gap-2 mt-auto">
            <button
              onClick={() => {
                track('play.start', { contentId: item.id })
                alert('Reproductor simulado: ' + item.title)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand-press text-bg font-medium rounded-lg transition-all duration-150 group-hover:shadow-1 min-h-[44px] text-sm"
              aria-label="Reproducir contenido"
            >
              <PlayIcon size={16} />
              Play
            </button>
            <button
              onClick={() => dispatch(openModal(item.id))}
              className="p-2 bg-transparent hover:bg-surface-2 text-text-dim hover:text-text rounded-lg transition-all duration-150 min-h-[44px] min-w-[44px]"
              aria-label="Más detalles"
              title="Más detalles"
            >
              <InfoIcon size={16} />
            </button>
            <button
              onClick={() => {
                dispatch(toggle(item))
                track(inList ? 'watchlist.remove' : 'watchlist.add', { contentId: item.id })
              }}
              className="p-2 bg-transparent hover:bg-surface-2 text-text-dim hover:text-text rounded-lg transition-all duration-150 min-h-[44px] min-w-[44px]"
              aria-label="Sumar a Mi lista"
              title="Sumar a Mi lista"
            >
              <PlusIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="relative">
          <img
            src={item.posterUrl || '/flow-logo.svg'}
            alt={item.title}
            className="w-full aspect-[2/3] object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/flow-logo.svg' }}
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div>
            <h3 className="text-base font-semibold text-text mb-1 line-clamp-2">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-text-dim mb-2 flex-wrap">
              <span>{meta}</span>
              <span>•</span>
              <span>{year}</span>
              <span>•</span>
              <span className="truncate">{genres}</span>
              <span className="bg-surface-2 text-warning px-1.5 py-0.5 rounded text-xs font-medium flex-shrink-0">
                {item.parentalRating}
              </span>
            </div>
          </div>
          <p className="text-sm text-text-dim line-clamp-2">{item.description}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                track('play.start', { contentId: item.id })
                alert('Reproductor simulado: ' + item.title)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand-press text-bg font-medium rounded-lg transition-all duration-150 flex-1 justify-center min-h-[44px] text-sm"
              aria-label="Reproducir contenido"
            >
              <PlayIcon size={16} />
              Play
            </button>
            <button
              onClick={() => dispatch(openModal(item.id))}
              className="p-2 bg-transparent hover:bg-surface-2 text-text-dim hover:text-text rounded-lg transition-all duration-150 min-h-[44px] min-w-[44px]"
              aria-label="Más detalles"
              title="Más detalles"
            >
              <InfoIcon size={16} />
            </button>
            <button
              onClick={() => {
                dispatch(toggle(item))
                track(inList ? 'watchlist.remove' : 'watchlist.add', { contentId: item.id })
              }}
              className="p-2 bg-transparent hover:bg-surface-2 text-text-dim hover:text-text rounded-lg transition-all duration-150 min-h-[44px] min-w-[44px]"
              aria-label="Sumar a Mi lista"
              title="Sumar a Mi lista"
            >
              <PlusIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
