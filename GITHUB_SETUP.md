# 🚀 Instrucciones Rápidas - Subir a GitHub

## Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `backup-tecno` (o el que prefieras)
3. Descripción: `Frontend de Backup Tecno - Next.js, React y Tailwind CSS`
4. Click en "Create repository"
5. **IMPORTANTE:** NO inicialices con README ni gitignore (ya existen)

## Paso 2: Configurar repositorio remoto Y subir código

Copia y ejecuta estos comandos EN TU TERMINAL (en la carpeta frontend):

```bash
cd /home/juan/Escritorio/Programacion/BackupTecno/frontend
git remote add origin https://github.com/TU-USUARIO/backup-tecno.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU-USUARIO` con tu usuario de GitHub**

## Paso 3: Verificar en GitHub

Abre tu repositorio en https://github.com/TU-USUARIO/backup-tecno

¡Deberías ver todos los archivos del proyecto!

## Para futuras actualizaciones:

```bash
cd /home/juan/Escritorio/Programacion/BackupTecno/frontend
git add .
git commit -m "Descripción de lo que hiciste"
git push
```

## Comandos útiles para desarrollo:

```bash
cd /home/juan/Escritorio/Programacion/BackupTecno/frontend

# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start

# Verificar código con ESLint
npm run lint
```

---

**El proyecto ya está listo. Solo falta crear el repositorio en GitHub y ejecutar los comandos del Paso 2.**
