/* El Horno Dulce - Panadería y Repostería 
Javascript - Login */

// Función para mostrar la password
function showPassword() {
    var x = document.getElementById("userPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
 }

// Declaración de variables
const form = document.getElementById('formLogin');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

// Función para validación del formulario on click submit
form.addEventListener('submit', function (event) {
	if (form.checkValidity() === false) {
		showErrorEmail();
		showErrorPassword();
		event.preventDefault();
		event.stopPropagation();
		console.log("No se puede submeter el formulario");
	}
});

// Funciones para validación o no de los inputs del formulario

// Función de validación del input Email
userEmail.addEventListener('input', function (event) {
	if (!userEmail.validity.valid) {
		showErrorEmail();
	} else if (userEmail.validity.valid) {
		console.log("email correcto");
		$('#userEmail').css('border', '2px solid green');
		document.getElementById('validateEmail').innerHTML = "Formato de email correcto.";
		document.getElementById('validateEmail').style.color = 'green';
	}
});

// Función de validación del input Password
userPassword.addEventListener('input', function (event) {
	if (!userPassword.validity.valid) {
		showErrorPassword();
	} else if (userPassword.validity.valid) {
		console.log("password correcta");
		$('#userPassword').css('border', '2px solid green');
		document.getElementById('validatePass').innerHTML = "Formato de password correcto.";
		document.getElementById('validatePass').style.color = 'green';
	}
});

// Funciones de error de cada input del formulario

// Función de error del input Email
function showErrorEmail() {
	if (userEmail.validity.valueMissing) {
		console.log("email vacío");
		$('#userEmail').css('border', '2px solid red');
		document.getElementById('validateEmail').innerHTML = "Tienes que insertar tu correo.";
		document.getElementById('validateEmail').style.color = 'red';
	} else if (userEmail.validity.patternMismatch) {
		console.log("email incorrecto");
		$('#userEmail').css('border', '2px solid red');
		document.getElementById('validateEmail').innerHTML = "Formato de email incorrecto.";
		document.getElementById('validateEmail').style.color = 'red';
	}
};

// Función de error del input Password
function showErrorPassword() {
	if (userPassword.validity.valueMissing) {
		console.log("password vacía");
		$('#userPassword').css('border', '2px solid red');
		document.getElementById('validatePass').innerHTML = "Tienes que insertar tu password.";
		document.getElementById('validatePass').style.color = 'red';
	} else if (userPassword.validity.patternMismatch) {
		console.log("password incorrecta");
		$('#userPassword').css('border', '2px solid red');
		document.getElementById('validatePass').innerHTML = "Formato de password incorrecto.";
		document.getElementById('validatePass').style.color = 'red';
	}
};