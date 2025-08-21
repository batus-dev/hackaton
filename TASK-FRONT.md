# Plan de Trabajo Frontend - Sorprendeme 🎭

## 🎯 Objetivo
Construir un MVP frontend que permita: chat emocional, recomendaciones, "Mi Lista", y acciones de tarjeta (Reproducir / Agregar / +Info), con UI responsive y manejo de estado en Redux.

Instrumentar eventos clave para KPIs del README.md: solicitudes "Sorpréndeme", clic en "Mi Lista", reproducciones.

## 📁 Estructura Propuesta (frontend/)
```
src/
├── app/                 # Layout base + rutas (React Router: /, /chat, /mi-lista)
├── components/          # UI reutilizable (RecommendationCard, EmotionChips, InfoModal, Navbar, Footer)
├── features/           # slices Redux (chat/, recommendations/, watchlist/, ui/)
├── services/           # mock API (recommendations.service.ts)
├── pages/              # vistas (Home.tsx, Chat.tsx, MyList.tsx)
├── store/              # store.ts (Redux Toolkit) + persistencia simple en localStorage
└── styles/             # Tailwind config y estilos globales
```

## ✅ Lista de Tareas

### 1. Configurar React.js con Tailwind CSS
**Tareas:**
- [ ] Vite + React + TS, Tailwind instalado y configurado (PostCSS, tailwind.config.js, index.css)
- [ ] ESLint + Prettier básicos
- [ ] Setup inicial del proyecto

**Criterios de Aceptación:**
- App arranca con estilos Tailwind y layout base responsive

### 2. Diseñar layout base y routing
**Tareas:**
- [ ] React Router configurado (Home/Chat/Mi Lista)
- [ ] Navbar con navegación
- [ ] Layout responsive shell
- [ ] Footer básico

**Criterios de Aceptación:**
- Navegación funcional entre rutas principales

### 3. Configurar Redux Toolkit store y slices
**Tareas:**
- [ ] store.ts con Redux Toolkit
- [ ] chatSlice: `{ messages: ChatMessage[], selectedEmotion: string|null }`
- [ ] recommendationsSlice: `{ items: Content[], status: 'idle'|'loading'|'succeeded'|'failed' }`
- [ ] watchlistSlice: `{ ids: string[], entities: Record<string, Content> }` + persistencia
- [ ] uiSlice: `{ modalContentId: string|null, theme: 'light'|'dark' }`

**Criterios de Aceptación:**
- Tipado con TS, selectores y acciones probados en UI

### 4. Implementar interfaz de chat emocional
**Tareas:**
- [ ] Chat.tsx con historial de mensajes
- [ ] Input de texto y botón enviar
- [ ] Chips de emociones (alegría, nostalgia, adrenalina, etc.)
- [ ] Estado en chatSlice para mensajes y emoción seleccionada

**Criterios de Aceptación:**
- Usuario puede escribir, elegir emoción y enviar
- Se registra evento de "solicitud Sorpréndeme" (placeholder)

### 5. Conectar chat a servicio de recomendaciones
**Tareas:**
- [ ] Mock API: `getRecommendationsByEmotion(emotion: string): Promise<Content[]>`
- [ ] Integración con chatSlice
- [ ] Loading states y error handling

**Criterios de Aceptación:**
- Chat genera recomendaciones basadas en emoción seleccionada

### 6. Crear componente RecommendationCard
**Tareas:**
- [ ] Poster, título, géneros
- [ ] Duración (películas) / temporadas (series)
- [ ] Rating parental, descripción breve
- [ ] Grid responsive de cards

**Criterios de Aceptación:**
- Cards muestran metadata completa y se adaptan a móvil/tablet/desktop

### 7. Agregar acciones en tarjetas
**Tareas:**
- [ ] Botón "Reproducir"
- [ ] Botón "Agregar a Mi Lista"
- [ ] Botón "+Info"
- [ ] Implementar funcionalidad de cada acción

**Criterios de Aceptación:**
- Acciones operativas; eventos instrumentados (placeholders)

### 8. Implementar funcionalidad 'Agregar a Mi Lista'
**Tareas:**
- [ ] watchlistSlice: add/remove/toggle
- [ ] Persistencia en localStorage
- [ ] Vista /mi-lista con grid
- [ ] Estados vacíos

**Criterios de Aceptación:**
- Estado persiste tras recargar
- Evento "clic en Mi Lista" instrumentado (placeholder)

### 9. Diseñar vistas de Recomendaciones y Mi Lista
**Tareas:**
- [ ] Grid responsivo para recomendaciones
- [ ] Vista Mi Lista con gestión de contenido guardado
- [ ] Estados de carga y vacíos
- [ ] Filtros básicos (opcional)

**Criterios de Aceptación:**
- Vistas funcionales y responsive

### 10. +Info: modal/drawer con metadata ampliada
**Tareas:**
- [ ] InfoModal con metadata completa
- [ ] CTA para reproducir o agregar a lista
- [ ] Responsive modal/drawer
- [ ] Cerrar modal (ESC, click outside)

**Criterios de Aceptación:**
- Modal funcional con información detallada del contenido

### 11. QA de UX responsive y accesibilidad
**Tareas:**
- [ ] Breakpoints Tailwind correctos
- [ ] Dark theme opcional
- [ ] Estados vacíos y loaders
- [ ] Toasts para feedback
- [ ] Accesibilidad básica (roles, aria-labels, foco)
- [ ] Navegación por teclado

**Criterios de Aceptación:**
- Sin desbordes en móvil
- Navegación clara y feedback visual
- Accesibilidad básica implementada

### 12. Instrumentar eventos para KPIs
**Tareas:**
- [ ] `analytics.track('sorprendeme.request', { emotion })`
- [ ] `analytics.track('watchlist.add', { contentId })`
- [ ] `analytics.track('play.start', { contentId })`
- [ ] Placeholder con console.log

**Criterios de Aceptación:**
- Eventos clave registrados para futuras métricas

## 📊 Modelo de Datos (Mock)

### Content Interface
```typescript
interface Content {
  id: string;
  type: 'movie' | 'series';
  title: string;
  genres: string[];
  durationMinutes?: number;  // para películas
  seasons?: number;          // para series
  parentalRating: string;
  description: string;
  posterUrl: string;
  rating?: number;
}
```

### Redux State Structure
```typescript
// chatSlice
{ messages: ChatMessage[], selectedEmotion: string|null }

// recommendationsSlice  
{ items: Content[], status: 'idle'|'loading'|'succeeded'|'failed' }

// watchlistSlice
{ ids: string[], entities: Record<string, Content> }

// uiSlice
{ modalContentId: string|null, theme: 'light'|'dark' }
```

## 📈 KPIs y Analítica (Placeholders)

### Eventos a Instrumentar
- **Solicitudes Sorpréndeme**: `analytics.track('sorprendeme.request', { emotion })`
- **Agregar a Mi Lista**: `analytics.track('watchlist.add', { contentId })`
- **Reproducción**: `analytics.track('play.start', { contentId })`

*Nota: Inicialmente con console.log, luego conectar a proveedor real*

## 🧪 Testing y Calidad

### Testing Básico
- [ ] Pruebas ligeras de componentes críticos (RecommendationCard)
- [ ] Testing de watchlistSlice
- [ ] Navegación por teclado en chat y modal

### Calidad de Código
- [ ] ESLint configurado
- [ ] Prettier para formateo
- [ ] TypeScript strict mode

## ⏱️ Timeline Sugerido (Ágil)

- **Día 1**: Setup React+Tailwind, layout, routing
- **Día 2**: Redux store+slices; chat UI  
- **Día 3**: Servicio mock y recomendaciones + cards
- **Día 4**: Mi Lista (persistente) y +Info modal
- **Día 5**: QA responsive, accesibilidad, analítica placeholder

## ⚠️ Riesgos y Mitigación

- **Ambigüedad de metadata**: Definir interfaz Content y normalizar en el servicio
- **Complejidad de estado**: Usar RTK y selectores memorizados  
- **Tiempo**: Priorizar MVP, diferir player real

## 🚀 Próximos Pasos

1. Iniciar scaffolding del proyecto en `frontend/`
2. Configurar Vite + Tailwind + Redux Toolkit
3. Implementar tareas en orden de prioridad
4. Testing continuo durante desarrollo
5. Deploy de MVP para feedback temprano

---

**Estado**: 🟡 Listo para iniciar desarrollo
**Prioridad**: Alta - MVP crítico para validación de concepto