'use client';

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      <header style={{ marginBottom: "30px", borderBottom: "2px solid #333", paddingBottom: "20px" }}>
        <h1 style={{ color: "#000" }}>🎉 Backup Tecno - Página de Prueba</h1>
        <p style={{ color: "#333", fontSize: "16px" }}>Bienvenido al frontend del proyecto</p>
      </header>

      <main>
        <section style={{ marginBottom: "40px" }}>
          <h2>📝 Mensaje Importante</h2>
          <div style={{ backgroundColor: "#e8f4f8", padding: "15px", borderRadius: "5px", marginTop: "10px", border: "2px solid #2196F3" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#000" }}>
              <strong>Esto es una página de prueba que sirve para cuando trabajen no encuentren todo vacío. Gracias.</strong>
            </p>
            <p style={{ fontSize: "14px", color: "#333", marginTop: "10px" }}>
              Esta página es solo un placeholder para facilitar el desarrollo. Siéntete libre de reemplazar este contenido
              con la estructura y componentes que necesites.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>🚀 Lo que puedes hacer desde aquí:</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#000" }}>
            <li>Crear nuevas páginas en la carpeta <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>app/</code></li>
            <li>Importar componentes desde <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/components/</code></li>
            <li>Usar custom hooks de <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/hooks/</code></li>
            <li>Definir tipos en <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/types/</code></li>
            <li>Agregar utilidades en <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/utils/</code></li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>📦 Contenido Disponible</h2>
          <div style={{ backgroundColor: "#fff3cd", padding: "15px", borderRadius: "5px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#000" }}>Componentes de Ejemplo:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/components/Button.tsx</code> - Botón básico con Tailwind</li>
            </ul>

            <h3 style={{ marginTop: "15px", color: "#000" }}>Custom Hooks:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/hooks/useLocalStorage.ts</code> - Hook para almacenamiento local</li>
            </ul>

            <h3 style={{ marginTop: "15px", color: "#000" }}>Tipos Definidos:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/types/index.ts</code> - User, Project, etc.</li>
            </ul>

            <h3 style={{ marginTop: "15px", color: "#000" }}>Funciones Útiles:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/utils/helpers.ts</code> - formatDate(), truncateText(), etc.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>📚 Recursos Útiles</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#000" }}>
            <li>Next.js: <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>nextjs.org/docs</a></li>
            <li>React: <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>react.dev</a></li>
            <li>Tailwind CSS: <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>tailwindcss.com</a></li>
            <li>TypeScript: <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>typescriptlang.org</a></li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>🛠️ Comandos Comunes</h2>
          <div style={{ backgroundColor: "#d4edda", padding: "15px", borderRadius: "5px", fontFamily: "monospace", border: "2px solid #28a745" }}>
            <p style={{ color: "#000" }}><strong>Desarrollo:</strong> npm run dev</p>
            <p style={{ color: "#000" }}><strong>Build:</strong> npm run build</p>
            <p style={{ color: "#000" }}><strong>Producción:</strong> npm start</p>
            <p style={{ color: "#000" }}><strong>Linting:</strong> npm run lint</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>📋 Info del Proyecto</h2>
          <div style={{ backgroundColor: "#f3e5f5", padding: "15px", borderRadius: "5px", border: "2px solid #9c27b0" }}>
            <p style={{ color: "#000" }}><strong>Empresa:</strong> Backup Tecno</p>
            <p style={{ color: "#000" }}><strong>Tecnologías:</strong> Next.js 16, React 19, TypeScript 5, Tailwind CSS 4</p>
            <p style={{ color: "#000" }}><strong>Estado:</strong> ✅ Listo para desarrollo</p>
            <p style={{ color: "#000" }}><strong>Versión:</strong> 0.1.0</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>💡 Tips</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#000" }}>
            <li>El servidor hot-reload es automático con <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>npm run dev</code></li>
            <li>Usa Tailwind CSS para estilos (clases de utilidad)</li>
            <li>Crea componentes reutilizables en <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/components/</code></li>
            <li>Define tipos en TypeScript para mejor IDE support</li>
            <li>Mantén el código limpio siguiendo las reglas de ESLint</li>
          </ul>
        </section>

        <footer style={{ 
          marginTop: "60px", 
          paddingTop: "20px", 
          borderTop: "2px solid #333", 
          textAlign: "center", 
          color: "#333",
          fontSize: "14px"
        }}>
          <p>Backup Tecno © 2026 | Página de prueba - Siéntete libre de modificar todo esto 🚀</p>
        </footer>
      </main>
    </div>
  );
}
