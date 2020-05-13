//Función para selección de categorias en móvil
var x = window.matchMedia("(max-width: 575px)")
myFunction(x)
x.addListener(myFunction)
function myFunction(x) {
    if (x.matches) {
        $('#categorias li button').click(function (e) {
            $('#select').text($(this).text());
            $(this).addClass('current');
            $('#categoriasCont').removeClass('show');
            $('#select').addClass('collapsed');
            $('#select').attr("aria-expanded") == false;
            e.preventDefault();
        })
    }

};

// Función para que aparezcan todos los productos en la pantalla 
// Todavía no está habilitada la busqueda por categorias
/*
var y = "";
var i;
var producto = 1;
fetch('./information/productosLista.txt')
    .then(res => res.json())
    .then(data => {
    
        for (i in data) {
            console.log('producto-->' + producto);

            y += '<div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11"><img src="' + data[i].image + '" alt="' + data[i].nameProd + '"><div class="marginVert10"><span class="nameProducto">' + data[i].nameProd + '</span></div><div class="alergenosCont marginVert10 justify-content-center">';
                for (j in data[i].alergenosProd) {
                    y += '<img class="iconWidth" src="' + data[i].alergenosProd[j].imageAlerg + '" alt="' + data[i].alergenosProd[j].nameAlerg + '" data-toggle="tooltip" data-placement="top" title="' + data[i].alergenosProd[j].nameAlerg + '"/>';
                }
                y += '</div><div class="precioCarrito justify-content-around"> <span class="my-auto"><b>' + data[i].price + ' €</b> <small>/ ' + data[i].unidades + ' unidades</small></span><i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i></div></div>';
                producto++;
                
            }       
        
        document.getElementById("productosCont").innerHTML = y;
        console.log(data)

    })
    .catch(err => console.error(err));
    */



/* <div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11">
  <img src="images/prod_001.jpg" alt="Cookies del Horno Dulce">
  <div class="marginVert10">
      <span class="nameProducto">Cookies con pepitas de chocolate</span>
  </div>
  <div class="alergenosCont marginVert10 justify-content-center">
      <img class="iconWidth" src="images/gluten.png" alt="icono de gluten" data-toggle="tooltip" data-placement="top" title="Glúten"/>
      <img class="iconWidth" src="images/lacteos.png" alt="icono de lácteos" data-toggle="tooltip" data-placement="top" title="Lácteos"/>
      <img class="iconWidth" src="images/huevo.png" alt="icono de huevos" data-toggle="tooltip" data-placement="top" title="Huevos"/>
  </div>
  <div class="precioCarrito justify-content-around">
      <span class="my-auto"><b>5,50 €</b> <small>/ 10 unidades</small></span>
      <i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i>
  </div>
</div> */





// Función para habilitar varias página de productos con un máximo de 12 productos por página
var y = "";
var k = "";
var i;
var producto = 1;
fetch('./information/productosLista.txt')
    .then(res => res.json())
    .then(data => {
        
        $.getJSON('./information/productosLista.txt', function (json) {
            $('#productosCont').pagination({
                dataSource: json.Producto,
                pageSize: 12,
                callback: function(data, pagination) {
                    $('#productosCont .wrapper').empty();
                    for (i in data) {

                        y += '<div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11"><img src="' + data[i].image + '" alt="' + data[i].nameProd + '"><div class="marginVert10"><span class="nameProducto">' + data[i].nameProd + '</span></div><div class="alergenosCont marginVert10 justify-content-center">';
                            for (j in data[i].alergenosProd) {
                                y += '<img class="iconWidth" src="' + data[i].alergenosProd[j].imageAlerg + '" alt="' + data[i].alergenosProd[j].nameAlerg + '" data-toggle="tooltip" data-placement="top" title="' + data[i].alergenosProd[j].nameAlerg + '"/>';
                            }
                            y += '</div><div class="precioCarrito justify-content-around"> <span class="my-auto"><b>' + data[i].price + ' €</b> <small>/ ' + data[i].unidades + ' unidades</small></span><i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i></div></div>';
                        
                             
                    }   
                    
                    $('#productosCont .wrapper').html(y);  
                    console.log(data);
                    
                },
                
            });
        });

        

    })
    .catch(err => console.error(err));



    /*
    $.each(data, function (i, f) {
        console.log('producto-->' + producto);
        y += '<div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11"><img src="' + f.image + '" alt="' + f.nameProd + '"><div class="marginVert10"><span class="nameProducto">' + f.nameProd + '</span></div><div class="alergenosCont marginVert10 justify-content-center">';
        $.each(data.alergenosProd, function (i, k) { 
            y += '<img class="iconWidth" src="'+ k.imageAlerg + '" alt="icono de gluten" data-toggle="tooltip" data-placement="top" title="Glúten"/><img class="iconWidth" src="images/lacteos.png" alt="icono de lácteos" data-toggle="tooltip" data-placement="top" title="Lácteos"/><img class="iconWidth" src="images/huevo.png" alt="icono de huevos" data-toggle="tooltip" data-placement="top" title="Huevos"/></div>';
        };
        y+= '<div class="precioCarrito justify-content-around"><span class="my-auto"><b>' + f.price + ' €</b> <small>/ ' + f.unidades + ' unidades</small></span><i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i></div></div>';
        
        $('#productosCont .wrapper').append(y);
        producto++;
    });
    */
    