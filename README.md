# El-Honor-Dulce
DAW Project for webpage "El Horno Dulce". 

26/05/2020

Versión con HTML, CSS, Bootstrap, Javascript, Jquery y Json. 

PÁGINAS TERMINADAS: (cuando se conecte front con back hay que revisar todos los enlaces)
- Footer --> sección que va en todas las páginas HTML
- Homepage --> los links de cada categoria de productos ya están aplicados. Ejemplo: productos.html#bizcochos 
- Sobre Nosotros
- Alérgenos e intolerancias
- Política de Cookies
- Política de Privacidad
- Página de error 404 --> Esta es la página a que deben ser redireccionados los usuarios
- Banner de Cookies --> habilitado en todas las páginas; identifica el usuario y solo aparece una vez con expiración de 14 días; aparece en la primera página visitada por el usuario que no tenga la cookie; Si el usuario tiene la cookie, entonces no aparece la notificación. 



PÁGINAS CASI TERMINADAS / PENDIENTES DE BACK-END (Patri):
- header --> sección que va en todas las páginas HTML; 
         --> Falta función con condición: 
                    --> si el usuario NO está logged-in --> mostrar menú con login, registro y carrito (el carrito aparece siempre porque se guarda la sesión);
                    --> si el usuario está logged-in --> mostrar el menú con el perfil, carrito, historial y link para cerrar sesión. 

- SiteMap --> Añadir condiciones a determinados links en función de el usuario estar logged-in o no.
          --> Links y condición:
                    --> Registro de usuario - si usuario está logged-in, redireccionar para página de perfil; si está logged-out, redireccionar para página de registro
                    --> Login de usuario - si usuario está logged-in, redireccionar para página de perfil; si está logged-out, redireccionar para página de login.
                    --> Perfil del usuario y historial de compra - si usuario está logged-in, redireccionar para página de perfil de usuario y historial; si está logged-out, redireccionar para página de login.

- FAQS --> Cada FAQ no está escrita directamente en el HTML. 
       --> He creado el fichero faqsLista.txt en la carpeta "information" donde están todas las FAQS con su pregunta y respuesta. 
       --> Javascript transforma el fichero faqsLista.txt en JSON y lo reproduce en pantalla. 
       --> Hay que guardar el fichero en el servidor tal cual está O ENTONCES guardar cada sección en una base de datos de FAQS. 
       --> El servidor debe enviar a front los datos tal cual está en el documento faqsLista.txt para que pueda ser leído.

- Contacto --> Javascript de validación de formulario habilitado.
           --> definir el "action" del formulario que será una función de servidor. 
           --> la función debe guardar en la Base de datos de Mensajes de Contacto todos los campos del formulario. 
           --> Si todo bien, debe aparecer en pantalla el mensaje "Mensaje enviada. Muchas gracias"

- Login --> Javascript de validación de formulario habilitado.
        --> definir el "action" del formulario que será una función de servidor. 
        --> La función debe verificar si el email y password existen y corresponden con la BBDD. 
                    --> Si todo correcto, se hace el login y se redirecciona el usuario a la página de perfil del usuario.
                    --> Si los datos no existen o están incorrectos, se debe enseñar en pantalla el error de que el email o password están mal o no existen.

- Pedido Especial --> Javascript de validación de formulario habilitado.
                  --> definir el "action" del formulario que será una función de servidor. 
                  --> La función debe guardar los datos del formulario en la Base de Datos de pedidos especiales.

- Perfil del usuario --> Javascript de validación de habilitado en caso de que el usuario quiera hacer actualización de perfil.
                     --> definir el "action" del formulario que será una función de servidor. 
                                --> Si el usuario pincha en actualizar perfil, se debe llevar a una función de actualizar los datos del usuario en la Base de Datos del usuario. 
                                --> Si el usuario pincha en cerrar sesión, se debe cerrar la sesión del log del usuario. 
                                --> Si el usuario pincha en borrar la cuenta, se debe llevar a una función que borre el usuario de la base de datos de usuarios. 

- Registro --> Javascript de validación de formulario habilitado.
           --> definir el "action" del formulario que será una función de servidor. 
                    --> La función debe verificar si el email existe o no. 
                    --> Si el email no existe, entonces se hace el registro, guardando los datos en la base de datos de usuarios y redireccionando el usuario a la página de login. 
                    --> Si el email existe, se debe enseñar en pantalla el error de que el email ya está registrado.

- Productos --> Cada Producto no está presentado directamente en el HTML. 
            --> He creado el fichero productosLista.txt en la carpeta "information" donde están todos los productos y sus características correspondientes. 
            --> Javascript transforma el fichero productosLista.txt en JSON y lo reproduce en pantalla. 
            --> Hay que guardar los productos en la base de datos de productos. 
            --> El servidor debe enviar a front los datos tal cual está en el documento productosLista.txt para que pueda ser leído.
            --> Esta página está paginada, con 7 productos por página. 
            --> Dispone de un menú con las categorias. 
                    --> En función de donde pinche el usuario (todas las categorias, o en tartas, por ejemplo), deben aparecer solo los productos que corresponden a esa categoria.
                    --> la información de categoria de cada producto está guardada en el fichero productosLista.txt
            --> Cada producto ya está habilitado para se conectar con el carrito. Si pinchamos en cada carrito de un producto, se guarda en un array de sesión y aparece en la página de carrito. La información del carrito solo se pierde si el usuario cierra la ventana. 
            

- Carrito --> Cada producto del carrito no está presentado directamente en el HTML. 
          --> cada producto del carrito está guardado en un array. 
          --> Javascript recoge el array y enseña los productos en el carrito. 
          --> En cada producto del carrito se puede conocer cambiar la cantidad, borrar del carrito y ver el precio. 
          --> Si el usuario pincha en vaciar carrito, el carrito se quede totalmente vacío. 
          --> Si el usuario pincha en continuar comprando, se redirecciona a la página de productos, no se perdiendo la información del carrito. 
          --> Si el usuario pincha en finalizar encomienda:
                    --> Si el usuario NO está logged-in, debe ser redireccionado a la página de login.
                    --> Si el usuario está logged-in, la información del carrito se debe enviar al servidor y guardada en la Base de Datos de pedidos. Además, debe aparecer un mensaje se que la encomienda fue realizada. 

- Historial --> Cada pedido no es presentado directamente en el HTML. 
            --> He creado el fichero historialLista.txt en la carpeta "information" donde he creado una lista de pedidos fictícia en formato como si lo hubiese recibido del servidor. 
            --> Javascript transforma el fichero historialLista.txt en JSON y lo reproduce en pantalla.
            --> Los datos deben de estar guardados en la base de datos de pedidos con el usuario asociado.
            --> Si el usuario no tiene pedidos, debe aparecer un mensaje con "No tiene pedidos."
            --> Si el usuario tiene pedidos, se muestran en accordion por fechas. Cada pedido tiene los productos pedidos y el precio total pagado. 


PÁGINAS QUE NO ESTÁN HECHAS / SOY DE LA OPINIÓN QUE DEBEMOS HACERLAS SOLO SI NOS DA TIEMPO:

- Pedidos de los clientes realizados a través de la página web --> esta página debe ser solo para el gestor de la empresa; se puede acceder a la base de datos o hacer una página que lo muestre en pantalla. 
- Pedidos especiales realizados a través de la página web --> esta página debe ser solo para el gestor de la empresa; se puede acceder a la base de datos o hacer una página que lo muestre en pantalla. 
- Mensajes del formulario de contacto --> --> esta página debe ser solo para el gestor de la empresa; se puede acceder a la base de datos o hacer una página que lo muestre en pantalla.



BASES DE DATOS NECESARIAS: 
- Usuarios
        --> conexión con la base de datos de pedidos
        --> relacionado con la las páginas: perfil, carrito, login, registro

- Productos
        --> conexión con la base de datos de usuarios
        --> conexión con la base de datos de pedidos
        --> relacionado con la las páginas: productos, carrito

- FAQS
        --> sin conexión con las otras bases de datos
        --> para la página de FAQS

- Mensajes de contacto (del formulario de contacto) 
        --> sin conexión con las otras bases de datos
        --> viene del formulario de contacto.html

- Pedidos 
        --> viene de la página de carrito
        --> conexión con la base de datos de usuarios
        --> conexión con la base de datos de productos

- Pedidos especiales
        --> viene del formulario de pedido-especial.html
        --> sin conexión con las otras bases de datos



DETALLES:
- Para conseguir utilizar el mismo fichero de "header" y "footer" en todas las otras oáginas de la web, utilicé Ajax. Si lo abres normalmente, estos no van a aparecer porque ajax solo funciona en servidor. Lo que hice fue utilizar la extensión de chrome llamada "Web Server For Chrome" con un link para el proyecto. Así, si abro los HTMLs ya todo funciona bien. Por ejemplo la URL sería parecida a http://110.0.0.1:8888/homepage.html Si tienes algún problema me dices. 

ATENCIÓN: Patri, voy a grabar un video a explicar que nos falta para conectar back con front y subirlo al drive. te aviso cuando esté. 

Gracias. Ana

