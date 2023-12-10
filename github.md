```

TUTORIAL BASICO GITHUB PAGES

este tutorial explica paso a paso como publicar una pagina web en github
(es gratis pero con limitaciones en cuanto a trafico q soporta)

está pensado para ser intuitivo y realizable por cualquier persona.
todo se hace desde la interfaz grafica, sin necesidad de comandos

para aprender a trabajar con git/github ver los tutoriales del final

si encuentras un error o tienes una sugerencia porfa dime y lo cambio!
ultima actualizacion: 10 Dic 2023


PASO A PASO

desde el editor de p5 online hasta una pagina web publicada (pasos 0 a 17)
si ya tienes tus archivos .html, .css, .js, etc en local -> arranca desde el paso 5


.....................................

0.  si tu sketch no usa la libreria p5.sound (para trabajar con sonidos) entonces
    anda al archivo index.html (arriba a la izq, en la flecha justo abajo del boton play)
    y elimina esta linea completa:

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>

    IMPORTATNTE:
    * no confundir con la linea anterior, que es la de p5 original y no hay que borrarla.
    se distinguen pq la de p5 es la primera etiqueta <script> y termina asi: /p5.js"></script>
    en cambio p5.sound es el segundo <script> y termina asi: /p5.sound.min.js"></script>

    * el link del atributo src puede variar un poco dependiendo de la version de p5 q se use.
    es recomendable usar la que venga por defecto en el editor (tal como esté)

    * ademas, puedes cambiar <html lang="en"> por lang="es" para que tu pagina esté en español.
    así, al abrirla no te aparecerá la ventanita de google q te pregunta si quieres traducirla


.....................................

1.  descarga el sketch del editor online de p5. en "file" -> "download"
    (para poder hacerlo tienes q estar trabajando desde tu cuenta)


.....................................

2.  crea una Nueva Carpeta en tu escritorio (o donde quieras)


.....................................

3.  anda a tus descargas, extrae los archivos del .zip descargado hacia la Nueva Carpeta
    (click derecho -> "extraer todo" -> "examinar" -> busca y selecciona la Carpeta)


.....................................

4.  en la Carpeta: abre "index.html" y revisa cómo se verá el sketch en el navegador

    * si tu sketch funcionaba bien en el editor, pero ahora no se ve -> puede ser que
    en el paso 0 eliminaste la linea equivocada. en ese caso, copia y pega el <script>
    de la biblioteca p5 de otro sketch (o crea un nuevo sketch y vuelve a decargarlo)

    * los archivos "p5.js" y "p5.sound.min.js" contienen la libreria completa de p5
    en copia local, puedes eliminarlos si quieres pq pesan bastante y de todos modos
    la libreria ya está linkeada desde el html

    * para proyectos grandes o a largo plazo puede ser mejor incluir las copias locales
    de las bibliotecas que uses (y cambiar el link del <script src=""> para que refiera
    los archivos locales y no a los de la nube). asi se evita problemas a futuro por
    si cambia el link de las versiones online o si dejan de estar disponibles


.....................................

5.  inicia sesion en github.com (o crea una cuenta)


.....................................

6.  crea un repositorio (donde dice "new repository")


.....................................

7.  elige un nombre para el repositorio. no puede tener espacios ni caracteres raros
    sí puede tener guion "-" o guion bajo "_". ojo q el link resultante será asi:

        [nombre de usuario].github.io/[nombre del repo]

    si haces un repositorio con el mismo nombre q el usuario el link será así:

        [nombre de usuario].github.io


.....................................

8.  marca la opcion "public" (o ya viene marcada por defecto creo)


.....................................

9.  IMPORTANTE: marca la opcion "add a readme file" (que no viene marcada creo),
    esto creará un archivo .md en el que luego puedes describir tu repositorio

    tambien, si quieres selecciona un tipo de licencia (no es obligatorio)


.....................................

10. el resto dejalo como está y clickea "create repository"


.....................................

11. ya está listo el repositorio, que es como una carpeta online donde guardar cosas
    y que tiene muchas funcionalidades para ir aprendiendo mas adelante

    ahora hay que subir los archivos. en el boton "add file" selecciona "upload files".
    puedes arrastrarlos desde la Nueva Carpeta o seleccionarlos con "choose your files"

    IMPORTANTE: no subas la Carpeta en sí, sino q abrila y selecciona directamente
    los archivos (.html, .css, .js, etc) y subcarpetas internas (si las hay)


.....................................

12. espera a que se suban los archivos y clickea "commit changes"

    * revisa si subiste los archivos de manera correcta: "index.html" tiene que ser visible
    desde el inicio del repo, o sea tiene que estar en la raiz ("root"). todos los archivos
    y subcarpetas tienen que quedar colocados de forma equivalente a como estaban ordenados
    dentro de la Nueva Carpeta

    * si está mal -> repite desde el paso 6. puedes eliminar el repo malo segun el paso 20


.....................................

13. ahora hay que publicar la página. una forma simple de hacerlo es en los ajustes del repo.
    en la barra que está abajo del logo de github y del nombre del repo -> clickea "settings"
    (es el icono de mas a la derecha, justo el siguiente despues de "insights")

    se abrirá un menu. busca en la seccion de la izquierda donde hay varias opciones:
    clickea la que dice "pages" (justo despues de "codespaces")
    

.....................................

14. en la seccion "build and deployment" están:

        "source" que tiene que ser "deploy from a branch"
        y "branch" que dice "none"

    clickea en "none" y cambialo a "main".


.....................................

15. al lado aparecerá un boton "/(root)" y otro "save". clickea "save" y espera


.....................................

16. tardará algunos minutos en desplegarse ("deploy") la pagina. carga de nuevo la pestaña
    hasta que aparezca un mensaje q dice "your site is live at" y el link
    

.....................................

17. LISTO!!! puedes copiar y compartir ese link con cualquier persona


.....................................

18. si quieres dar de baja la pagina: vuelve al paso 14 y cambia "branch" a "none" -> "save".
    la podrás volver a dar de alta seleccionando de nuevo "main" -> "save"

    tambien existe la opcion "unpublish page", pero en caso de que luego quieras
    publicarla de vuelta vas a tener q crear una nueva rama ("branch") y es mas complicado


.....................................

19. si quieres modificar algo: en la seccion "code" puedes abrir los archivos y [1] editar
    directamente el codigo (clickea el icono del lapiz arriba a la derecha, cuando termines
    clickea "commit changes") o [2] eliminarlos (en los tres puntitos de arriba a la derecha,
    luego baja y click en "delete file"). tambien puedes [3] subir más archivos, repitiendo
    lo de "add file". cualquier cambio q hagas tardará unos minutos en verse reflejado

    tambien en la seccion "code", junto al boton de "add file" hay un boton que dice "code"
    si lo clickeas, en la ultima opcion q se abre -> "download zip" puedes descargar el codigo

    * esto ultimo lo puedes hacer con cualquier repositorio q encuentres en github, aunque hay
    mejores formas de copiar un codigo, como "clonarlo" para mantener su funcionalidad de repo,
    o "forkearlo" para tener una copia sincronizada desde la que puedas proponer cambios
    mediante "pull request" al repo original. es interesante para seguir aprendiendo
  

.....................................

20. si quieres eliminar el repositorio completo puedes hacerlo en "settings", baja
    hasta el final donde dice "delete this repository". para confirmar te va a pedir
    que escribas [nombre de usuario]/[nombre del repo], luego q ingreses tu contraseña.
    es definitivooo, tendras q volver a crear un repo nuevo en caso q te arrepientas


.....................................

sobre github pages:

 -  es gratis pero si recibe x cantidad de trafico se limitan las visitas
 -  puedes crear todos los repositorios que quieras (asi q tambien paginas)
 -  puedes personalizar el link si tienes un nombre de dominio propio
 -  solo funciona como front end (no se puede conectar a una base de datos por ejemplo)
 -  si tu pagina crece y lo necesitas, puedes vincular el repositorio con un servicio
    de hosting externo q permita más trafico, y seguir manejando el codigo desde github
    
    
sobre github:

 -  es una plataforma para alojar codigo y participar en proyectos colaborativos
 -  funciona sobre git, que es un sistema de control de versiones (en q todas las
    actualizaciones que haces a tu codigo quedan guardadas de forma accesible...
    cada "commit" q haces es un cambio en el repo, lo ideal es q sea significativo
    y q escribas un pequeño comentario para saber qué hiciste).
 -  tiene una curva de aprendizaje lenta y siempre te faltará saber un poco mas
    pero es muy muy muy util, asi q todo lo q aprendas valdrá el esfuerzo


una excelente forma de empezar:
tutoriales de git/github de la catedra laccabanne (2022)

    parte 1
    https://youtu.be/9kKWEDiVBIY?si=bnLRYvy798G6fxYa
    
    parte 2
    https://youtu.be/UOCX2PNgjns?si=FkNoP-sC_pqzdNNq
    
    parte 3
    https://youtu.be/TUoZ3-YFfco?si=qcVBMIfdNKJqEBGe


    trabajar desde repositorios locales con un editor como vs code (o similar)
    permite manejar mucho mejor el codigo, los archivos y los cambios q hagas.
    ademas se respaldan en la nube y se pueden compartir facilmente

    es un poco dificil acostumbrarse al principio, pero intentalo y repitelo.
    la mejor forma de aprender es con el uso. cada vez se te hará un poco mas fácil

    saludos!


```
