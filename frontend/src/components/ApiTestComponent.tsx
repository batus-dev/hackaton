import React, { useState } from 'react';
import { useRecommendations } from '@/hooks/useRecommendations';

export function ApiTestComponent() {
  const [query, setQuery] = useState('');
  const { data, loading, error, search, getByEmotion, getByGenre, clearResults } = useRecommendations();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      search(query);
    }
  };

  const handleEmotionClick = (emotion: string) => {
    getByEmotion(emotion);
  };

  const handleGenreClick = (genre: string) => {
    getByGenre(genre);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🎬 Prueba de Integración API</h2>
      
      {/* Formulario de búsqueda */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar películas o series... (ej: 'comedia romántica', 'acción', 'terror')"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </form>

      {/* Botones de prueba rápida */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">🚀 Pruebas rápidas</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Por emoción:</h4>
            <div className="flex flex-wrap gap-2">
              {['alegría', 'nostalgia', 'adrenalina', 'relax'].map((emotion) => (
                <button
                  key={emotion}
                  onClick={() => handleEmotionClick(emotion)}
                  disabled={loading}
                  className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 disabled:opacity-50 text-sm font-medium transition-colors"
                >
                  😊 {emotion}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Por género:</h4>
            <div className="flex flex-wrap gap-2">
              {['comedia romántica', 'acción', 'drama', 'terror', 'ciencia ficción'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreClick(genre)}
                  disabled={loading}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 disabled:opacity-50 text-sm font-medium transition-colors"
                >
                  🎭 {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botón para limpiar resultados */}
      {data.length > 0 && (
        <div className="text-center mb-6">
          <button
            onClick={clearResults}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            🗑️ Limpiar resultados
          </button>
        </div>
      )}

      {/* Estado de carga */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-lg text-gray-600">Obteniendo recomendaciones de la API...</p>
        </div>
      )}

      {/* Errores */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-xl mr-2">⚠️</span>
            <div>
              <strong>Error:</strong> {error}
            </div>
          </div>
        </div>
      )}

      {/* Resultados */}
      {data.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            🎯 Resultados ({data.length}):
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x600/1a1a1a/ffffff?text=${encodeURIComponent(item.title)}`;
                  }}
                />
                
                <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
                <div className="border-t pt-3 space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Tipo:</span>
                    <span className="font-medium">
                      {item.type === 'movie' ? '🎬 Película' : '📺 Serie'}
                    </span>
                  </div>
                  
                  {item.type === 'movie' ? (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{item.durationMinutes} min</span>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Temporadas:</span>
                      <span className="font-medium">{item.seasons}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Clasificación:</span>
                    <span className="font-medium bg-gray-100 px-2 py-1 rounded">
                      {item.parentalRating}
                    </span>
                  </div>
                  
                  {item.rating && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Rating:</span>
                      <span className="font-medium">⭐ {item.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mensaje cuando no hay resultados */}
      {!loading && !error && data.length === 0 && query && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-500">
            No se encontraron resultados para "<strong>{query}</strong>"
          </p>
          <p className="text-gray-400 mt-2">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      )}

      {/* Mensaje inicial */}
      {!loading && !error && data.length === 0 && !query && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎬</div>
          <p className="text-xl text-gray-600 mb-2">
            ¡Listo para encontrar tu próxima película favorita!
          </p>
          <p className="text-gray-500">
            Usa la búsqueda o prueba los botones de arriba
          </p>
        </div>
      )}
    </div>
  );
}
