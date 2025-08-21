import type { Content } from '@/types'

// Dataset mock global para recomendaciones/búsquedas
const DATASET: Content[] = [
  {
    id: 'm1',
    type: 'movie',
    title: 'Risas al Atardecer',
    genres: ['Comedia'],
    durationMinutes: 96,
    parentalRating: 'PG-13',
    description: 'Comedia ligera para levantar el ánimo después de un día largo.',
    posterUrl: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 's1',
    type: 'series',
    title: 'Misterios del Barrio',
    genres: ['Drama', 'Misterio'],
    seasons: 3,
    parentalRating: 'TV-14',
    description: 'Intrigas y secretos en una comunidad aparentemente tranquila.',
    posterUrl: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'm2',
    type: 'movie',
    title: 'Carrera Extrema',
    genres: ['Acción', 'Aventura'],
    durationMinutes: 118,
    parentalRating: 'PG-13',
    description: 'Adrenalina pura a máxima velocidad.',
    posterUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'm3',
    type: 'movie',
    title: 'Noche Nostálgica',
    genres: ['Drama', 'Romance'],
    durationMinutes: 102,
    parentalRating: 'PG',
    description: 'Un viaje a los recuerdos, cargado de nostalgia, que reconcilia el presente.',
    posterUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 's2',
    type: 'series',
    title: 'Exploradores del Silencio',
    genres: ['Documental'],
    seasons: 2,
    parentalRating: 'TV-PG',
    description: 'Paisajes calmos y reflexión para momentos de relax.',
    posterUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&auto=format&fit=crop&q=60',
  },
]

export async function getRecommendationsByEmotion(emotion: string): Promise<Content[]> {
  // Simulación de latencia
  await new Promise((r) => setTimeout(r, 600))

  const e = emotion.toLowerCase()
  if (['alegría', 'alegria', 'felicidad'].includes(e)) {
    return DATASET.filter((d) => d.genres.includes('Comedia') || d.description.toLowerCase().includes('ánimo'))
  }
  if (['adrenalina', 'emocion', 'emoción'].includes(e)) {
    return DATASET.filter((d) => d.genres.includes('Acción') || d.description.toLowerCase().includes('adrenalina'))
  }
  if (['nostalgia', 'nostálgico', 'nostalgico'].includes(e)) {
    return DATASET.filter((d) => d.title.toLowerCase().includes('nost') || d.genres.includes('Romance'))
  }
  if (['relax', 'relajación', 'relajacion', 'calma'].includes(e)) {
    return DATASET.filter((d) => d.genres.includes('Documental') || d.description.toLowerCase().includes('relax'))
  }
  // Fallback: devolver mezcla
  return DATASET.slice(0, 4)
}

function stripDiacritics(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '')
}

export async function searchContents(query: string): Promise<Content[]> {
  await new Promise((r) => setTimeout(r, 300))
  const q = stripDiacritics(query.toLowerCase().trim())
  if (!q) return []
  return DATASET.filter((d) => {
    const title = stripDiacritics(d.title.toLowerCase())
    const genres = stripDiacritics(d.genres.join(' ').toLowerCase())
    const desc = stripDiacritics(d.description.toLowerCase())
    return title.includes(q) || genres.includes(q) || desc.includes(q)
  })
}
