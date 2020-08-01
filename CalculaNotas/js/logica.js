function Promedio(ca1, ca2, ca3){
	var d = (ca1+ca2+ca3)/3;
	return d;
}
var total =0;
var totalApro=0;
var totalRepro=0;

function Agregar(){
	debugger; 
	var nombre = document.getElementById("Nombre").value;
	var ca1 = parseFloat(document.getElementById("Calificacion1").value);
	var ca2 = parseFloat(document.getElementById("Calificacion2").value);
	var ca3 = parseFloat(document.getElementById("Calificacion3").value);
	var estado ="";

	if (nombre == "" || isNaN(ca1) || isNaN(ca2) || isNaN(ca3)){
		alert("Por favor complete los campos de registro");
		return;
	}
	
	if (ca1>5||ca1<0 || ca2>5||ca2<0 || ca3>5||ca3<0 ) {
		alert("Valor inválido, debe estar entre 0 y 5");
		return;
	}
	var resultado =Promedio(ca1, ca2, ca3);
	if (resultado>=3.0) {
		estado = "Aprobado";
		totalApro++;
	}
	else{
		estado = "Reprobado";
		totalRepro++;
	}
	total = totalRepro + totalApro;

	var tabla = document.getElementById("Tablita");

	var fila = tabla.insertRow(1);

	var CeEstudiante = fila.insertCell(0);
	var CelCalif  = fila.insertCell(1);
	var CeCalificación2 = fila.insertCell(2);
	var CeCalificación3 = fila.insertCell(3);
	var CeCalificaciónFinal = fila.insertCell(4);
	var CeEstado= fila.insertCell(5);

	if (estado == "Reprobado") {
		CeEstado.style.color="red";
	}
	else{
		CeEstado.style.color="green";
	}
	CeEstudiante.innerHTML = nombre;
	CelCalif.innerHTML = ca1;
	CeCalificación2.innerHTML = ca2;
	CeCalificación3.innerHTML = ca3;
	CeCalificaciónFinal.innerHTML = resultado.toFixed(1);
	CeEstado.innerHTML= estado; 

	document.getElementById("LabelAprobados").innerHTML = "Estudiantes aprobados" + totalApro;
	document.getElementById("LabelReprobados").innerHTML = "Estudiantes reprobados" + totalRepro;
	document.getElementById("LabelTotal").innerHTML = "Total estudiantes" + total;
}