# Backup Tecno - Frontend

Proyecto frontend moderno de la empresa **Backup Tecno** construido con [Next.js](https://nextjs.org), [React](https://react.dev) y [Tailwind CSS](https://tailwindcss.com).

## 🚀 Características

- ⚡ **Next.js 16** - Framework React de última generación
- 🎨 **Tailwind CSS 4** - Diseño moderno y responsive
- ⚛️ **React 19** - Librería UI más avanzada
- 📝 **TypeScript 5** - Tipado estático
- 🛠️ **ESLint 9** - Linter configurado
- 📱 **App Router** - Enrutamiento moderno

## 📁 Estructura de Carpetas

```
src/
├── app/                    # App Router de Next.js
├── components/             # Componentes reutilizables
├── hooks/                  # Custom React hooks
├── types/                  # Definiciones de tipos TypeScript
├── utils/                  # Funciones de utilidad
└── globals.css             # Estilos globales

public/                      # Archivos estáticos
```

## 🛠️ Instalación Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/backup-tecno.git
   cd frontend
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📋 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm start` - Inicia el servidor en modo producción
- `npm run lint` - Ejecuta ESLint

## 📤 Subir a GitHub

### Primera vez (Configuración Inicial):

1. **Crear un repositorio en GitHub:**
   - Ve a https://github.com/new
   - Crea un nuevo repositorio llamado `backup-tecno` (o como desees)
   - NO inicialices con README (ya existe uno)

2. **Configurar el repositorio remoto Y SUBIR:**
   ```bash
   cd /home/juan/Escritorio/Programacion/BackupTecno/frontend
   git remote add origin https://github.com/tu-usuario/backup-tecno.git
   git branch -M main
   git push -u origin main
   ```

### Subidas posteriores (Commits):

```bash
cd /home/juan/Escritorio/Programacion/BackupTecno/frontend
git add .
git commit -m "Descripción de los cambios"
git push
```

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📝 Notas de Desarrollo

- El proyecto usa **TypeScript** para mejor tipado
- Los estilos se manejan con **Tailwind CSS** (clases de utilidad)
- La estructura está lista para **componentes reutilizables**
- Mantén el código limpio siguiendo las reglas de **ESLint**

## 🚀 Despliegue

La forma más fácil de desplegar es usando [Vercel](https://vercel.com):

1. Sube tu código a GitHub
2. Conecta tu repositorio en Vercel
3. Vercel automáticamente detectará que es un proyecto Next.js y lo construirá

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## Otros
├── src/
│   ├── app/              # App Router (páginas y rutas)
│   ├── components/       # Componentes React reutilizables (ejemplo: Button.tsx)
│   ├── hooks/            # Custom hooks (ejemplo: useLocalStorage.ts)
│   ├── types/            # Tipos TypeScript (ejemplo: index.ts)
│   ├── utils/            # Funciones auxiliares (ejemplo: helpers.ts)
│   └── globals.css       # Estilos globales
├── public/               # Archivos estáticos
├── package.json          # Dependencias
├── README.md             # Documentación principal
├── CONTRIBUTING.md       # Guía para contribuidores
├── GITHUB_SETUP.md       # Instrucciones para GitHub (ver abajo)
└── .env.example          # Variables de entorno ejemplo