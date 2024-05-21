////////////////////////////////////////////////////////////////////////ancho-->89chars||


/*

TUTORIAL CANVAS P5 RESPONSIVE


este es solo uno de los muchos enfoques con que se puede trabajar el responsive. 
yo prefiero así pq es fácil de implementar y se ejecuta solo cuando es necesario.

primero hay un ejemplo para una pagina basica que muestra el lienzo sobre un body vacio. 
despues hice otro ejemplo que sirve para una pagina completa, en la que el lienzo sea 
solamente una parte de ella, como en la visualizacion que tiene cada tp de la piscine
https://knnv-ar.github.io/la-piscine/

se le puede colocar cualquier medida al lienzo de p5, porque desde windowResized()
se ajusta el tamaño del elemento <canvas> del html y sobrescribe lo anterior.

->  la medida que se le pase a createCanvas() será la resolucion interna del lienzo.
->  el tamaño de visualizacion dependerá de la maquetacion que se haga con estilos css.
   (en el ejemplo 1 es proporcional a la ventana del navegador, y se le resta el margen)

como se manejan por separado la resolucion interna y el tamaño final,
está muy bueno para optimizar el tiempo de carga o la cantidad de memoria que se usa.
puede ser un canvas chico y liviano, pero verse grande tipo pantalla completa
(obviamente se vería pixelado, pero ahí hay que ir ajustando según la necesidad)


.....................................

el ejemplo 1 está listo para usar. solo hay que quitar los comentarios.
se adapta a cualquier pantalla. le puse flex, asi el canvas siempre quedará al medio.
se le puede personalizar el tamaño del margen y el color de fondo.

    aqui hay una version sin comentarios (para copiar y pegar):
    https://editor.p5js.org/mj-una/sketches/FJdY6lAu0

    aqui publiqué el ejemplo 1 para verlo como pagina web:
    https://mj-una.github.io/tutorial-p5-responsive

    aqui un paso a paso para publicar una pagina web en github:
    https://github.com/mj-una/tutorial-p5-responsive/blob/main/github.md


.....................................

cc0 - al dominio publico

escribi todo yo, el texto y el codigo de los ejemplos.
para usar y editar libremente. no es necesario citar autoria

30 Nov 2023

*/


// EJEMPLO 1

function setup() {

  createCanvas(200, 400); // resolucion interna, puede ser cualquier medida
  windowResized(); // <== se llama una vez creado el canvas (copiar y pegar esta linea)
}


function draw() {

  // cualquier cosa
  background(0, 100, frameCount*3%255);
  fill(200, 180);
  circle(100, 200, 150);
}


// copiar y pegar esta funcion
function windowResized() {

  // se llama una vez en el setup para sobreescribir medidas de createCanvas()
  // luego se llamará automaticamente cada vez que cambia el tamaño de la pantalla
 
  // con document.getElement se seleccionan elementos del dom (document object model)
  // dom es una api del navegador, que sirve para acceder al html desde javascript.
  // suena mas complicado de lo que es. se aprende rapido cuando se usa.

  let pag = document.getElementsByTagName("body")[0]; // selecciona body (contenedor)
  // getElementsByTagName retorna un array con todos los elementos de la etiqueta html
  // que se le pase como parametro. como body solo hay uno, es el de la posicion [0]

  let cnv = document.getElementById("defaultCanvas0"); // selecciona canvas de p5
  // getElementById retorna un elemento (unico) que en el html tenga el id que se pasa.
  // normalmente el id es visible en el codigo, por ejemplo <button id="ej123"></button>. 
  // pero en este caso se está buscando un elemento que crea p5 cuando se carga el sketch
  // por lo que para encontrarlo hay que inspeccionar la pagina desde el navegador.
  // se ve algo así <canvas id="defaultCanvas0" class="p5Canvas" etc... ></canvas>
 
  // margen <== EDITABLE
  let mrg = 3; // porcentaje (entre 0% y 50%)
  // calculando que 100% es la medida menor del contexto de visualizacion (viewport)
  // en comparación a la proproción width/height del lienzo. mas simple, y mas probable
  // es que desde celu 100% va ser el ancho de la ventana y desde compu el alto
  // (pero si el lienzo es muy largo o muy ancho, puede ser al revés)
 
  // fondo <== EDITABLE
  pag.style.backgroundColor = "rgb(160, 100, 80)";
  // para personalizar color. pero lo más correcto seria hacerlo en el css
  // o en un alguna parte del codigo dedicada a eso, asi no confunde luego
  // (si lo vas a hacer así entonces borra esta linea).

  // con .style se setean propiedades de estilo
  // cuando una propiedad en css tienen un-guion (@==> ej: "align-items"), 
  // el metodo equivalente en js se escribe con camelCase (@==> ej: ".alignItems").
  // el valor que se le asigna tiene que ser de tipo string
  
  pag.style.overflow = "hidden"; // quita scroll
  pag.style.display = "flex"; // propiedad css para centrar (se aplica al contenedor)
  pag.style.justifyContent = "center"; // centrar contenido horizontalmente
  pag.style.alignItems = "center"; // centrar contenido verticalmente (ej. <==@)
  pag.style.height = "100svh"; // a veces se recorta la pagina en pantallas verticales
 
  // no se cómo explicarlo bien, pero este if sirve para ver cuál medida es mayor:
  // el ancho de pantalla en comparación al alto del lienzo, o el alto de pantalla
  // en comparacion al ancho del lienzo. (yo lo imagino como que si la pantalla es
  // muy ancha y el canvas muy alto, entonces la primera multiplicacion va a ser mayor
  // que la segunda, y sigifica que el lienzo topará en los bordes horizontales)
  if (windowWidth * height > windowHeight * width) {
   
    // caso horizontal
   
    // "vh" es una unidad de medida en porcentajes de css (siglas de "viewport height"),
    // donde 100% es todo el alto del contexto de visualización. y "vw" es para el ancho.
    // se concatena para q .style reciba un string de [valor] + [unidad de medida]
    
    // "svh" es una mejora reciente de "vh" que resuleve algunos problemas de interfaces 
    // solapadas en celular. compatible con: safari, chrome y derivados, no con firefox.
    // https://flaming.codes/es/posts/new-dynamic-viewport-sizes-dvh-lvh-svh/
   
    // el lienzo ocupa todo el alto, menos los margenes de arriba y abajo
    cnv.style.height = (100 - mrg * 2) + "svh";
   
    // el ancho del lienzo en proporcion al alto (con regla de 3)
    cnv.style.width = ((100 - mrg * 2) / height) * width + "svh";
  }
  else {

    // caso vertical

    // lo mismo pero cambiando height por width y vh por vw
    cnv.style.width = (100 - mrg * 2) + "vw";
    cnv.style.height = ((100 - mrg * 2) / width) * height + "vw";
  }
}


/*

EJEMPLO 2

para cualquier pagina en la que se quiera incluir un sketch.

la idea es crear el canvas dentro de un div contenedor que le dará su forma final.
asi se pueden manejar los tamaños de los bloques con css como se haria normalmente.
del sketch se usan: createCanvas para la resolucion interna (ojo a la proporcion)
y windowResized para adaptar la medida del lienzo al div.

cuando un skecth se carga, sobreescribe los estilos css que tenga <canvas>,
por eso no se puede maquetar como un elemento normal.

en cambio al div contenedor se lo puede maquetar como a cualquier otro elemento.
luego, con manipulacion del dom, al elemento <canvas> se le asigna el tamaño del div.

supongo que la piscine funciona parecido, pero como esta en ruby no lo sé.

hice esta version con js porque quiero hacer unas animaciones web usando solo p5
y trabajar con <svg> para que sean vectoriales. asi puedo crearlas bien chiquitas
(como un icono) y luego escalarlas al tamaño que sea necesario sin que se pixeleen.

hay una libreria de p5 que sirve para que el lienzo sea un svg en vez de un canvas
https://github.com/zenozeng/p5.js-svg

si alguien se maneja con el tema svg en web porfa me comentaaaaaaaa
aqui hay un tutorial para hacer algo similar a lo que imagino
https://www.gorillasun.de/blog/working-with-svgs-in-p5js/


.....................................  

index.html
  el <div> contenedor puede estar en cualquier parte del body. <script> no importa
  donde esté (en este caso), pero para trabajar con addEventListener a veces
  es obligatorio que <script> sea el ultimo elemento del body, por eso está bueno
  colocarlo ahi, aunque sea solamente por convencion (asi se sabe donde encontrarlo).
 
  usé "vh" para que se note que el div es responsive (se adapta a la medida vertical),
  pero funciona bien con cualquier otra unidad de medida css, incluso para hacer
  responsive a martillazos con px y media query.

  IMPORTANTE: hay que prestarle atencion a que la proporcion ancho/alto del div en css*
  sea siempre la misma que width/height de createCanvas, sino quedará deformada la imagen
  (el lienzo se estira hasta rellenar todo el div).
  
  (*) no se puede usar aspect-ratio en el div, pq se rompe el lienzo en los cambios
  de tamaño (o al menos yo no pude resolverlo, creo q es por computedStyle)


.....................................  

<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- los script de librerias se colocan en el head -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    
    <style>
      body {
        margin: 0;
        padding: 0;
        text-align: center;
        background-color: rgb(160, 100, 80);
      }
      #idDiv {
        width: 40vh;
        height: 80vh;
        margin: 3vh auto;
      }
    </style>
  </head>

  <body>
    <header>
      <h3>prueba responsive</h3>
    </header>

    <main>
      <section>
        <div id="idDiv"></div>
      </section>
    </main>

    <footer>
      <adress>saludos</adress>
    </footer>

    <script src="sketch.js"></script>
  </body>
</html>


.....................................

sketch.js
  este ejemplo solo sirve para un sketch (.js) en una misma página (.html)
  para intentar hacerlo con más de un sketch leer el comentario del final
  (spoiler: se complica un toque)


.....................................

function setup() {

  let lienzo = createCanvas(200, 400); // resolucion interna
  // tiene que mantenerse la relacion ancho/alto del div (revisar css si esta oki)

  lienzo.parent("idDiv"); // coloca el canvas dentro del div (como en la piscine)
  // .parent() es un metodo de p5 que inserta un elemento dentro de otro
  // en este caso la variable lienzo dentro del elemnto cuya id="idDiv"
  
  // la variable lienzo se refiere a la instancia que genera p5.renderer,
  // que no es exactamente lo mismo que el elemento <canvas> del dom

  windowResized(); // se llama una vez creado el canvas y aplicado el metodo parent
}


function draw() {

  // cualquier cosa
  background(0, 100, frameCount*3%255);
  fill(200, 210);
  circle(100, 200, 150);
}


function windowResized() {

  let cnv = document.getElementById("defaultCanvas0"); // selecciona <canvas> desde dom
  let dvv = document.getElementById("idDiv"); // selecciona <div> contenedor desde dom
  
  let dvvFin = window.getComputedStyle(dvv); // accede a los estilos finales del <div>
  // como el css es responsive, pq usa "vh", .getComputedStyle() sirve para obtener
  // los valores finales en px del elemento en la pantalla (o sea cuando ya se adaptó)

  cnv.style.width = dvvFin.width; // sobreescribe los estilos del <canvas> en el dom...
  cnv.style.height = dvvFin.height; // ...anulando los valores dados por p5.rederer
}
  
  
.....................................
  

COMENTARIO FINAL

--> instancias multiples

si una misma pagina contiene varios sketchs, es necesario trabajar con distintas
instancias de p5 para cada uno. es menos intuitivo, pero safa. este es un ejemplo:
https://editor.p5js.org/caminofarol/sketches/r609C2cs

si se quiere mostrar cada lienzo con sus propias medidas, entonces hay que
usar distintos id para los div y mantener la funcion windowResized() en cada
instacia por separado, ajustando los id que usan cnv y dvv en getElemntById()
(se pueden buscar desde el navegador con inspeccionar elementos para asegurarse,
pero lo normal es que aumenta de a uno el número final en "defaultCanvas#"
según el orden en que cada instancia se ejecuta en el código).

o para los casos en que se vayan a mostrar iguales todos los divs (con la misma forma),
usar una misma clase css en cada <div> y maquetar la clase. todos los <canvas> que
se crean de p5 ya traen la clase css "p5Canvas" incorporada. para manipular el dom
habría que usar el metodo .getElementsByClassName() y trabajar con arreglos.

--> iframes

otra forma de resolverlo es trabajar con <iframe> en los que se incruste
cada sketch como una mini pagina dentro de la pagina general. en ese caso
la maquetación se hace directamente para el iframe (no es necesario el div,
ni trabajar con instancias multiples de p5). en el interior, cada skecth
se adapta a su propia ventana de contexto, algo similar al ejemplo 1.

me parece un enfoque más práctico, más escalable y más facil de compartir. 
en general las plataformas de contenido suelen usar iframes como contenedores.

    hay q aprender para reapropiarnos las cosas que usamos
    rescatar lo que necesitemos, hacerlo accesible, hacerlo colectivo
  
  
.....................................

PD1: para cada caso habría que adaptar el código de distintas formas. en los dos
ejemplos está el concepto para resolver la parte del responsive manipulando el dom
pero, por cómo se implementan, sirven solamente para un sketch por pagina.

PD2: siempre hay que prestar atención a la proporción de medidas del lienzo
y los contenedores (sean <div> o <iframe>), aunque, para los iframes se deberia
poder usar aspect-ratio de css sin problema. esto permitiría enfocar el responsive
sobre solamente una dimension (pienso que sería el ancho, usando "vw").

PD3: por el momento no he intentado ni visto en codigo lo de los iframes en p5,
pero voy a hacerlo para el tema de las animaciones svg (en los proximos meses).
cuando lo tenga listo haré otro tutorial.

//*/
