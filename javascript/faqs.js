var x = "";
var y = "";
var i;
var hash = 1;
fetch('./information/faqsLista.txt')
.then(res => res.json())
.then(data => {
    for (i in data) {
        console.log('hash-->' + hash);
        y += '<div class="card faq"><div class="card-header headFaq"><div class="mb-0"><button class="btn btn-link question collapsed" data-toggle="collapse" data-target="#id' + hash + '" aria-expanded="false" aria-controls="">' + data[i].question + '</button></div></div><div id="id' + hash + '" class="collapse" aria-labelledby="" data-parent="#accordion"><div class="card-body answer">' + data[i].answer + '</div></div></div>';
        hash++;
      }
      document.getElementById("accordion").innerHTML = y ;
  console.log(data)

})
.catch(err => console.error(err));

//'<div class="card faq"><div class="card-header headFaq"><div class="mb-0"><button class="btn btn-link question collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">' + data[i].question + '</button></div></div><div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion"><div class="card-body answer">' + data[i].answer + '</div></div></div>'

/*<div class="card faq">
            <div class="card-header headFaq" id="headingThree">
              <div class="mb-0">
                <button class="btn btn-link question collapsed" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
                  Aceptan pedidos urgentes?
                </button>
              </div>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body answer">
                Depende de la encomienda. Lo que aconsejamos es que nos contactes por email, teléfono o por mensaje para
                que podamos analizar más rapidamente tu pedido. Puedes encontrar todos nuestros contactos <a href="contacto.html">aquí</a>.
              </div>
            </div>
          </div>*/