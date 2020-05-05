/* El Horno Dulce - Panadería y Repostería 
Javascript - Contacto */

// Declaración de variables
const form = document.getElementById('formContacto');
const userNombre = document.getElementById('userNombre');
const userApellido = document.getElementById('userApellido');
const userTelefono = document.getElementById('userTelefono');
const userEmail = document.getElementById('userEmail');
const userMensaje = document.getElementById('userMensaje');

// Función para validación del formulario on click submit
form.addEventListener('submit', function (event) {
	if (form.checkValidity() === false) {
        showErrorNombre();
        showErrorApellido();
        showErrorTelefono();
        showErrorEmail();
        showErrorMensaje();
		event.preventDefault();
		event.stopPropagation();
		console.log("No se puede submeter el formulario");
	}
});

// Funciones para validación o no de los inputs del formulario

// Función de validación del input Nombre
userNombre.addEventListener('input', function (event) {
	if (!userNombre.validity.valid) {
		showErrorNombre();
	} else if (userNombre.validity.valid) {
		console.log("nombre correcto");
        $('#userNombre').css('border', '2px solid green');
        document.getElementById('validateNombre').innerHTML = "";
	}
});

// Función de validación del input Apellido
userApellido.addEventListener('input', function (event) {
	if (!userApellido.validity.valid) {
		showErrorApellido();
	} else if (userApellido.validity.valid) {
		console.log("apellido correcto");
        $('#userApellido').css('border', '2px solid green');
        document.getElementById('validateApellido').innerHTML = "";
	}
});

// Función de validación del input Teléfono
userTelefono.addEventListener('input', function (event) {
	if (!userTelefono.validity.valid) {
		showErrorTelefono();
	} else if (userTelefono.validity.valid) {
		console.log("teléfono correcto");
        $('#userTelefono').css('border', '2px solid green');;
        document.getElementById('validateTelefono').innerHTML = "";
	}
});

// Función de validación del input Email
userEmail.addEventListener('input', function (event) {
	if (!userEmail.validity.valid) {
		showErrorEmail();
	} else if (userEmail.validity.valid) {
		console.log("email correcto");
        $('#userEmail').css('border', '2px solid green');
        document.getElementById('validateEmail').innerHTML = "";
	}
});

// Función de validación del input Mensaje
userMensaje.addEventListener('input', function (event) {
	if (!userMensaje.validity.valid) {
		showErrorMensaje();
	} else if (userMensaje.validity.valid) {
		console.log("mensaje correcto");
        $('#userMensaje').css('border', '2px solid green');
        document.getElementById('validateMensaje').innerHTML = "";
	}
});

// Funciones de error de cada input del formulario

// Función de error del input Nombre
function showErrorNombre() {
	if (userNombre.validity.valueMissing) {
		console.log("Nombre vacío");
		$('#userNombre').css('border', '2px solid red');
		document.getElementById('validateNombre').innerHTML = "Tienes que insertar tu nombre.";
		document.getElementById('validateNombre').style.color = 'red';
	} else if (userNombre.validity.patternMismatch) {
		console.log("nombre incorrecto");
		$('#userNombre').css('border', '2px solid red');
		document.getElementById('validateNombre').innerHTML = "Tienes que insertar por lo menos 2 letras";
		document.getElementById('validateNombre').style.color = 'red';
	}
};

// Función de error del input Apellido
function showErrorApellido() {
	if (userApellido.validity.valueMissing) {
		console.log("Apellido vacío");
		$('#userApellido').css('border', '2px solid red');
		document.getElementById('validateApellido').innerHTML = "Tienes que insertar tu apellido.";
		document.getElementById('validateApellido').style.color = 'red';
	} else if (userApellido.validity.patternMismatch) {
		console.log("Apellido incorrecto");
		$('#userApellido').css('border', '2px solid red');
		document.getElementById('validateApellido').innerHTML = "Tienes que insertar por lo menos 2 letras";
		document.getElementById('validateApellido').style.color = 'red';
	}
};

// Función de error del input Teléfono
function showErrorTelefono() {
	if (userTelefono.validity.valueMissing) {
		console.log("Teléfono vacío");
		$('#userTelefono').css('border', '2px solid red');
		document.getElementById('validateTelefono').innerHTML = "Tienes que insertar tu teléfono.";
		document.getElementById('validateTelefono').style.color = 'red';
	} else if (userTelefono.validity.patternMismatch) {
		console.log("Teléfono incorrecto");
		$('#userTelefono').css('border', '2px solid red');
		document.getElementById('validateTelefono').innerHTML = "Insertar 9 dígitos en total, empezando por 6 o 9.";
		document.getElementById('validateTelefono').style.color = 'red';
	}
};

// Función de error del input Email
function showErrorEmail() {
	if (userEmail.validity.valueMissing) {
		console.log("Email vacío");
		$('#userEmail').css('border', '2px solid red');
		document.getElementById('validateEmail').innerHTML = "Tienes que insertar tu correo.";
		document.getElementById('validateEmail').style.color = 'red';
	} else if (userEmail.validity.patternMismatch) {
		console.log("Email incorrecto");
		$('#userEmail').css('border', '2px solid red');
		document.getElementById('validateEmail').innerHTML = "Formato de email incorrecto.";
		document.getElementById('validateEmail').style.color = 'red';
	}
};

// Función de error del input Mensaje
function showErrorMensaje() {
	if (userMensaje.validity.valueMissing) {
		console.log("Mensaje vacío");
		$('#userMensaje').css('border', '2px solid red');
		document.getElementById('validateMensaje').innerHTML = "Tienes que escribir tu mensaje.";
		document.getElementById('validateMensaje').style.color = 'red';
	} else if (userMensaje.validity.patternMismatch) {
		console.log("Mensaje incorrecto");
		$('#userMensaje').css('border', '2px solid red');
		document.getElementById('validateMensaje').innerHTML = "Escribe algo más por favor.";
		document.getElementById('validateMensaje').style.color = 'red';
	}
};