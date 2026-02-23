/**
 * Funciones de utilidad
 * Agrega aquí tus funciones auxiliares
 */

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES").format(date);
}

export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
