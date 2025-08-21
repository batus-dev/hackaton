import type { Content } from '@/types';

// Interfaz para la respuesta real de tu API
export interface ApiMovieItem {
  titulo: string;
  genero: string;
  descripcion: string;
  sinopsis: string;
  keywords: string[];
  temporadas: number | null;
  duracion_minutos: number;
  rating_parental: string;
}

// Función para generar un poster placeholder basado en el título
function generatePosterUrl(title: string): string {
  const encodedTitle = encodeURIComponent(title);
  return `https://via.placeholder.com/400x600/1a1a1a/ffffff?text=${encodedTitle}`;
}

// Función para generar un ID único basado en el título
function generateId(title: string, index: number): string {
  return `api_${title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}_${index}`;
}

// Función para determinar el tipo de contenido
function determineContentType(item: ApiMovieItem): 'movie' | 'series' {
  // Si tiene temporadas y no es null, es una serie
  return item.temporadas !== null && item.temporadas > 0 ? 'series' : 'movie';
}

// Función para procesar géneros
function processGenres(genero: string, keywords: string[]): string[] {
  const genres = new Set<string>();
  
  // Agregar el género principal
  if (genero) {
    genres.add(capitalizeFirst(genero));
  }
  
  // Extraer géneros adicionales de las keywords
  const genreKeywords = keywords.filter(keyword => {
    const lower = keyword.toLowerCase();
    return lower.includes('comedia') || 
           lower.includes('drama') || 
           lower.includes('romance') || 
           lower.includes('romántica') || 
           lower.includes('acción') || 
           lower.includes('terror') || 
           lower.includes('thriller') || 
           lower.includes('musical') || 
           lower.includes('biográfico') || 
           lower.includes('documental') || 
           lower.includes('aventura') || 
           lower.includes('fantasía') || 
           lower.includes('ciencia ficción');
  });
  
  genreKeywords.forEach(keyword => {
    genres.add(capitalizeFirst(keyword));
  });
  
  return Array.from(genres);
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function adaptApiResponseToContent(apiResponse: ApiMovieItem[]): Content[] {
  if (!Array.isArray(apiResponse)) {
    console.error('API response is not an array:', apiResponse);
    return [];
  }

  return apiResponse.map((item, index) => {
    const contentType = determineContentType(item);
    const id = generateId(item.titulo, index);
    const title = item.titulo;
    const genres = processGenres(item.genero, item.keywords || []);
    const description = item.descripcion || item.sinopsis || 'Sin descripción disponible';
    const posterUrl = generatePosterUrl(title);
    const parentalRating = item.rating_parental || 'PG-13';

    if (contentType === 'series') {
      return {
        id,
        type: 'series',
        title,
        genres,
        seasons: item.temporadas || 1,
        parentalRating,
        description,
        posterUrl,
      } as Content;
    } else {
      return {
        id,
        type: 'movie',
        title,
        genres,
        durationMinutes: item.duracion_minutos || 120,
        parentalRating,
        description,
        posterUrl,
      } as Content;
    }
  });
}

// Función de conveniencia para hacer la llamada y adaptar en un solo paso
export async function getAdaptedRecommendations(
  query: string,
  numberOfResults: number = 5
): Promise<Content[]> {
  try {
    const { ApiService } = await import('./api.service');
    const apiResponse = await ApiService.getRecommendations(query, numberOfResults);
    return adaptApiResponseToContent(apiResponse);
  } catch (error) {
    console.error('Error getting adapted recommendations:', error);
    throw error; // Re-lanzar el error para que el servicio pueda manejarlo
  }
}
