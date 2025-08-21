import { useAppSelector } from '@/store/hooks'
import RecommendationCard from '@/components/RecommendationCard'

export default function MyList() {
  const ids = useAppSelector((s) => s.watchlist.ids)
  const entities = useAppSelector((s) => s.watchlist.entities)
  const items = ids.map((id) => entities[id])

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Mi Lista</h1>
      {items.length === 0 ? (
        <p className="text-gray-400">Aún no agregaste contenido. Busca en Home o usa el Chat.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
