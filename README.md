# 🌐 Web Development Landing Page

Aplicación web desarrollada con **Next.js** orientada a presentar servicios de desarrollo web.

---

## 🚀 Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js

---

## 📋 Requisitos previos

Antes de ejecutar el proyecto debes tener instalado:

- Node.js >= 18
- npm o yarn

Verificar instalación:

```bash
node -v
npm -v


📦 Instalación

Clonar el repositorio:

git clone https://github.com/usuario/nombre-proyecto.git

Ingresar al proyecto:

cd nombre-proyecto

Instalar dependencias:

npm install
▶️ Ejecutar el proyecto en local

Modo desarrollo:

npm run dev

Abrir en el navegador:

http://localhost:3000


🏗️ Arquitectura del proyecto

El proyecto utiliza una arquitectura basada en componentes siguiendo el modelo de Next.js App Router.

Estructura principal
src/
│
├── app/
│   └── page.tsx        → Página principal
│
├── components/
│   └── HeroSection     → Componentes reutilizables UI
│
├── styles/
│   └── globals.css     → Estilos globales
│
└── public/
    └── assets          → Imágenes y recursos estáticos

📌 Explicación de la arquitectura

App/
Maneja el sistema de rutas utilizando el App Router de Next.js.

Components/
Contiene componentes reutilizables como secciones visuales o elementos UI.

Client Components
Se utilizan componentes con "use client" para manejar estados e interactividad (ej: sección FAQ).

Tailwind CSS
Se emplea para el diseño responsive mediante clases utilitarias.

⚙️ Scripts disponibles
npm run dev     # Ejecuta entorno de desarrollo
npm run build   # Genera versión de producción
npm run start   # Ejecuta build de producción
👨‍💻 Equipo de desarrollo

Proyecto desarrollado como parte de trabajo colaborativo.