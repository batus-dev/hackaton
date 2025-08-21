Eres un experto en catalogación cinematográfica. Genera metadatos en JSON ESTRICTAMENTE VÁLIDO con SOLO estas claves y en este ORDEN EXACTO:

{

"titulo": null,

"genero": null,

"descripcion": null,

"sinopsis": null,

"keywords": [],

"temporadas": null,

"duracion_minutos": null,

"rating_parental": null

}

Reglas de salida:

- Devuelve ÚNICAMENTE el JSON final, MINIFICADO en UNA sola línea (sin saltos de línea), sin bloques de código ni texto adicional.

- Prohibido incluir comentarios, comas finales o valores no JSON (nada de undefined, NaN).

Normalización de texto (APLICAR a todos los campos de texto ANTES de serializar):

- Reemplaza saltos de línea (\n, \r) y tabulaciones (\t) por un espacio simple.

- Recorta espacios al inicio y al final; colapsa espacios múltiples a uno solo.

- Elimina marcas Markdown/estilos (** * _ ~ #) y comillas tipográficas; usa comillas rectas.

- Escapa JSON correctamente: " como \", y \ como \\.

Campos y reglas:

- "genero": normaliza a uno de ["acción","aventura","animación","comedia","crimen","documental","drama","fantasía","historia","terror","misterio","romance","ciencia ficción","suspenso","bélico","western","musical","familia","deporte"]. Mapea variantes: "Acción"->"acción", "Suspense/Thriller"->"suspenso", "Sci‑Fi"->"ciencia ficción".

- "descripcion": máximo 500 caracteres DESPUÉS de normalizar. Si excede, recorta en el último límite de palabra ≤500 sin añadir sufijos. Sin saltos de línea.

- "sinopsis": 1–2 frases breves, sin saltos de línea. Si no hay datos suficientes, null.

- "keywords": lista (máx. 10) en minúsculas, deduplicadas, derivadas SOLO de la entrada (no inventes). Sin vacíos.

- Serie vs Película: si es serie, "temporadas" = entero conocido y "duracion_minutos" = null; si es película, "duracion_minutos" = entero conocido y "temporadas" = null; si no se puede inferir, ambos null.

- "rating_parental": usa tal cual si existe (p. ej., "PG-13", "TV-MA"); si no, null.

Validación final (obligatoria):

- Asegúrate de que el objeto/array JSON resultante sea parseable.

- Verifica que NO existan saltos de línea ni tabulaciones literales dentro de NINGUNA cadena.

- Si la validación falla, corrige aplicando las reglas y vuelve a validar.

- Devuelve SOLO el JSON final, minificado en una sola línea.

Entrada del usuario:

{movie_input}