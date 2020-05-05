/* El Horno Dulce - Panadería y Repostería 
Javascript - Perfil del usuario */

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
const form = document.getElementById('formPerfil');
const userNombre = document.getElementById('userNombre');
const userApellido = document.getElementById('userApellido');
const userTelefono = document.getElementById('userTelefono');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

// Función para validación del formulario on click submit
function updatePerfil() {
	if (form.checkValidity() === false) {
		showErrorNombre();
		showErrorApellido();
		showErrorTelefono();
		showErrorEmail();
		showErrorPassword();
		event.preventDefault();
		event.stopPropagation();
		console.log("No se puede submeter el formulario");
	} else {
		console.log("Actualizamos el perfil");
	}
}

// Funciones para validación o no de los inputs del formulario

// Función de validación del input Nombre
userNombre.addEventListener('input', function (event) {
	if (!userNombre.validity.valid) {
		showErrorNombre();
	} else if (userNombre.validity.valid) {
		console.log("nombre correcto");
		document.getElementById('validateNombre').innerHTML = "";
	}
});

// Función de validación del input Apellido
userApellido.addEventListener('input', function (event) {
	if (!userApellido.validity.valid) {
		showErrorApellido();
	} else if (userApellido.validity.valid) {
		console.log("apellido correcto");
		document.getElementById('validateApellido').innerHTML = "";
	}
});

// Función de validación del input Teléfono
userTelefono.addEventListener('input', function (event) {
	if (!userTelefono.validity.valid) {
		showErrorTelefono();
	} else if (userTelefono.validity.valid) {
		console.log("teléfono correcto");
		document.getElementById('validateTelefono').innerHTML = "";
	}
});

// Función de validación del input Email
userEmail.addEventListener('input', function (event) {
	if (!userEmail.validity.valid) {
		showErrorEmail();
	} else if (userEmail.validity.valid) {
		console.log("email correcto");
		document.getElementById('validateEmail').innerHTML = "";
	}
});

// Función de validación del input Password
userPassword.addEventListener('input', function (event) {
	if (!userPassword.validity.valid) {
		showErrorPassword();
	} else if (userPassword.validity.valid) {
		console.log("password correcta");
		document.getElementById('validatePassword').innerHTML = "";
	}
});

// Funciones de error de cada input del formulario

// Función de error del input Nombre
function showErrorNombre() {
	if (userNombre.validity.valueMissing) {
		console.log("Nombre vacío");
		document.getElementById('validateNombre').innerHTML = "Tienes que insertar tu nombre.";
		document.getElementById('validateNombre').style.color = 'red';
	} else if (userNombre.validity.patternMismatch) {
		console.log("nombre incorrecto");
		document.getElementById('validateNombre').innerHTML = "Tienes que insertar por lo menos 2 letras";
		document.getElementById('validateNombre').style.color = 'red';
	}
};

// Función de error del input Apellido
function showErrorApellido() {
	if (userApellido.validity.valueMissing) {
		console.log("Apellido vacío");
		document.getElementById('validateApellido').innerHTML = "Tienes que insertar tu apellido.";
		document.getElementById('validateApellido').style.color = 'red';
	} else if (userApellido.validity.patternMismatch) {
		console.log("Apellido incorrecto");
		document.getElementById('validateApellido').innerHTML = "Tienes que insertar por lo menos 2 letras";
		document.getElementById('validateApellido').style.color = 'red';
	}
};

// Función de error del input Teléfono
function showErrorTelefono() {
	if (userTelefono.validity.valueMissing) {
		console.log("Teléfono vacío");
		document.getElementById('validateTelefono').innerHTML = "Tienes que insertar tu teléfono.";
		document.getElementById('validateTelefono').style.color = 'red';
	} else if (userTelefono.validity.patternMismatch) {
		console.log("Teléfono incorrecto");
		document.getElementById('validateTelefono').innerHTML = "Insertar 9 dígitos en total, empezando por 6 o 9.";
		document.getElementById('validateTelefono').style.color = 'red';
	}
};

// Función de error del input Email
function showErrorEmail() {
	if (userEmail.validity.valueMissing) {
		console.log("Email vacío");
		document.getElementById('validateEmail').innerHTML = "Tienes que insertar tu correo.";
		document.getElementById('validateEmail').style.color = 'red';
	} else if (userEmail.validity.patternMismatch) {
		console.log("Email incorrecto");
		document.getElementById('validateEmail').innerHTML = "Formato de email incorrecto.";
		document.getElementById('validateEmail').style.color = 'red';
	}
};

// Función de error del input Password
function showErrorPassword() {
	if (userPassword.validity.valueMissing) {
		console.log("password vacía");
		document.getElementById('validatePassword').innerHTML = "Tienes que insertar tu password.";
		document.getElementById('validatePassword').style.color = 'red';
	} else if (userPassword.validity.patternMismatch) {
		console.log("password incorrecta");
		document.getElementById('validatePassword').innerHTML = "Inserta un password de mínimo 8 caracteres, 1 minúscula, 1 mayúscula y un número.";
		document.getElementById('validatePassword').style.color = 'red';
	}
};

function LogOutSession() {
	console.log("fazemos o logout");
}
function deleteAccount() {
	console.log("borramos la cuenta del usuario");
}
