import type { Content } from '@/types'
import { getAdaptedRecommendations } from './api.adapter'

export async function getRecommendationsByEmotion(emotion: string): Promise<Content[]> {
  try {
    // Construir query basada en la emoción
    let query = '';
    const e = emotion.toLowerCase();
    
    if (['alegría', 'alegria', 'felicidad'].includes(e)) {
      query = 'películas de comedia romántica para estar alegre';
    } else if (['adrenalina', 'emocion', 'emoción'].includes(e)) {
      query = 'películas de acción llenas de adrenalina';
    } else if (['nostalgia', 'nostálgico', 'nostalgico'].includes(e)) {
      query = 'películas nostálgicas y románticas';
    } else if (['relax', 'relajación', 'relajacion', 'calma'].includes(e)) {
      query = 'películas relajantes y documentales';
    } else {
      query = `películas para cuando estoy ${emotion}`;
    }

    const results = await getAdaptedRecommendations(query, 5);
    return results;
  } catch (error) {
    console.error('Error getting recommendations from API:', error);
    throw error;
  }
}

export async function searchContents(query: string): Promise<Content[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    const results = await getAdaptedRecommendations(query, 10);
    return results;
  } catch (error) {
    console.error('Error searching content from API:', error);
    throw error;
  }
}

// Función adicional para obtener recomendaciones por género
export async function getRecommendationsByGenre(genre: string, numberOfResults: number = 5): Promise<Content[]> {
  try {
    const query = `películas de ${genre}`;
    const results = await getAdaptedRecommendations(query, numberOfResults);
    return results;
  } catch (error) {
    console.error('Error getting genre recommendations from API:', error);
    throw error;
  }
}
