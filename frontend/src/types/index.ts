/**
 * Tipos comunes de la aplicación
 * Expande esto con tus tipos específicos
 */

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
