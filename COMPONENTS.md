# Documentación de Componentes - SystemTech

Esta documentación describe la estructura y funcionalidad de los componentes principales de la aplicación SystemTech.

## 📁 Estructura de Componentes

### Componentes Principales (`src/components/`)

#### `App.jsx`
**Propósito**: Componente raíz de la aplicación que configura el enrutamiento.
- **Dependencias**: React Router DOM, React Toastify
- **Rutas configuradas**:
  - `/` → Home
  - `/catalogo` → Catálogo de servicios
  - `/login` → Formulario de login
  - `/panelAdministrador` → Panel administrativo
  - `/productos` → Gestor de productos

#### `Header.jsx`
**Propósito**: Navegación principal con sistema de autenticación.
- **Funcionalidades**:
  - Navegación entre páginas
  - Botón de login/logout condicional
  - Integración con AuthContext
- **Ubicación**: `src/components/Header.jsx`
- **Estilos**: `src/styles/header.css`

#### `Home.jsx`
**Propósito**: Página principal que agrupa todas las secciones del home.
- **Estructura**:
  ```jsx
  <Header />
  <MainSection />
  <Services />
  <Footer />
  <CopyRight />
  ```

#### `MainSection.jsx`
**Propósito**: Sección principal del home con información de la empresa.
- **Ubicación**: `src/components/MainSection.jsx`
- **Estilos**: `src/styles/mainSection.css`

#### `Services.jsx`
**Propósito**: Presentación de los servicios principales en el home.
- **Ubicación**: `src/components/Services.jsx`
- **Estilos**: `src/styles/services.css`

#### `Footer.jsx` y `CopyRight.jsx`
**Propósito**: Pie de página con información corporativa.
- **Ubicación**: `src/components/Footer.jsx`, `src/components/CopyRight.jsx`
- **Estilos**: `src/styles/footer.css`

#### `Carousel.jsx`
**Propósito**: Componente de carrusel para mostrar contenido rotativo.
- **Ubicación**: `src/components/Carousel.jsx`
- **Estilos**: `src/styles/carousel.css`

### Catálogo de Servicios (`src/components/catalogoServicios/`)

#### `Catalogo.jsx`
**Propósito**: Página principal del catálogo de servicios.
- **Funcionalidades**:
  - Lista los 10 servicios disponibles
  - Modal con información detallada
  - Gestión de estado para servicio seleccionado
- **Datos**: Array de servicios con imagen, nombre, precio y descripción
- **Servicios incluidos**:
  1. Infraestructura en la nube
  2. Ciberseguridad
  3. Soporte técnico
  4. Consultoría tecnológica
  5. Desarrollo CRM/ERP
  6. Inteligencia artificial
  7. Automatización de procesos
  8. Análisis de datos
  9. Desarrollo de sitios web
  10. Software a la medida

#### `Card.jsx`
**Propósito**: Componente reutilizable para mostrar tarjetas de servicio.
- **Props**:
  - `imgService`: Imagen del servicio
  - `nameService`: Nombre del servicio
- **Estilos**: `src/styles/catalogoServicios/card.css`

### Panel de Administrador (`src/components/panelAdministrador/`)

#### `PanelAdministrador.jsx`
**Propósito**: Dashboard principal del administrador.
- **Estructura**:
  ```jsx
  <Header />
  <MenuAdmin />
  <div className='infoAdmin'>
    // Información de bienvenida
  </div>
  ```

#### `MenuAdmin.jsx`
**Propósito**: Menú de navegación lateral del panel administrativo.
- **Funcionalidades**: Enlaces a diferentes secciones del panel

#### `GestorAdministrador.jsx`
**Propósito**: Herramientas de gestión para el administrador.
- **Funcionalidades**: Gestión de productos y servicios

#### `Login.jsx`
**Propósito**: Formulario de autenticación para administradores.
- **Credenciales**:
  - Email: `Admin@zentech.com`
  - Contraseña: `1234567890`
- **Funcionalidades**:
  - Validación de credenciales
  - Redirección al panel administrativo
  - Integración con AuthContext
  - Notificaciones con SweetAlert2 y React Toastify

## 🔄 Context API

### `AuthContext.jsx`
**Propósito**: Gestión global del estado de autenticación.

```javascript
// Estado
const [isAuthenticated, setIsAuthenticated] = useState(false);

// Métodos
const login = () => setIsAuthenticated(true);
const logout = () => {
  setIsAuthenticated(false);
  localStorage.removeItem("user");
};
```

**Funcionalidades**:
- Persistencia de sesión con localStorage
- Hook `useAuth()` para consumir el contexto
- Verificación automática de sesión al cargar la app

## 🎨 Sistema de Estilos

### Organización CSS
- **CSS Modular**: Cada componente tiene su archivo CSS correspondiente
- **Estructura**: `src/styles/[nombreComponente].css`
- **Subcarpetas**:
  - `catalogoServicios/`: Estilos del catálogo
  - `panelAdministrador/`: Estilos del panel admin

### Archivos de Estilo
```
src/styles/
├── carousel.css
├── footer.css
├── header.css
├── login.css
├── mainSection.css
├── services.css
├── catalogoServicios/
│   ├── card.css
│   └── catalogo.css
└── panelAdministrador/
    ├── gestorAdministrador.css
    ├── menuAdmin.css
    └── panelAdministrador.css
```

## 📱 Flujo de Navegación

### Rutas Públicas
1. **Home (`/`)**: Página principal
2. **Catálogo (`/catalogo`)**: Servicios disponibles
3. **Login (`/login`)**: Acceso administrativo

### Rutas Protegidas
1. **Panel Admin (`/panelAdministrador`)**: Dashboard administrativo
2. **Productos (`/productos`)**: Gestión de servicios

### Estados de Autenticación
- **No autenticado**: Acceso a rutas públicas + login
- **Autenticado**: Acceso completo + opción de logout

## 🔧 Hooks y Utilidades

### Custom Hooks
- `useAuth()`: Acceso al contexto de autenticación

### Librerías de UI
- **React Toastify**: Notificaciones no intrusivas
- **SweetAlert2**: Modales y confirmaciones
- **React Router DOM**: Navegación SPA

## 📦 Gestión de Assets

### Imágenes por Sección
```
src/assets/
├── catalogoServiciosImgs/  # Imágenes de servicios
├── homeImgs/               # Recursos del home
├── loginImgs/              # Imágenes del login
└── gestorAdministrador/    # Recursos del panel
```

### Optimización
- Formatos compatibles: JPG, PNG, WebP
- Nombres descriptivos para mejor mantenimiento
- Organización por funcionalidad

---

*Esta documentación se actualiza conforme evoluciona el proyecto SystemTech.*