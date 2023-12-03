```

TUTORIAL BASICO GITHUB PAGES


este tutorial esta pensado para ser intuitivo y realizable por cualquier persona.
todo se hace desde la interfaz grafica de usuario, sin necesidad de comandos

para aprender a trabajar con git/github ver los tutoriales del final


PASO A PASO

desde el editor de p5 online hasta una pagina web publicada
(es gratis pero con limitaciones en cuanto a trafico)


.....................................

0.  si tu sketch no usa la libreria p5.sound (para trabajar con sonidos)
    anda al archivo index.html y elimina esta linea completa:


<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>


    (no confundir con la linea anterior, que es la de p5 original y no hay que borrarla)


.....................................

1.  descarga el sketch del editor online de p5. en "file" -> "download"


.....................................

2.  crea una nueva carpeta en tu escritorio (o donde quieras)


.....................................

3.  anda a tus descargas, extrae los archivos del .zip descargado hacia la nueva carpeta
    (click derecho -> "extraer todo" -> "examinar" -> buscar la carpeta)


.....................................

4.  en la carpeta: abrir "index.html" y revisar cómo se verá el sketch en el navegador.
    los archivos "p5.js" y "p5.sound.min.js" contienen la libreria completa de p5
    los puedes eliminar si quieres pq pesan bastante y de todos modos la libreria
    ya está linkeada en el html


.....................................

5.  crea una cuenta en github.com (o inicia sesion)


.....................................

6.  crea un repositorio (donde dice "new repository")


.....................................

7.  elige un nombre para el repositorio. no puede tener espacios ni caracteres raros
    sí puede tener guion "-" y guion bajo "_". ojo q el link resultante será asi:

      [nombre de usuario].github.io/[nombre del repo]

    si haces un repositorio con el mismo nombre q el usuario el link será así:

      [nombre de usuario].github.io


.....................................

8.  marca la opcion "public" (que viene marcada por defecto creo)


.....................................

9.  marca la opcion "add a readme file" (que no viene marcada)
    y selecciona un tipo de licencia si quieres


.....................................

10. el resto dejalo como está y clickea "create repository"


.....................................

11. ya está listo el repositorio, que es como una carpeta online donde guardar cosas.
    ahora hay que subir los archivos. en el boton "add file" selecciona "upload files".
    puedes arrastrarlos desde la nueva carpeta o seleccionarlos con "choose you files"


.....................................

12. espera a que se suban los archivos y clickea "commit changes"


.....................................

13. ahora hay que publicar la página. una forma simple de hacerlo es
    en los ajustes del repositorio (en la barra que está abajo del logo
    y del nombre del repo, el icono de mas a la derecha que dice "settings"
    justo al lado de "insights").

    se abirá un menu, busca entre las secciones de la izquierda donde
    hay varias opciones: la que dice "pages", justo despues de "codespaces"
    

.....................................

14. en la seccion "build and deployment" están las opciones "source" que tiene que
    ser "deploy from a branch" y "branch" que dice "none" y hay que cambiarlo a "main".


.....................................

15. al lado aparecerá un boton "/(root)" y otro "save". clickea "save" y espera.


.....................................

16. tarda algunos minutos en estar listo. carga de nuevo la pagina hasta que
    aparezca un mensaje q dice "your site is live at" y el link.
    

.....................................

17. ya está listo. puedes copiar y compartir ese link con cualquier persona.


.....................................

18. si quieres dar de bajar la pagina: vuelve al paso 14 y selecciona "none" -> "save".
    la podrás volver a dar de alta cambiandolo de nuevo a "main"

    tambien existe la opcion "unpublish page", pero en caso de que luego quieras
    publicarla de vuelta vas a tener q crear una nueva rama ("branch") y es mas complicado


.....................................

19. si quieres modificar algo: en la seccion "code" puedes abrir los archivos y editar
    directamente el codigo (clickea el icono del lapiz arriba a la derecha, cuando termines
    clickea "commit changes") o eliminarlos (en los tres puntitos de arriba a la derecha,
    luego baja y click en "delete file"). tambien puedes subir más archivos, repitiendo
    lo de "add file". cualquier cambio q hagas tarda unos minutos en verse reflejado. 
    

.....................................

20. si quieres eliminar el repositorio completo puedes hacerlo en "settings", baja
    hasta el final donde dice "delete this repository". para confirmar te va a pedir
    que escribas [nombre de usuario]/[nombre del repo], luego q ingreses tu contraseña.
    es definitivo, tendras q volver a crear un repo nuevo en caso q te arrepientas.


.....................................

sobre github pages:

 -  es gratis pero si recibe x cantidad de trafico se limitan las visitas
 -  puedes crear todos los repositorios que quieras (asi q tambien paginas)
 -  puedes personalizar el link si tienes un nombre de dominio propio
 -  solo funciona como front end (no se puede conectar a una base de datos por ejemplo)
 -  si tu pagina crece y lo necesitas, puedes vincular el repositorio con un servicio
    de hosting externo q permita más trafico, y seguir manejando el codigo desde github.
    
    
sobre github:

 -  es una plataforma para alojar codigo y participar en proyectos colaborativos
 -  funciona sobre git, que es un sistema de control de versiones (en q todas las
    actualizaciones que haces a tu codigo quedan guardadas de forma accesible)
 -  tiene una curva de aprendizaje lenta y siempre te faltará saber un poco mas
    pero es muy muy muy util, asi q todo lo q aprendas vale el esfuerzo.


una excelente forma de empezar:
tutoriales de git/github de la catedra laccabanne (2022)

    parte 1
    https://youtu.be/9kKWEDiVBIY?si=bnLRYvy798G6fxYa
    
    parte 2
    https://youtu.be/UOCX2PNgjns?si=FkNoP-sC_pqzdNNq
    
    parte 3
    https://youtu.be/TUoZ3-YFfco?si=qcVBMIfdNKJqEBGe

    trabajar desde repositorios locales y desde un editor tipo vs code (o similar)
    permite manejar mucho mejor el codigo, los archivos y los cambios q hagas.
    ademas se respaldan en la nube y se pueden compartir facilmente

    es un poco dificil acostumbrarse al principio, pero intentalo y repitelo.
    la mejor forma de aprender es con el uso. cada vez se te hará un poco mas fácil.

    saludos!
    
```
