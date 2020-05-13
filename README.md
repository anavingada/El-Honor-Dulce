# El-Honor-Dulce
DAW Project for webpage "El Horno Dulce". 

13/05/2020

Versión con HTML, CSS, Bootstrap, Javascript, Jquery y Json. 

PÁGINAS TERMINADAS:
- Footer --> sección que va en todas las páginas HTML
- Alérgenos e intolerancias
- Política de Cookies
- Política de Privacidad
- Sobre Nosotros
- Homepage --> los links de cada categoria de productos ya están aplicados. Ejemplo: productos.html#bizcochos
- Página de error 404 --> Esta es la página a que deben ser redireccionados los usuarios

PÁGINAS CASI TERMINADAS / PENDIENTES DE BACK-END (Patri):
- header --> sección que va en todas las páginas HTML; Falta una función: si el usuario no está logged-in, se debe enseñar el menú con login y registro; si el usuario está logged-in, se debe enseñar el menú con el perfil, carrito, historial y link para cerrar sesión. 
- SiteMap --> Falta actualizar los links de perfil, carrito y historial. Falta una función: si el usuario no está logged-in, estos links deben llevar a la página de login; si el usuario está logged-in, estos links deben llevar a su página correspondiente.
- FAQS --> Cada FAQ no está escrita directamente en el HTML. He creado el fichero faqsLista.txt en la carpeta "information" donde están en formato de lista todas las FAQS con su pregunta y respuesta. En Javascript, este transforma el fichero faqsLista.txt en JSON y lo reproduce en pantalla. El ideal es que este fichero esté subido en el servidor también.
- Login --> falta saber dónde va la petición del formulario (action=""). Antes de hacer el login, debe verificar si el email y password existen y corresponden con la BBDD. Si todo bien, se hace el login y se redirecciona el usuario a la página de perfil. Si no está todo bien, se debe enseñar en pantalla el error de que el email o password están mal (como hemos hecho con Java).
- Contacto --> falta saber dónde va la petición del formulario (action=""). Guardar los datos del formulario en la BBDD de mensajes de contacto.
- Pedido Especial --> falta saber dónde va la petición del formulario (action=""). Guardar los datos del formulario en la BBDD de mensaje de pedidos especiales.
- Perfil del usuario --> falta saber dónde va la petición del formulario (action="") para actualizar los datos del usuario; saber donde va para hacer el logout y saber dónde va para borrar la cuenta. 
- Registro --> falta saber dónde va la petición del formulario (action=""). Antes de hacer el registro, debe verificar si el email y password no existen. Si todo bien, se hace el registro y se redirecciona el usuario a la página de login. Si no está todo bien, se debe enseñar en pantalla el error de que el email ya está registrado.

PÁGINAS QUE NO ESTÁN HECHAS: 
- Productos --> Similar a las FAQS, he creado un fichero Json para enseñar en pantalla todos los productos. Me falta terminar la distribuición por páginas. De la parte del servidor, es necesario mostrar los resultados de productos en función de la categoria seleccionada por el usuario. Eso depende de la información que envía el servidor desde la base de datos de productos.  
- Carrito --> Tengo que recibir los datos de sesión del carrito y mostrarlos en pantalla. 
- Historial --> lo mismo que el carrito
- Pedidos de todos los clientes --> lo mismo que el carrito
- Pedidos especiales --> lo mismo
- Banner de cookies --> estoy empezando

PREGUNTAS Y PROBLEMAS:
- Patri, estoy intentando abrir los proyectos de flask que tienes subido a github, pero no me deja. Incluso instalé pycharm, pero no tengo idea de como hacerlo. Me ayudas? :)
- La páginas que están terminadas y o casi terminadas, ya las puedes subir a tu proyecto de back end y empezar a probar (ejemplo del login, etc). Cuando tengas esto subido a tu proyecto me lo pasas? Necesito también que me expliques como funciona el proyecto y como lo puedo ver en el chrome. He estado mirando un mónton de tutoriales y no consigo qu ¡e funcionen :/ 

DETALLES:
- Para conseguir utilizar el mismo fichero de "header" y "footer" en todas las otras oáginas de la web, utilicé Ajax. Si lo abres normalmente, estos no van a aparecer porque ajax solo funciona en servidor. Lo que hice fue utilizar la extensión de chrome llamada "Web Server For Chrome" con un link para el proyecto. Así, si abro los HTMLs ya todo funciona bien. Por ejemplo la URL sería parecida a http://110.0.0.1:8888/homepage.html Si tienes algún problema me dices. 

Gracias. Ana

