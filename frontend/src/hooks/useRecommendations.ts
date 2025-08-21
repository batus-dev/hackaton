import { useState, useCallback } from 'react';
import type { Content } from '@/types';
import { 
  getRecommendationsByEmotion, 
  searchContents, 
  getRecommendationsByGenre 
} from '@/services/recommendations.service';

interface UseRecommendationsState {
  data: Content[];
  loading: boolean;
  error: string | null;
}

export function useRecommendations() {
  const [state, setState] = useState<UseRecommendationsState>({
    data: [],
    loading: false,
    error: null,
  });

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const setData = useCallback((data: Content[]) => {
    setState(prev => ({ ...prev, data }));
  }, []);

  const getByEmotion = useCallback(async (emotion: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await getRecommendationsByEmotion(emotion);
      setData(results);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setError(`Error al obtener recomendaciones por emoción: ${errorMessage}`);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setData]);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setData([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const results = await searchContents(query);
      setData(results);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setError(`Error al buscar contenido: ${errorMessage}`);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setData]);

  const getByGenre = useCallback(async (genre: string, numberOfResults?: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await getRecommendationsByGenre(genre, numberOfResults);
      setData(results);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setError(`Error al obtener recomendaciones por género: ${errorMessage}`);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setData]);

  const clearResults = useCallback(() => {
    setData([]);
    setError(null);
  }, [setData, setError]);

  return {
    ...state,
    getByEmotion,
    search,
    getByGenre,
    clearResults,
  };
}
