import type { ApiMovieItem } from './api.adapter';

// Servicio para integrar con la API de recomendaciones
const API_BASE_URL = 'https://tumcufgmv8.execute-api.us-west-2.amazonaws.com/prod';

export interface ApiRecommendationRequest {
  query: string;
  numberOfResults: number;
}

export class ApiService {
  private static async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  static async getRecommendations(
    query: string,
    numberOfResults: number = 3
  ): Promise<ApiMovieItem[]> {
    const requestBody: ApiRecommendationRequest = {
      query,
      numberOfResults,
    };

    return this.makeRequest<ApiMovieItem[]>('/retrieve', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
  }

  // Método de conveniencia para diferentes tipos de consultas
  static async getRecommendationsByGenre(
    genre: string,
    numberOfResults: number = 5
  ): Promise<ApiMovieItem[]> {
    return this.getRecommendations(`películas de ${genre}`, numberOfResults);
  }

  static async getRecommendationsByMood(
    mood: string,
    numberOfResults: number = 5
  ): Promise<ApiMovieItem[]> {
    return this.getRecommendations(`películas para cuando estoy ${mood}`, numberOfResults);
  }

  static async searchContent(
    searchTerm: string,
    numberOfResults: number = 10
  ): Promise<ApiMovieItem[]> {
    return this.getRecommendations(searchTerm, numberOfResults);
  }
}
