var ubi = document.getElementById('ubicacion')
function resaltador(){
	ubi.style.borderColor = '#fa1e1e'
}
//Empieza el formulario
var nombre = document.getElementById('nombreyapellido')
var correo = document.getElementById('correo')
var consulta = document.getElementById('consulta')

function validarDatos(){
	nombre.addEventListener('input', validarNombre)
	correo.addEventListener('input', validarCorreo)
	consulta.addEventListener('input', validarConsulta)

	validarNombre()
	validarCorreo()
	validarConsulta()
}

function validarNombre(){
	if (nombre.value == ''){
		nombre.style.borderColor = '#fa1e1e';
		nombre.setCustomValidity('Debe escribir su nombre');
	}else{
		nombre.style.borderColor = '#08cf08';
		nombre.setCustomValidity('');
	}
}

function validarCorreo(){
	if (correo.value == ''){
		correo.style.borderColor = '#fa1e1e';
		correo.setCustomValidity('Debe escribir un correo electrónico válido');
	}else{
		correo.style.borderColor = '#08cf08';
		correo.setCustomValidity('');
	}
}

function validarConsulta(){
	if (consulta.value == ''){
		consulta.style.borderColor = '#fa1e1e';
		consulta.setCustomValidity('La consulta no puede estar vacía');
	}else{
		consulta.style.borderColor = '#08cf08';
		consulta.setCustomValidity('');
	}
}

window.addEventListener('load', validarDatos)