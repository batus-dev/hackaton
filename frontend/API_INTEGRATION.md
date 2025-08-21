# Integración API de Recomendaciones

Esta documentación explica cómo usar la integración con la API de recomendaciones de películas y series.

## 🚀 Archivos Creados

### Servicios
- `src/services/api.service.ts` - Servicio principal para llamadas a la API
- `src/services/api.adapter.ts` - Adaptador para convertir respuestas de la API al formato interno
- `src/services/recommendations.service.ts` - Servicio actualizado que usa la API real

### Hooks
- `src/hooks/useRecommendations.ts` - Hook personalizado para manejar recomendaciones

### Componentes de Ejemplo
- `src/components/ApiTestComponent.tsx` - Componente de prueba completo
- `src/examples/ApiIntegrationExample.tsx` - Ejemplos de uso

## 📡 API Endpoint

```
POST https://tumcufgmv8.execute-api.us-west-2.amazonaws.com/prod/retrieve
```

### Estructura de Request
```json
{
  "query": "películas de comedia romántica",
  "numberOfResults": 3
}
```

### Estructura de Response
```json
[
  {
    "titulo": "Cásate conmigo",
    "genero": "romance",
    "descripcion": "Descripción de la película...",
    "sinopsis": "Sinopsis corta...",
    "keywords": ["comedia romántica", "jennifer lopez", "owen wilson"],
    "temporadas": null,
    "duracion_minutos": 112,
    "rating_parental": "PG-13"
  }
]
```

## 🛠️ Uso Básico

### 1. Usando el Hook

```tsx
import { useRecommendations } from '@/hooks/useRecommendations';

function MyComponent() {
  const { data, loading, error, search, getByEmotion, getByGenre } = useRecommendations();

  const handleSearch = async () => {
    await search('películas de comedia romántica');
  };

  const handleMoodSearch = async () => {
    await getByEmotion('alegría');
  };

  const handleGenreSearch = async () => {
    await getByGenre('acción', 5);
  };

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {data.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### 2. Usando los Servicios Directamente

```tsx
import { searchContents, getRecommendationsByEmotion, getRecommendationsByGenre } from '@/services/recommendations.service';

// Búsqueda general
const results = await searchContents('películas de terror');

// Por emoción
const moodResults = await getRecommendationsByEmotion('nostalgia');

// Por género
const genreResults = await getRecommendationsByGenre('comedia romántica', 10);
```

## 🎯 Ejemplos de Queries

### Búsquedas por Género
- `"películas de comedia romántica"`
- `"películas de acción"`
- `"películas de terror"`
- `"películas de drama"`
- `"películas de ciencia ficción"`

### Búsquedas por Estado de Ánimo
- `"películas para cuando estoy alegre"`
- `"películas para cuando estoy nostálgico"`
- `"películas para relajarme"`
- `"películas para sentir adrenalina"`

### Búsquedas Específicas
- `"películas con Jennifer Lopez"`
- `"películas de los años 80"`
- `"películas de bodas"`
- `"películas musicales"`

## 🔧 Configuración

### Variables de Entorno (Opcional)
Si quieres hacer la URL configurable, puedes crear un archivo `.env`:

```env
VITE_API_BASE_URL=https://tumcufgmv8.execute-api.us-west-2.amazonaws.com/prod
```

Y actualizar `api.service.ts`:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://tumcufgmv8.execute-api.us-west-2.amazonaws.com/prod';
```

## 🎨 Adaptación de Datos

El adaptador convierte automáticamente la respuesta de la API al formato interno:

```typescript
// Respuesta de la API
{
  "titulo": "Cásate conmigo",
  "genero": "romance",
  "descripcion": "...",
  "temporadas": null,
  "duracion_minutos": 112,
  "rating_parental": "PG-13"
}

// Se convierte a
{
  id: "api_casate_conmigo_0",
  type: "movie",
  title: "Cásate conmigo",
  genres: ["Romance", "Comedia romántica"],
  durationMinutes: 112,
  parentalRating: "PG-13",
  description: "...",
  posterUrl: "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Cásate%20conmigo"
}
```

## 🚨 Manejo de Errores

La integración incluye manejo robusto de errores:

1. **Errores de Red**: Se capturan y se muestran mensajes descriptivos
2. **Respuestas Vacías**: Se manejan graciosamente
3. **Datos Malformados**: Se validan y se usan valores por defecto

## 🧪 Pruebas

Para probar la integración:

1. Importa y usa `ApiTestComponent` en tu aplicación
2. Prueba diferentes tipos de búsquedas
3. Verifica que los errores se manejen correctamente
4. Confirma que los datos se muestren en el formato correcto

```tsx
import { ApiTestComponent } from '@/components/ApiTestComponent';

function App() {
  return (
    <div>
      <ApiTestComponent />
    </div>
  );
}
```

## 📝 Notas Importantes

1. **Sin Mocks**: La integración ya no usa datos mock, solo la API real
2. **Posters**: Se generan placeholders automáticamente si no hay imagen
3. **Géneros**: Se extraen tanto del campo `genero` como de las `keywords`
4. **Tipos**: Se determina automáticamente si es película o serie basado en `temporadas`
5. **IDs**: Se generan automáticamente basados en el título

## 🔄 Migración desde Mocks

Si tenías código usando los mocks anteriores, no necesitas cambiar nada. Los servicios mantienen la misma interfaz:

```typescript
// Esto sigue funcionando igual
const results = await getRecommendationsByEmotion('alegría');
const searchResults = await searchContents('comedia');
```

La única diferencia es que ahora obtienes datos reales de la API en lugar de datos mock.
