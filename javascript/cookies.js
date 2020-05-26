// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
// From https://codepen.io/ahelja/pen/jqgGvQ
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
 
function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','popupCookies');
    div.setAttribute('class', 'container-fluid overlay');
    div.innerHTML += '<div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 maxWidth700 pop_container">'
                        +'<div class="col-12 col-md-10 mx-auto marginVert20">'
                            +'<img id="imgCookies" src="images/website_cookies.png" alt="Cookies en el website" />'
                        +'</div>'
                        +'<div class="col-12 col-md-10 mx-auto marginVert20">'
                            +'<p class="bannerText"><b>¡Bienvenido!</b></p>'
                            +'<p class="bannerText">Nuestra página utiliza cookies. Al continuar navegando, nos das permiso para guardar cookies. Para más información consulta nuestra <a href="politica-de-privacidad.html" rel="nofollow" title="Política de Privacidad">política de privacidad</a> y nuestra <a href="politica-de-cookies.html" rel="nofollow" title="Política de Cookies">política de cookies</a>. </p>'
                            +'<p class="bannerText">Muchas gracias.</p>'
                            +'<div class="col-12 col-md-8 mx-auto popCloseCont">'
                                +'<a class="popClose" type="button" href="javascript:void(0);" onclick="removeMe()">Cerrar X</a>'
                            +'</div>'
                        +'</div>'
                    +'</div>';
    // Be advised the Close Banner 'X' link requires jQuery
     
    // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
     
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
}
 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
//window.onload = function(){
$(window).on('load', function() {
    if(checkCookie(window.cookieName) != window.cookieValue){
        //createDiv();
        setTimeout(createDiv, 3000);
    }
});


function removeMe(){
	var element = document.getElementById('popupCookies');
	element.parentNode.removeChild(element);
}