import { useAppSelector } from '@/store/hooks'
import RecommendationCard from '@/components/RecommendationCard'

export default function Home() {
  const recs = useAppSelector((s) => s.recommendations.items)
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Recomendaciones</h1>
      {recs.length === 0 ? (
        <p className="text-gray-400">Usa el chat para obtener recomendaciones personalizadas por emoción.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recs.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
