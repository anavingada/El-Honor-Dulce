/* El Horno Dulce - Panadería y Repostería 
Javascript - Carrito */




// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(id, name, price, count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (id, name, price, count) {
        for (var item in cart) {
            if (cart[item].id === id) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(id, name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (id, count) {
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (id) {
        for (var item in cart) {
            if (cart[item].id === id) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (id) {
        for (var item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item

/*$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});*/

function addToCart(element) {
    event.preventDefault();
    console.log("añadiendo producto");

    var id = $(element).data('id');
    var name = $(element).data('name');
    var price = Number($(element).data('price'));
    console.log(id + " - " + name + " - " + price);

    shoppingCart.addItemToCart(id, name, price, 1);
    displayCart();
}

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
    console.log("carrito está ahora vacío");
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";

    output += "<thead>"
            + "<tr>"
                + "<th class='col1'>Producto</th>"
                + "<th class='col2'>Precio <small>/ cada</small></th>"
                + "<th class='col3'>Restar</th>"
                + "<th class='col4'>Cantidad</th>"
                + "<th class='col5'>Añadir</th>"
                + "<th class='col6'>Eliminar</th>"
                + "<th class='col7'>Precio <small>/ total de cantidad</small></th>"
            + "</tr>"
            + "</thead>";
            
    for (var i in cartArray) {
       /* output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "'>-</button>"
            + "<input type='number' class='item-count form-control' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "'>+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "'>X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";*/

            output += "<tr>"
                            + "<td class='col1'>" + cartArray[i].name + "</td>"
                            + "<td class='col2'>" + cartArray[i].price + " €</td>"
                            + "<td class='col3'><button id='menosUnidades' class='minus-item input-group-addon my-auto' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "'><i class='fas fa-minus'></i></button></td>"
                            + "<td class='col4'><input type='number' class='item-count styleInput' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'></td>"
                            + "<td class='col5'><button id='masUnidades' class='plus-item input-group-addon my-auto' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "'><i class='fas fa-plus'></i></button></td>"
                            + "<td class='col6'><button id='eliminarProd' class='delete-item my-auto' data-id='" + cartArray[i].id + "' data-name='" + cartArray[i].name + "'><i class='fas fa-trash-alt'></i></button></td>"
                            + "<td class='col7'>" + cartArray[i].total + " €</td>"
                    + "</tr>";
    }

    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var id = $(this).data('id');
    shoppingCart.removeItemFromCartAll(id);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    var id = $(this).data('id');
    shoppingCart.removeItemFromCart(id);
    //console.log(id);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    var id = $(this).data('id');
    shoppingCart.addItemToCart(id);
    //console.log(id);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var id = $(this).data('id');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(id, count);
    displayCart();
});

displayCart();


function finalizarEncomienda() {
    // if user is logged-in
    document.getElementById("productosCont").style.display = "none";
    document.getElementById("encomiendaButtons").style.display = "none";
    document.getElementById("mensaje").innerHTML += '<p id="todoCorrecto">Muchas gracias. Tu encomienda se ha realizado correctamente.</p>';
    document.getElementById("mensaje").innerHTML += '<a href="homepage.html" type="button" >Volver a la homepage</a>';
    console.log("Mandar datos para la base de datos de encomiendas. Encomienda finalizada.");

    // if user is not logged-in
    document.getElementById("mensaje").innerHTML += 'Si el usuario no está logged in, redireccionar el usuario para la página de login';
}

