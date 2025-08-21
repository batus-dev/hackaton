export function track(event: string, payload?: Record<string, unknown>) {
  // Placeholder para KPIs
  // Conectar con herramienta real en el futuro
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${event}`, payload ?? {})
}
