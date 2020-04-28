# El-Honor-Dulce
DAW Project for webpage "El Horno Dulce". 

De momento solo hay HTML y CSS con Bootstrap.

Páginas que faltan: 
- homepage
- productos
- carrito
- gestion de mensajes
- gestion de pedidos
- pedidos especiales
- faqs
- historial
- cookies
- Página tipo popover de cada producto (esto depende de insertar los productos en una base de datos y recuperarlos.)

Detalles de front-end:
- todavía no hay ninguna página habilitada con javascript y/o angular. 
- estoy empezando con la validación de los formularios. 
- para mostrar en pantalla los productos, he mirado un ejemplo de angular que mola. No sé muy bien como montarlo pero voy a ver que es posible hacer. 

Detalles a considerar para back-end (Patri):
- Todas las páginas creadas tienen el header y el footer, pero eso es porque les inserté yo manualmente. He estado investigando y hay una manera de hacer un "include" (como con Java y las páginas JSP) con Python. Eso se hace del lado del servidor, parece. Lo puedes probar? Si no, lo puedo hacer yo con PHP, que ya descubrí como se hace :). Es mejor hacer un include del header y del footer porque así solo hay un fichero de header y de footer reutilizado en las otras páginas. Lo mismo se aplica al head (con los links de jquery, etc.). 

- Si poner el width de la pantalla a menos de 768px, y pinchares en el menú, vas a ver que aparecen 2 tipos de menú (uno con login o registro y otro con perfil, carrito, historial y cerrar sesión). De momento aparecen los dos porque tengo que crear una condición que depende del back-end. O sea, si el usuario no hizo el login, aparece el menñu con login y registro. Si el usuario hizo el login, entonces aparece el menñu con perfl, carrito, historial y cerrar sesión. 

- Voy a necesitar también la función de logout para crear la condición y al pinchar, hacer el logout de sesión. 

- Te parece si creo una "base de datos" en excel para insertar en tu base de datos de productos? Vamos a necesitar una base de datos de usuarios, pedidos/encomiendas, mensajes, productos y creo que pedidos especiales. 


