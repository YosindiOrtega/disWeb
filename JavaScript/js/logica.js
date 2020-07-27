
function OcultarTitulo() {
	document.getElementById("Titulo").style.display = "none";
}

function MostrarTitulo() {
	document.getElementById("Titulo").style.display ="block";
}

function CambiarTitulo() {
	document.getElementById("Titulo").innerHTML = "Bienvenido";
}

function AgregarColorFondo(){
	document.body.style.backgroundColor ="turquoise";
}

function MostrarAlerta(){
	alert("Alertaaaaaaaaaaaaaaaa!")
}

function AgregarUsuario(){
	var tabla =document.getElementById("TablaUsuarios");
	var fila =tabla.insertRow(1);

	var celdaUsuario = fila.insertCell(0);
	var celdaCorreo = fila.insertCell(1);
	var celdaEdad = fila.insertCell(2);

	var usuario= document.getElementById("Usuario").value;
	var correo = document.getElementById("Correo").value;
	var edad = document.getElementById("Edad").value;

	celdaUsuario.innerHTML= usuario;
	celdaCorreo.innerHTML = correo;
	celdaEdad.innerHTML = edad;
}