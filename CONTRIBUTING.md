# Guía de Contribución - SystemTech

¡Gracias por tu interés en contribuir a SystemTech! Esta guía te ayudará a entender cómo colaborar efectivamente en el proyecto.

## 🚀 Primeros Pasos

### Configuración del Entorno

1. **Fork del repositorio**
   ```bash
   # Clona tu fork
   git clone https://github.com/tu-usuario/SystemTech.git
   cd SystemTech
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura el upstream**
   ```bash
   git remote add upstream https://github.com/original-repo/SystemTech.git
   ```

4. **Ejecuta el proyecto**
   ```bash
   npm run dev
   ```

## 📋 Proceso de Contribución

### 1. Crear Issue
Antes de trabajar en cualquier funcionalidad:
- Revisa los issues existentes
- Crea un nuevo issue describiendo el problema o mejora
- Espera feedback antes de comenzar a desarrollar

### 2. Crear Rama
```bash
# Actualiza main
git checkout main
git pull upstream main

# Crea nueva rama
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/descripcion-del-bug
```

### 3. Desarrollo
- Sigue las convenciones de código establecidas
- Mantén commits pequeños y descriptivos
- Escribe mensajes de commit claros

### 4. Testing
```bash
# Ejecuta linting
npm run lint

# Verifica que el build funcione
npm run build
```

### 5. Pull Request
- Actualiza tu rama con main antes de hacer PR
- Escribe una descripción clara del cambio
- Incluye capturas si hay cambios visuales
- Referencia el issue relacionado

## 📝 Convenciones de Código

### Estructura de Archivos
```
src/
├── components/           # Componentes reutilizables
│   ├── NombreComponente.jsx
│   └── subcarpeta/
├── styles/              # CSS modular
│   ├── nombreComponente.css
│   └── subcarpeta/
├── assets/              # Recursos estáticos
└── context/             # Context API
```

### Convenciones de Nomenclatura

#### Componentes React
```javascript
// PascalCase para componentes
export const MiComponente = () => {
  return <div>...</div>;
};

// Default export si es el componente principal del archivo
export default MiComponente;
```

#### Archivos y Carpetas
- **Componentes**: `PascalCase.jsx`
- **Estilos**: `camelCase.css`
- **Carpetas**: `camelCase`
- **Assets**: `descriptive-name.jpg`

#### CSS
```css
/* Usa camelCase para clases */
.miClaseComponente {
  /* propiedades */
}

/* Prefija clases con el nombre del componente */
.headerNavigacion {
  /* propiedades específicas del header */
}
```

### JavaScript/React

#### Imports
```javascript
// React primero
import React from 'react';

// Librerías externas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes locales
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';

// Estilos al final
import './App.css';
```

#### Hooks y Estado
```javascript
// Destructuring para hooks
const { isAuthenticated, login, logout } = useAuth();

// Estado descriptivo
const [selectedService, setSelectedService] = useState(null);
const [isLoading, setIsLoading] = useState(false);
```

#### Event Handlers
```javascript
// Prefijo 'handle' para manejadores de eventos
const handleSubmit = (e) => {
  e.preventDefault();
  // lógica
};

const handleServiceSelect = (service) => {
  setSelectedService(service);
};
```

## 🎨 Estándares de UI/UX

### Diseño Responsivo
- Mobile-first approach
- Breakpoints estándar
- Testear en diferentes dispositivos

### Accesibilidad
- Usa semantic HTML
- Incluye alt text en imágenes
- Navegación por teclado
- Contraste adecuado

### Consistencia Visual
- Sigue la paleta de colores existente
- Usa spacing consistente
- Mantén la tipografía uniforme

## 🧪 Testing y Calidad

### Checklist Pre-Commit
- [ ] El código compila sin errores
- [ ] Pasa el linting (`npm run lint`)
- [ ] No hay console.logs de debug
- [ ] Las funcionalidades nuevas están probadas
- [ ] Los estilos son responsivos

### Criterios de Aceptación
- Funcionalidad completa
- Sin regresiones
- Código limpio y documentado
- Performance adecuado

## 📞 Comunicación

### Canales
- **Issues**: Para reportes de bugs y solicitudes de features
- **Discussions**: Para preguntas generales
- **Pull Requests**: Para revisiones de código

### Etiquetas de Issues
- `bug`: Errores en funcionamiento
- `enhancement`: Mejoras a funcionalidades existentes
- `feature`: Nuevas funcionalidades
- `documentation`: Mejoras a documentación
- `good first issue`: Ideal para nuevos contribuidores

## 🔒 Consideraciones de Seguridad

### Datos Sensibles
- No hardcodear credenciales en el código
- Usar variables de entorno para configuración
- Validar todas las entradas del usuario

### Autenticación
- No modificar la lógica de autenticación sin aprobación
- Mantener las credenciales de prueba seguras
- Implementar validaciones del lado cliente y servidor

## 📚 Recursos Adicionales

### Documentación
- [COMPONENTS.md](./COMPONENTS.md): Estructura de componentes
- [README.md](./README.md): Información general del proyecto

### Tecnologías
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)

## 🤝 Código de Conducta

### Comportamiento Esperado
- Respeto hacia todos los colaboradores
- Comunicación constructiva y profesional
- Enfoque en soluciones, no en culpar

### Comportamiento Inaceptable
- Lenguaje ofensivo o discriminatorio
- Ataques personales
- Spam o contenido irrelevante

## 🏆 Reconocimiento

Los colaboradores activos serán reconocidos en:
- Sección de contribuidores en README
- Release notes para cambios significativos
- Documentación de créditos

---

¡Gracias por contribuir a SystemTech! 🚀

*Para preguntas específicas, no dudes en crear un issue o contactar al equipo de mantenedores.*