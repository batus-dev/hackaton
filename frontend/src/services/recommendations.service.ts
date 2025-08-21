import type { Content } from '@/types'

export async function getRecommendationsByEmotion(emotion: string): Promise<Content[]> {
  // Simulación de latencia
  await new Promise((r) => setTimeout(r, 600))

  const seed = emotion.toLowerCase()
  const base: Content[] = [
    {
      id: 'm1',
      type: 'movie',
      title: seed === 'adrenalina' ? 'Carrera Extrema' : 'Risas al Atardecer',
      genres: seed === 'adrenalina' ? ['Acción', 'Aventura'] : ['Comedia'],
      durationMinutes: seed === 'adrenalina' ? 118 : 96,
      parentalRating: 'PG-13',
      description: 'Una historia que conecta con tu emoción del momento.',
      posterUrl: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 's1',
      type: 'series',
      title: seed === 'nostalgia' ? 'Recuerdos de Ayer' : 'Misterios del Barrio',
      genres: ['Drama', 'Misterio'],
      seasons: 3,
      parentalRating: 'TV-14',
      description: 'Episodios que te atrapan y te hacen sentir identificado.',
      posterUrl: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60',
    },
  ]

  return base
}
