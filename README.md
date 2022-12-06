# Cifrado César

## Introducción

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Consiste en tomar cada letra del texto original y reemplazarla por otra que se encuentra un número fijo de posiciones más adelante en el mismo alfabeto.
Para este proyecto se tomó en cuenta el código ASCII, que le da un número a cada uno de los caracteres (letras y símbolos).

## Uso de la aplicación web

En este proyecto, el cifrado se implementó como una herramienta en un blog de reseñas de películas y series para evitar los spoilers. De manera que, al escribir una entrada o comentario, el autor tenga a la mano la herramienta para codificar en caso de ser un spoiler. Al contrario, si al lector no le interesa leer el spoiler, puede tomar el texto codificado y descifrarlo en la misma página.
Es importante señalar que el número de posiciones a desplazar (llamado aquí offset) para descifrar un mensaje se escribe al final del texto entre paréntesis(#).

## Funcionalidad

Se trabajó con JavaScript en dos archivos: cipher.js e index.js.
En el primero se maneja un objeto (cipher) con dos métodos: _encode_ y _decode_. Para encode se tomó la fórmula (x - 65 + n) % 26 + 65, donde x es el caracter a codificar y n es el offset. Se utilizaron los métodos:

- **.charCodeAt()** Toma el caracter y lo regresa como número del código ASCII
- **String.fromCharCode()** Regresa un string con el código dado
- **parseInt()** Regresa un número a partir de un string

Para decode se utilizaron los mismos métodos y se basó en la misma fórmula con unos ajustes para lograr el desplazamiento a la izquierda. Se utilizó _offset % 26_ para mantener el offset dentro del rango de los 26 caracteres del alfabeto.

En el segundo archivo, index.js, se implementó la funcionalidad de la interacción con el usuario. Con los métodos de manipulación del DOM se tomaron los elementos necesarios para agregar eventos y lograr la funcionalidad deseada.
