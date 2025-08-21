import React, { useEffect } from 'react';
import { useRecommendations } from '@/hooks/useRecommendations';

// Ejemplo de cómo integrar la API en tu aplicación existente
export function ApiIntegrationExample() {
  const { data, loading, error, search, getByEmotion, getByGenre } = useRecommendations();

  // Ejemplo: Cargar recomendaciones automáticamente al montar el componente
  useEffect(() => {
    // Obtener recomendaciones de comedia romántica al cargar
    getByGenre('comedia romántica', 5);
  }, [getByGenre]);

  // Ejemplo: Función para manejar búsqueda desde un input
  const handleSearchSubmit = async (searchQuery: string) => {
    if (searchQuery.trim()) {
      await search(searchQuery);
    }
  };

  // Ejemplo: Función para obtener recomendaciones basadas en el estado de ánimo del usuario
  const handleMoodRecommendation = async (mood: string) => {
    await getByEmotion(mood);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Ejemplo de Integración API</h2>
      
      {/* Ejemplo de uso directo de las funciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleMoodRecommendation('alegría')}
          disabled={loading}
          className="p-4 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 disabled:opacity-50"
        >
          😊 Películas para estar alegre
        </button>
        
        <button
          onClick={() => handleSearchSubmit('películas de acción')}
          disabled={loading}
          className="p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 disabled:opacity-50"
        >
          💥 Películas de acción
        </button>
        
        <button
          onClick={() => getByGenre('terror', 3)}
          disabled={loading}
          className="p-4 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 disabled:opacity-50"
        >
          👻 Películas de terror
        </button>
      </div>

      {/* Mostrar estado de carga */}
      {loading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <span className="ml-2">Cargando...</span>
        </div>
      )}

      {/* Mostrar errores */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      )}

      {/* Mostrar resultados */}
      {data.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Recomendaciones ({data.length}):
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  {item.description}
                </p>
                <div className="text-xs text-gray-500">
                  {item.type === 'movie' ? (
                    <span>🎬 {item.durationMinutes} min</span>
                  ) : (
                    <span>📺 {item.seasons} temporadas</span>
                  )}
                  <span className="ml-2">• {item.parentalRating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Ejemplo de hook personalizado para casos específicos
export function useMovieRecommendations() {
  const { data, loading, error, search, getByEmotion, getByGenre } = useRecommendations();

  // Función específica para obtener comedias románticas
  const getRomanticComedies = async (count: number = 5) => {
    return getByGenre('comedia romántica', count);
  };

  // Función específica para películas de acción
  const getActionMovies = async (count: number = 5) => {
    return getByGenre('acción', count);
  };

  // Función para búsqueda con filtros específicos
  const searchWithFilters = async (query: string, filters?: { genre?: string; mood?: string }) => {
    let searchQuery = query;
    
    if (filters?.genre) {
      searchQuery += ` ${filters.genre}`;
    }
    
    if (filters?.mood) {
      searchQuery += ` para cuando estoy ${filters.mood}`;
    }
    
    return search(searchQuery);
  };

  return {
    movies: data,
    loading,
    error,
    getRomanticComedies,
    getActionMovies,
    searchWithFilters,
    getByEmotion,
    getByGenre,
    search,
  };
}
