# Galería Dinámica con Vue 3 y Vuetify

### Descripción del Proyecto
Esta aplicación es una interfaz desarrollada con el framework **Vue 3** y la librería de componentes **Vuetify**. El sistema permite la visualización de imágenes consumidas desde la API de **Picsum**, integrando estados de carga dinámicos y una estructura de componentes reutilizables. También incluye una sección de datos técnicos del desarrollador organizada mediante tablas de datos.

## Vista Previa de la Aplicación
![Captura de pantalla de la aplicación](./screen1.png)
![Captura de pantalla de la aplicación](./screen2.png)

## Tecnologías Utilizadas
* **Framework:** Vue.js 3 
* **Librería de Componentes:** Vuetify 3
* **Herramienta de Construcción:** Vite
* **Fuente de Datos:** API de Picsum Photos


## Estructura del Proyecto
La arquitectura del código se organiza de la siguiente manera:

```text
├── public/              
├── src/
│   ├── components/   
│   │   ├── AppHeader.vue      # Logo y titulo
│   │   ├── AppFooter.vue      # Pie de página con mis datos y la fecha
│   │   ├── TarjetaConImagen.vue # Interfaz para visualización de fotos
│   │   └── TablaConDatos.vue   # Tabla de habilidades técnicas
│   ├── App.vue          # Componente raíz y gestión de estados
│   └── main.js          # Punto de entrada y configuración de plugins
├── package.json         # Gestión de dependencias y scripts
└── README.md            # Documentación técnica

## Funcionamiento de la integración con la API

La aplicación consume datos de la API de **Picsum Photos** para gestionar el contenido visual de forma dinámica. El flujo de integración es:

1. **Consumo de Datos**: Se utiliza la interfaz nativa `fetch` de JavaScript para realizar peticiones asíncronas al endpoint `https://picsum.photos/v2/list`.
2. **Gestión de Estados**: 
   - Se emplea una variable reactiva `fotos` para almacenar el listado de objetos obtenidos.
   - Se utiliza una variable booleana `cargando` para controlar el estado del componente `v-btn` y proporcionar feedback visual al usuario mediante un simbolo de carga.
3. **Aleatoriedad**: Para que el contenido sea distinto en cada interacción, se implementa un método de ordenamiento aleatorio sobre los resultados, seleccionando únicamente dos elementos mediante el método `slice()`.
4. **Ciclo de Vida**: La carga inicial se dispara automáticamente al montarse el componente principal utilizando el hook `onMounted`.
5. **Enlace Dinámico**: Los identificadores de imagen obtenidos se concatenan en plantillas literales para generar las URLs finales que consume el componente `TarjetaConImagen.vue`.