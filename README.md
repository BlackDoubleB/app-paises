# Explorador de Países

Aplicación web desarrollada con **Next.js 14**, **TypeScript** y **Zustand**, que permite **explorar, filtrar y guardar países favoritos** de todo el mundo.

Consulta información sobre regiones, población y más, con una interfaz moderna, intuitiva y totalmente responsiva.
``
## Características principales

- 🔍 **Búsqueda por nombre** de país

- 🌍 **Filtro por región**

- 👥 **Filtro por población mínima y máxima**

- 📄 **Paginación** para una navegación más cómoda entre los resultados

- ⭐ **Lista de favoritos** persistente gracias a Zustand

- 📱 **Diseño responsivo** (adaptado para móviles y escritorio)

- 🧭 **Optimización SEO y metadatos** (Open Graph, manifest, sitemap, robots)

- ⚡ **Interfaz rápida** y con transiciones suaves

  
## Tecnologías utilizadas

- [Next.js 14 (App Router)](https://nextjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Zustand](https://zustand-demo.pmnd.rs/)

- [Tailwind CSS](https://tailwindcss.com/)

- [REST Countries API](https://restcountries.com/)


## Captura de pantalla

![Vista previa](https://res.cloudinary.com/doublebl/image/upload/v1759812537/explorador_paises_tkec6u.png)


## Cómo ejecutar el proyecto

1. Clona este repositorio:
  - git clone https://github.com/BlackDoubleB/app-paises.git

2. Instala una de las dependencias:
- pnpm install
- npm install

3. Inicia el servidor de desarrollo:
  - pnpm run dev  

4. Abre en tu navegador:
 -  http://localhost:3000
 

## Estructura del proyecto

src/

├── app/

│ ├── page.tsx → Página principal (lista de países)

│ ├── favoritos/ → Página de países favoritos

│ ├── not-found.tsx → Página personalizada 404

│ ├── layout.tsx → Layout global

│ ├── robots.ts → Configuración SEO

│ └── sitemap.ts → Sitemap del sitio

├── components/ → Componentes UI

├── lib/ → Tipos y utilidades

├── store/ → Estado global con Zustand

public/

├── favicon.ico

├── icon-192.png

├── icon-512.png

└── manifest.webmanifest


## 🔗 Enlace de despliegue
https://explorador-de-paises.vercel.app  


## 👩‍💻 Autora

Reyna Blacido (BlackDoubleB)  
Desarrolladora web en formación apasionada por la tecnología y el diseño.
