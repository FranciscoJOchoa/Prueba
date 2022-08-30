let nombreCompleto = prompt("Ingresa tu nombre y apellido, por favor:")
let calculadora = confirm ("Buenos días vamos a ver que bonificaciones tenemos disponibles según tu plan "  +  nombreCompleto)
let plan = prompt("¿Cual es el código de tu plan aci25; aci26; aci27?")

if (plan === "aci25") {
    confirm("Tenes disponible un 60% de bonificación, ¿lo queres?")

}
if (plan === "aci26") {
        confirm("Tenes disponible un 70% de bonificación, ¿lo queres?")
}
if (plan === "aci27") {
    confirm("Tenes disponible un 80% de bonificación, ¿lo queres?")
}   

function calcular(plan, boni1) {
    confirm("Resultado", plan * boni1)
}

// ACA ESTOY PERDIDO, SI EL CLIENTE CONFIRMA EL % DE DESCUENTO COMO HAGO PARA QUE LE SALGA DESPUES EL VALOR REAL DEL PLAN
// EN VARIABLE LE PUSE LOS PRECIOS DE LOS PLANES.




