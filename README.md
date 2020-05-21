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

- Productos --> Similar a las FAQS. He creado un fichero Json para enseñar en pantalla los productos. Está paginado, con 7 productos por página. Falta que aparezcan en pantalla los resultados por consulta de base de datos (todos los productos o por cada categoria). La página también está conectada al carrito. Si pinchamos en cada mini carrito de cada producto se guarda en la sesión y aparece en la página de carrito. 

- Carrito --> En esta página aparece los productos que el usuario añadió al carrito. Ahí también se puede añadir o restar cantidad, borrar el producto del carrito o vaciarlo. Hya la opción de continuar comprando y de finalizar la encomienda. La función de finalizar encomienda hay que crear algo que envie los datos del carrito para la base de datos en conjunto con los datos del usuario. Además, el finalizar encomienda solo debe funcionar si el usuario está logged-in. Si no está, debe ser redireccionado primero a la página de login. 

PÁGINAS QUE NO ESTÁN HECHAS: 
- Historial --> Voy a preparar la página para que reciba de la base de datos la información del historial de compra de los usuarios. 
- Pedidos de todos los clientes --> esta página debe ser solo para el gestor de la empresa; se puede acceder a la base de datos o hacer una página que lo muestre en pantalla. 
- Pedidos especiales --> esta página debe ser solo para el gestor de la empresa; se puede acceder a la base de datos o hacer una página que lo muestre en pantalla. 
- Banner de cookies --> estoy empezando

DETALLES:
- Para conseguir utilizar el mismo fichero de "header" y "footer" en todas las otras oáginas de la web, utilicé Ajax. Si lo abres normalmente, estos no van a aparecer porque ajax solo funciona en servidor. Lo que hice fue utilizar la extensión de chrome llamada "Web Server For Chrome" con un link para el proyecto. Así, si abro los HTMLs ya todo funciona bien. Por ejemplo la URL sería parecida a http://110.0.0.1:8888/homepage.html Si tienes algún problema me dices. 

ATENCIÓN: Patri, voy a grabar un video a explicar que nos falta para conectar back con front y subirlo al drive. te aviso cuando esté. 

Gracias. Ana

