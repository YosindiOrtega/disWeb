function ValidarEdad(){

	var edad = document.getElementById("Edad").value;

	if (edad>=18) {
		alert("La persona es mayor de edad");
	}
	else{
		alert("La persona es menor de edad");
	}
}

function Sumar(){
	var primerNumero = parseInt(document.getElementById("OperandoA").value);
	var SegundoNumero = parseInt(document.getElementById("OperandoB").value);
	
	var resultado= primerNumero +SegundoNumero;
	alert(resultado);
}

function Restar(){
	var primerNumero = parseInt(document.getElementById("OperandoA").value);
	var SegundoNumero = parseInt(document.getElementById("OperandoB").value);
	
	var resultado= primerNumero -SegundoNumero;
	alert(resultado);
}

function Multiplicar(){
	var primerNumero = parseInt(document.getElementById("OperandoA").value);
	var SegundoNumero = parseInt(document.getElementById("OperandoB").value);
	
	var resultado= primerNumero *SegundoNumero;
	alert(resultado);
}

function Dividir(){
	var primerNumero = parseInt(document.getElementById("OperandoA").value);
	var SegundoNumero = parseInt(document.getElementById("OperandoB").value);
	
	var resultado= primerNumero /SegundoNumero;
	alert(resultado);
}