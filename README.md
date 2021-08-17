# Rick And Morty - Non Offical Page

## Diseño:

- Se implementó una página inicial en la que se visualiza un botón para acceder a la página inicial.
- De acuerdo a las instrucciones, se accede a la primera página de "Episodios".
- En la parte superior se presentan dos botones con los dos menús solicitados.
- Cada uno presenta actualmente un listado dentro de tarjetas con el contenido obtenido desde la api
- Se coloca una barra de búsqueda para cada sección
- La búsqueda de episodios es a través del campo "episode" (no se visualiza dicho campo)
- La búsqueda de personajes es a través del campo "name"
- La búsqueda es responsive, actualizando la tabla por cada caracter de búsqueda ingresado o eliminado.

## Supuestos:

- Se pueden omitir los campos no solicitados
- Se pueden agregar campos no solicitados para fines de búsqueda:
  - Episodios: campo "episode"
  - Personajes: campo "url"
- Se puede colocar un botón de inicio para optimizar visualización de contenedores de acuerdo al menú seleccionado

## Instrucciones de ejecución:

- En un directorio vacío, copiar el repositorio
- Ejecutar el archivo index.html en un navegador, anteponiendo la ruta del directorio creado previamente.
  
    ###### (Ej: file:///ruta/de/entrega/rick_and_morty/index.html)
  
## Recursos externos:

###### NOTA: Todos los recursos fueron reutilizados previo análisis de implementación y resultados

- Implementación de botón de inicio (tutorial de referencia)
  
    https://www.youtube.com/watch?v=JCcB3txARYY

- Fuente Rick And Morty
  
    https://freefontsvault.com/download/rick-and-morty/

- Conexión con API mediante AXIOS (código fuente)
  
    https://unpkg.com/axios/dist/axios.min.js

- Cards en modo responsive
  
    https://www.w3schools.com/howto/howto_css_column_cards.asp
    

- Animación de tabs
  
    https://www.codingnepalweb.com/pure-css-tabs-with-slide-indicator/
