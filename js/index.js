//Bienvenida

let nombreCompleto = prompt("Ingresa tu nombre y apellido, por favor:")
alert("Buenos días vamos a ver que bonificaciones tenemos disponibles según tu plan " + nombreCompleto)

//Aumentos en los meses siguientes
let aumentosAgosto= 1.24

function aumentos(planes) {
    planes *=aumentosAgosto
}

   
//Datos del plan

let numero = parseFloat(prompt("Ingresa el monto total de tu plan:"))
let porcentaje = parseFloat(prompt("Ingresa el % que queres tener(60, 70, 80):"))
let meses = alert("Te sumamos el aumento de Agosto, impuesto por ENACOM")

numero = aumentos(numero)

let resultado = (numero - (numero * porcentaje / 100))  
alert ("Tu plan va tener un costo total de: " + resultado )




























