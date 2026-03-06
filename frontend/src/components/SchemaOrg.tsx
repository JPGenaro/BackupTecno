import { ReactNode } from 'react';

interface SchemaOrgProps {
  schema: Record<string, unknown>;
  children?: ReactNode;
}

/**
 * Componente para agregar JSON-LD structured data
 * Útil para SEO y visibilidad en motores de búsqueda
 */
export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
