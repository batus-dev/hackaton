import { useAppSelector } from '@/store/hooks'
import RecommendationCard from '@/components/RecommendationCard'

export default function MyList() {
  const ids = useAppSelector((s) => s.watchlist.ids)
  const entities = useAppSelector((s) => s.watchlist.entities)
  const items = ids.map((id) => entities[id])

  return (
    <div className="min-h-screen-dynamic bg-bg pb-[120px]">
      <div className="max-w-container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">Mi Lista</h1>
          <p className="text-text-dim">Tu colección personal de contenido</p>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-dim text-lg mb-4">
              Aún no agregaste contenido a tu lista.
            </p>
            <p className="text-text-dim">
              Explorá recomendaciones en el chat para empezar tu colección.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RecommendationCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
