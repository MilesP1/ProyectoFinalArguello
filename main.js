/*Codigo Adivinanzas*/

/*RESPUESTAS*/

let resp1 = "TIEMPO"
let resp2 = "SILENCIO"
let resp3 = "PIANO"
let resp4 = "RETRATO"
let resp5 = "SOMBRA"

/*BIENVENIDO */

function bienvenido(){

    let loginN1 = prompt("Ingrese Nombre")
    let loginLn1 = prompt("Ingrese Apellido")
    alert ("Bienvenido " + loginN1 + " " + loginLn1)

    let bienv1 = prompt("¿Estas Preparado/a " + loginN1 + " " + loginLn1 + "?").toUpperCase()
    if (bienv1 === "SI"){
        alert ("Excelente. ¡Comencemos!")
    }else{
        alert ("¡Animate! Va a ser divertido...")
    }
}

function volveraComenzar(){
    let continuar = prompt("¿Queres volver a empezar?").toUpperCase()
    if (continuar ==="SI") {

    }else{
        alert ("Ingrese no o si")
        continuar = prompt("¿Queres volver a empezar?").toUpperCase()

    }
}

bienvenido ()

while ( volveraComenzar != "NO"|| volveraComenzar == "SI"){

/* Adivinanza 1*/

let adiv1= prompt ("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...");

while(adiv1 != resp1 ){
    switch(adiv1.toUpperCase()){
        case "TIEMPO":
            alert("Correcto");
            break;    
       default:
            alert("Incorrecto")
            adiv1= prompt("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...");
        continue;
    }
}

 /* Adivinanza 2*/

let adiv2= prompt ("Si me nombran, desaparezco. SOY EL...");

while(adiv2 != resp2 ){
    switch(adiv2.toUpperCase()){
        case "SILENCIO":
            alert("Correcto");
        break;
        default:
            alert("Incorrecto")
            adiv2= prompt("Si me nombran, desaparezco. SOY EL...");
        continue;
    }
}

/* Adivinanza 3 */

let adiv3= prompt ("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...");

while(adiv3 != resp3 ){
    switch(adiv3.toUpperCase()){
        case "PIANO":
            alert("Correcto");
        break;
        default:
            alert("Incorrecto");
            adiv3= prompt("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...");
        continue;
        }
}

/* Adivinanza 4 */

let adiv4= prompt ("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...");

while(adiv4 != resp4 ){
    switch(adiv4.toUpperCase()){
        case "RETRATO":
            alert("Correcto");
            break;
        default:
            alert("Incorrecto");
            adiv4= prompt("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...");
        continue;
    }
}
volveraComenzar()
}



let gameOver = alert ("Gracias por Participar, Tus respuestas Correctas Fueron: 4")

// Array resultado

const jugador1 = [
{
    nombre: "Milo",
    apellido: "Ibumilo",
    respuestasCorrectas: "1",
},
{
    nombre: "Dylan",
    apellido: "Revolver",
    respuestasCorrectas: "4",
},
{
    nombre: "Marian",
    apellido: "Stratomarian",
    respuestasCorrectas: "3",
},
{
    nombre: "Guille Guille",
    apellido: "Lotoplus",
    respuestasCorrectas: "3",
},
];

for (let i = 0; i < jugador1.length; i++) {
    console.log(jugador1[i]);
}

let ganador = jugador1.find(respuestasCorrectas => respuestasCorrectas > 3);
console.log(ganador)



// for (let datos in jugador1 ) {
//     console.log(datos, jugador1 [datos])
// }