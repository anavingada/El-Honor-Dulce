var x = "";
var y = "";
var i;
fetch('./information/historialLista.txt')
    .then(res => res.json())
    .then(data => {
        for (i in data) {
            
            y += '<div class="card pedido">'
                + '<div class="card-header headPedido">'
                    + '<div class="mb-0">'
                        + '<button class="btn btn-link pedidoFecha collapsed" data-toggle="collapse" data-target="#ID' + data[i].ID + '" aria-expanded="false" aria-controls="">Pedido de ' + data[i].date + '</button>'
                    + '</div>'
                + '</div>'
                + '<div id="ID' + data[i].ID + '" class="collapse" aria-labelledby="" data-parent="#accordion">' 
                    + '<div class="card-body productosPedidos">' 
                        + '<p>Productos pedidos:</p>';
                        for (j in data[i].productos) {
                            y += '<ul>'
                                +'<li>' + data[i].productos[j] +'</li>'
                            + '</ul>';
                        }
                        y += '<p>Precio total: '+ data[i].precioTotal + ' €</p>'
                    + '</div>'
                + '</div>'
            + '</div>';
        }
        document.getElementById("accordion").innerHTML += y;
        console.log(data)

    })
    .catch(err => console.error(err));



/*<div class="card faq">
    <div class="card-header headFaq">
		<div class="mb-0">
			<button class="btn btn-link question collapsed" data-toggle="collapse" data-target="#este" aria-expanded="false" aria-controls="">
				Pedido de "FECHA"
			</button>
		</div>
	</div>
	<div id="este" class="collapse" aria-labelledby="" data-parent="#accordion">
		<div class="card-body answer">
			<p>Nombre de productos pedidos lista</p>
				<ul>
					<li>prod1</li>
					<li>prod2</li>
					<li>prod3</li>
					<li>prod4</li>
					<li>prod5d</li>
				</ul>
			    <p>Precio pagado</p>
			</div>
		</div>
    </div>*/
    
/*var x = "";
var y = "";
var i;
fetch('./information/historialLista.txt')
  .then(res => res.json())
  .then(data => {
    for (i in data) {
      y += '<div class="card faq"><div class="card-header headFaq"><div class="mb-0"><button class="btn btn-link question collapsed" data-toggle="collapse" data-target="#ID' + data[i].ID + '" aria-expanded="false" aria-controls="">' + data[i].date + '</button></div></div><div id="ID' + data[i].ID + '" class="collapse" aria-labelledby="" data-parent="#accordion"><div class="card-body answer">' + data[i].precioTotal + '</div></div></div>';
    }
    document.getElementById("accordion").innerHTML += y;
    console.log(data)

  })
  .catch(err => console.error(err));*/