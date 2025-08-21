# Sorprendeme 🎭

## Descripción

Sorprendeme es una plataforma inteligente de recomendación de contenido que revoluciona la forma en que los usuarios eligen qué ver. En lugar de navegar infinitamente por catálogos, los usuarios simplemente expresan cómo quieren sentirse, y nuestra IA selecciona contenido personalizado basado en sus emociones deseadas y historial de consumo.

## 🎯 Problema que Resuelve

- **Parálisis por elección**: Demasiadas opciones generan indecisión
- **Tiempo perdido navegando**: Los usuarios pasan más tiempo buscando que viendo
- **Desconexión emocional**: Las recomendaciones actuales no consideran el estado emocional
- **Abandono sin interacción**: Usuarios que se van sin consumir contenido

## 💡 Solución

Una plataforma que conecta las emociones del usuario con contenido relevante mediante:

1. **Análisis emocional**: El usuario expresa cómo quiere sentirse
2. **IA personalizada**: Algoritmos que combinan preferencias emocionales con historial de consumo
3. **Recomendaciones precisas**: Lista curada de contenido que coincide con el estado emocional deseado
4. **Experiencia fluida**: Reproducción inmediata o guardado para más tarde

## 🚀 Beneficios

### Para el Usuario
- ✅ Decisiones más rápidas y satisfactorias
- ✅ Contenido que realmente conecta emocionalmente
- ✅ Menos tiempo perdido navegando
- ✅ Experiencia personalizada que "me entiende"

### Para la Plataforma
- 📈 **Mayor conversión a reproducción**
- ⏱️ **Mayor tiempo de visualización**
- 💝 **Percepción de plataforma inteligente**
- 📉 **Menor abandono sin interacción**

## 🛠️ Características Principales

### Core Features
- **Análisis de Sentimientos**: Procesamiento de lenguaje natural para entender emociones
- **Motor de Recomendaciones**: IA que combina emociones + historial + preferencias
- **Interfaz Conversacional**: Chat intuitivo para expresar estados emocionales
- **Lista Personalizada**: Guardado de contenido para ver más tarde

### Funcionalidades Avanzadas
- **Aprendizaje Continuo**: El sistema mejora con cada interacción
- **Categorización Emocional**: Mapeo de contenido por emociones (alegría, nostalgia, adrenalina, etc.)
- **Filtros Contextuales**: Consideración de hora, día, temporada
- **Integración Multiplataforma**: Compatible con diferentes servicios de streaming

## 🎨 Casos de Uso

### Escenarios Típicos
```
Usuario: "Quiero algo que me haga reír después de un día difícil"
→ Sistema: Recomienda comedias ligeras basadas en su historial

Usuario: "Necesito algo emocionante para el fin de semana"
→ Sistema: Sugiere thrillers y películas de acción

Usuario: "Quiero algo nostálgico y relajante"
→ Sistema: Propone clásicos o contenido familiar
```

## 🏗️ Arquitectura del Sistema

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API    │    │   AI Engine     │
│   (React/Vue)   │◄──►│   (Node.js/      │◄──►│   (Python/      │
│                 │    │    Python)       │    │    TensorFlow)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Interface│    │   Database       │    │   ML Models     │
│   - Chat        │    │   - User Data    │    │   - NLP         │
│   - Recommendations│  │   - Content Meta │    │   - Collaborative│
│   - Watchlist   │    │   - Interactions │    │   - Content-Based│
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🔧 Stack Tecnológico

### Frontend
- **Framework**: React.js
- **UI/UX**: Tailwind CSS
- **Estado**: Redux

### Backend
- **API**: Node.js + Fastify
- **Base de Datos de Conocimiento**: Amazon Bedrock Knowledge Base
- **Autenticación**: JWT + OAuth

### IA
- **Modelos**: Anthropic Claude 4

### Infraestructura
- **Cloud**: AWS
- **Contenedores**: Task Pod
- **CI/CD**: GitHub Actions

## 📊 Métricas de Éxito

### KPIs Principales
- **Tasa de Conversión**: % usuarios que reproducen contenido recomendado
- **Satisfacción**: Rating de recomendaciones (1-5 estrellas)
- **cantidad de interacción con "Sorprendeme" usuarios unicos** : cuantos usuarios unicos hicieron uso de esta funcionalidad.
- **cantidad de interacción con "Sorprendeme"** : cantidad de solicitudes de recomendaciones.
- **Tasa de clics** en agregar a "Mi lista".
- **Tasa de reproducción** % interaciones con el recomendador terminaron en una reproducción.
- **Abandono**: % usuarios que salen sin interactuar

s



## 🚀 Roadmap

### Fase 1: MVP (3 meses)
- [ ] Interfaz básica de chat emocional
- [ ] Motor de recomendaciones simple
- [ ] integracion con historial de consumos
- [ ] Guardar en mi lista para ver despues

### Fase 2: Mejoras (6 meses)
- [ ] Mejora en metadata de contenidos
- [ ] IA avanzada con aprendizaje continuo
- [ ] Creación de listas de contenidos
- [ ] Feedback de resultados por calificación


### Fase 3: Escalabilidad (12 meses)
- [ ] Identificación de patrones de consumo según día y horario
- [ ] Búsqueda por voz
- [ ] Análisis de sentimientos en tiempo real
- [ ] App móvil
- [ ] Integración con redes sociales
- [ ] Integración con plataformas de streaming


## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.


*"Porque elegir qué ver no debería ser más difícil que disfrutarlo"* ✨