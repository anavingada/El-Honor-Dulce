/* El Horno Dulce - Panadería y Repostería 
Javascript - Productos */

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

var current_page = 1;
var records_per_page = 7;
var y = "";

let objJson;
const promise = fetch('./information/productosLista.txt').then(
    function (u) { return u.json(); }
).then(
    function (json) {
        objJson = json;
        //console.log(objJson);
    }
)

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("productosCont");
    var page_actual = document.getElementById("page");
    var page_total = document.getElementById("totalPages");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
       /*y = "";
        y +=
            '<div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11"><img src="' + objJson[i].image + '" alt="' + objJson[i].nameProd + '"><div class="marginVert10"><span class="nameProducto">' + objJson[i].nameProd + '</span></div><div class="alergenosCont marginVert10 justify-content-center">'
        for (j in objJson[i].alergenosProd) {
            y += '<img class="iconWidth" src="' + objJson[i].alergenosProd[j].imageAlerg + '" alt="' + objJson[i].alergenosProd[j].nameAlerg + '" data-toggle="tooltip" data-placement="top" title="' + objJson[i].alergenosProd[j].nameAlerg + '" />'
        }
        y += '</div><div class="precioCarrito justify-content-around"><span class="my-auto"><b>' + objJson[i].price + ' €</b> <small>/ ' + objJson[i].unidades + ' unidades</small></span><i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i> </div></div>';*/
        
        y = "";
        y +=
            '<div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11"><img src="' + objJson[i].image + '" alt="' + objJson[i].nameProd + '"><div class="marginVert10"><span class="nameProducto">' + objJson[i].nameProd + '</span></div><div class="alergenosCont marginVert10 justify-content-center">'
        for (j in objJson[i].alergenosProd) {
            y += '<img class="iconWidth" src="' + objJson[i].alergenosProd[j].imageAlerg + '" alt="' + objJson[i].alergenosProd[j].nameAlerg + '" data-toggle="tooltip" data-placement="top" title="' + objJson[i].alergenosProd[j].nameAlerg + '" />'
        }
        y += '</div><div class="precioCarrito justify-content-around"><span class="my-auto"><b>' + objJson[i].price + ' €</b> <small>/ ' + objJson[i].unidades + ' unidades</small></span><a type="button" onclick="addToCart(this)" data-id="' + objJson[i].ID + '" data-name="' + objJson[i].nameProd + '" data-price="' + objJson[i].price + '" class="add-to-cart"><i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i></a> </div></div>';
        

        listing_table.innerHTML += y;
    };
    page_actual.innerHTML = page;
    page_total.innerHTML = numPages();


    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages() {
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = async () => {
    let objJson = await promise;
    // console.log("onload");
    changePage(1);
};


/*
<div class="producto col-xl-3 col-lg-4 col-md-5 col-sm-6 col-11" >
    <img src="images/prod_001.jpg" alt="Cookies del Horno Dulce">
    <div class="marginVert10">
        <span class="nameProducto">Cookies con pepitas de chocolate</span>
    </div>
    <div class="alergenosCont marginVert10 justify-content-center">
        <img class="iconWidth" src="images/gluten.png" alt="icono de gluten" data-toggle="tooltip" data-placement="top" title="Glúten" />
        <img class="iconWidth" src="images/lacteos.png" alt="icono de lácteos" data-toggle="tooltip" data-placement="top" title="Lácteos" />
        <img class="iconWidth" src="images/huevo.png" alt="icono de huevos" data-toggle="tooltip" data-placement="top" title="Huevos" />
    </div>
    <div class="precioCarrito justify-content-around">
        <span class="my-auto"><b>5,50 €</b> <small>/ 10 unidades</small></span>
         <i class="fas fa-shopping-bag fa-lg my-auto addCarrito" data-toggle="tooltip" data-placement="top" title="Añadir al carrito"></i>
    </div>
</div>
*/ 

