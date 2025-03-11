Néstor Garrido Antón

# Memoria Pagina Estudios Esturion (Ancho-V Games)

## Introducción

Esta pagina web es una recreacion no oficial de la empresa ficticia **Estudios Esturion (Ancho-V Games)** que aparece en los videojuegos Splatoon y Splatoon 2 desarrollados por <span style="color:red;">the Nintendo Company</span>.

Cabe decir que esta pagina no esta relacionada de ninguna manera con Nintendo.

## Metodología

### Herramientas Utilizadas

1. **HTML5**: Para estructurar la pagina usando las etiquetas correctas
3. **Bootstrap**: Para dar capacidades responsive a los apartados de la pagina
2. **CSS**: Para ajustar de manera mas especifica lo que bootstrap de base no abarca

### Fases de Desarrollo

1. **Decision de las tecnologias a usar**: Investigación de las tecnologías web más adecuadas para el proyecto. Se eligió **Bootstrap 5** por su flexibilidad y la cantidad de estilos predefinidos que facilita el trabajo de diseño.
2. **Diseño Visual**: Planificación del diseño y maquetación con las herramientas de **Bootstrap**, asegurando que la página fuera clara, funcional y estética.

## Guía de Estilos

El diseño visual del proyecto se basa en **Bootstrap 5** combinado con imágenes personalizadas para el fondo principal

### Estilos Visuales


- **Imagen utilizada**:

<div style="display: flex; align-items: center;">
  <img src="" alt="" width="300" style="border: 1px solid white; margin-right: 15px;">
  <p>
  </p>
</div>

| ![Imagen de fondo de la página](assets/bgsplats.png) | Una textura creada desde cero (*bgsplats.png*) reutilizando un asset de mancha de tinta que cuadra con la tematica de **Splatoon** |
| :----------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |

- **Colores predominantes**:
Colores alegres y variados con un fondo agradable a la vista 

# Memoria y Guía de Estilos de la Página Web Estudios Esturion

Esta página es un sitio web ficticio de "Estudios Esturion", un estudio de videojuegos especializado en la creación de juegos para la franquicia Splatoon. En esta memoria y guía de estilos se detalla tanto la estructura HTML como las especificaciones de estilo que definen la apariencia y comportamiento de la página.

---

## Estructura HTML

### 1. **Cabecera (`<head>`)**
   - **Metadatos**:
     - `charset="UTF-8"`: Se establece la codificación de caracteres UTF-8 para admitir caracteres especiales.
     - `viewport`: Ajusta la página para dispositivos móviles con un ancho de vista adaptativo.
   - **Enlaces a recursos**:
     - **Bootstrap CSS**: Se incluye el archivo de estilo de Bootstrap para aprovechar su sistema de diseño responsivo y componentes predefinidos.
     - **CSS personalizado**: Se incluye un archivo `stylepage.css` para definir estilos adicionales específicos de la página.
   - **Título de la página**: Se define el título "Document".

### 2. **Cuerpo (`<body>`)**
   El contenido del cuerpo está organizado en varias secciones:

   - **Fondo de la página**: Se aplica una imagen de fondo con `background-image: url('assets/bgsplats.png');`.
   - **Navegación**:
     - Una barra de navegación con Bootstrap que incluye enlaces a las secciones: "Nuestros Juegos", "Nuestro Centro" y "Batallas Carterritoriales".
     - La barra de navegación tiene un estilo de fondo personalizado `bg-color-squidblue` y enlaces en color blanco.
   - **Carrusel de imágenes**:
     - Un carrusel de imágenes en el centro de la página presenta imágenes de los juegos creados por el estudio.
   - **Introducción**:
     - Un mensaje de bienvenida en un fondo naranja (`bg-color-squidorange`).
   - **Nuestros Juegos**:
     - Sección que muestra los juegos creados por el estudio, con imágenes y descripciones de cada juego.
   - **Batallas Territoriales**:
     - Sección con información sobre las batallas territoriales y un carrusel con imágenes de los estudios donde se llevaron a cabo estas batallas.
   - **Música**:
     - Breve mención a la música asociada con las batallas carterritoriales.

### 3. **Pie de página (`<footer>`)**
   - Un mensaje que indica que la página no está afiliada con Nintendo ni Splatoon.

---

## Guía de Estilos

### 1. **Colores Personalizados**
   Se han definido colores personalizados para algunos elementos, inspirados en el universo Splatoon:

   - **Fondo de la barra de navegación**:
     ```css
     .bg-color-squidblue {
       background-color: #005F73; /* Color azul oscuro similar al de Squid Blue */
     }
     ```

   - **Color de fondo del texto de bienvenida**:
     ```css
     .bg-color-squidorange {
       background-color: #FF6F32; /* Color naranja similar al de Squid Orange */
     }
     ```

### 2. **Estilos de Texto**
   Se utilizan diferentes clases de Bootstrap para estilizar el texto, además de las siguientes personalizaciones:

   - **Texto en blanco**:
     ```css
     .text-white {
       color: white !important;
     }
     ```

   - **Texto en negrita**:
     ```css
     .fw-bold {
       font-weight: bold;
     }
     ```

   - **Texto en tamaño grande**:
     ```css
     .fs-3 {
       font-size: 1.75rem; /* Tamaño de fuente grande */
     }
     ```

### 3. **Imágenes**
   Las imágenes se ajustan con clases como `img-fluid` para asegurarse de que sean responsive y se ajusten correctamente al contenedor:

   - **Imágenes fluidas**:
     ```css
     .img-fluid {
       max-width: 100%;
       height: auto;
     }
     ```

### 4. **Tarjetas de Juego**
   Para mostrar los juegos, se usan tarjetas de Bootstrap que incluyen imágenes, títulos y descripciones. Además, se han agregado márgenes y un tamaño máximo de tarjeta:

   - **Tarjetas con imagen a la izquierda**:
     ```css
     .card {
       max-width: 600px; /* Limita el ancho de la tarjeta */
     }
     .card-body {
       padding: 1rem;
     }
     ```

### 5. **Carruseles**
   Los carruseles utilizan componentes de Bootstrap, con controles de navegación personalizados:

   - **Botones de control del carrusel**:
     ```css
     .carousel-control-prev-icon, .carousel-control-next-icon {
       background-color: #ffffff; /* Color blanco para los íconos */
     }
     ```

### 6. **Botones y Enlaces**
   Los enlaces en la barra de navegación y otros botones son blancos, con un fondo azul o naranja cuando están activos:

   - **Enlaces activos**:
     ```css
     .nav-link.active {
       color: white;
     }
     ```

   - **Botones de navegación**:
     ```css
     .navbar-toggler-icon {
       background-color: white;
     }
     ```

### 7. **Estilos de Footer**
   El pie de página tiene un fondo oscuro con texto blanco:

   - **Pie de página**:
     ```css
     .footer {
       background-color: #343a40;
       color: white;
       text-align: center;
       padding: 1rem;
     }
     ```

---

## Notas

- **Responsividad**: Se utiliza el sistema de grid de Bootstrap, lo que permite que el diseño se adapte a diferentes tamaños de pantalla (escritorios, tabletas, teléfonos móviles).
- **Interactividad**: Se aprovechan los componentes interactivos de Bootstrap, como los carruseles y la barra de navegación colapsable.
- **Imágenes**: La mayoría de las imágenes están relacionadas con el universo de Splatoon, y se presentan en formatos fluidos para garantizar que se ajusten bien en cualquier dispositivo.

---

## Conclusión

Esta página es un ejemplo de una estructura web utilizando tecnologías como HTML, CSS (con Bootstrap), y tiene un diseño responsivo para dispositivos móviles. La guía de estilos proporciona una base para personalizar el diseño y hacer que la experiencia del usuario sea consistente con la temática de los juegos de Splatoon.

