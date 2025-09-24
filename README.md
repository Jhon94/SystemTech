# SystemTech - Zen Tech

**SystemTech** es la plataforma web corporativa de **Zen Tech**, una empresa especializada en servicios tecnológicos empresariales. Esta aplicación presenta el catálogo completo de servicios y cuenta con un panel administrativo para la gestión interna.

## 🏢 Acerca de Zen Tech

Zen Tech es una empresa de tecnología que ofrece soluciones integrales para empresas, incluyendo infraestructura en la nube, ciberseguridad, desarrollo de software, inteligencia artificial y consultoría tecnológica.

## ✨ Características

- **Página Principal**: Información corporativa y presentación de servicios
- **Catálogo de Servicios**: 10 servicios tecnológicos con descripciones detalladas
- **Sistema de Autenticación**: Login seguro para administradores
- **Panel Administrativo**: Gestión interna de la plataforma
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- **Notificaciones**: Sistema de alertas y confirmaciones

## 🛠 Stack Tecnológico

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Routing**: React Router DOM 7.9.1
- **Estilos**: CSS modular
- **Notificaciones**: React Toastify + SweetAlert2
- **Linting**: ESLint 9.35.0

## 📁 Estructura del Proyecto

```
SystemTech/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Recursos (imágenes, iconos)
│   │   ├── catalogoServiciosImgs/  # Imágenes del catálogo
│   │   ├── homeImgs/               # Imágenes del home
│   │   └── loginImgs/              # Imágenes del login
│   ├── components/      # Componentes React
│   │   ├── catalogoServicios/      # Catálogo y cards
│   │   └── panelAdministrador/     # Panel admin
│   ├── context/         # Context API (Autenticación)
│   ├── styles/          # CSS modular por componente
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── package.json
└── vite.config.js
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd SystemTech
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en** `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Vista previa del build
npm run lint     # Análisis de código con ESLint
```

## 🔐 Credenciales de Acceso

Para acceder al panel administrativo:

- **Email**: `Admin@zentech.com`
- **Contraseña**: `1234567890`

## 📋 Servicios Ofrecidos

1. **Infraestructura en la Nube** - Plataforma robusta y escalable
2. **Ciberseguridad** - Protección integral de sistemas y datos
3. **Soporte Técnico** - Mesa de ayuda y mantenimiento
4. **Consultoría Tecnológica** - Estrategias de transformación digital
5. **Desarrollo CRM/ERP** - Sistemas de gestión empresarial
6. **Inteligencia Artificial** - Soluciones de automatización inteligente
7. **Automatización de Procesos** - Optimización de flujos de trabajo
8. **Análisis de Datos** - Business Intelligence y Big Data
9. **Desarrollo Web** - Sitios y aplicaciones modernas
10. **Software a la Medida** - Soluciones personalizadas

## 🔄 Funcionalidades Principales

### Navegación Pública
- **Home**: Página principal con información corporativa
- **Catálogo**: Exploración de servicios con modales informativos
- **Login**: Acceso al panel administrativo

### Panel Administrativo
- **Dashboard**: Panel de control principal
- **Gestión de Servicios**: Administración del catálogo
- **Autenticación**: Sistema de login/logout seguro

## 🎨 Componentes Principales

- **Header**: Navegación principal con autenticación
- **Home**: Página de inicio con secciones informativas
- **Catalogo**: Lista de servicios con modales
- **Login**: Formulario de autenticación
- **PanelAdministrador**: Dashboard administrativo
- **AuthContext**: Gestión del estado de autenticación

## 🚀 Despliegue

Para desplegar en producción:

1. **Genera el build**
   ```bash
   npm run build
   ```

2. **Los archivos estarán en la carpeta `dist/`**

3. **Despliega en tu servidor preferido** (Vercel, Netlify, etc.)

## 🤝 Contribución

1. Fork del proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de **Zen Tech**. Todos los derechos reservados.

## 📞 Contacto

**Zen Tech**
- Sitio Web: [En desarrollo]
- Email: Admin@zentech.com

---

*Desarrollado con ❤️ por el equipo de Zen Tech*
