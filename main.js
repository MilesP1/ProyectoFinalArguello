/*Codigo Adivinanzas*/

function bienvenido() {
    alert("Bienvenido " + login);
    const bienv1 = prompt("¿Estás Preparado/a " + login + " ? (SI/NO)").toUpperCase();
    if (bienv1 === "SI") {
        alert("¡Excelente! ¡Comencemos!");
        mostrarAdivinanza();
    } else {
        alert("¡Anímate! ¡VAMOS A JUGAR IGUAL...");
      mostrarAdivinanza();
    }
}

let adivinanzaIndex = 0;
let resultados = [];


// Array con objetos adentro (Adivinanza y respuesta)

const respuestas = [
    { adivinanza: "Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...", respuesta: "tiempo" },
    { adivinanza: "Si me nombran, desaparezco. SOY EL...", respuesta: "silencio" },
    { adivinanza: "Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...", respuesta: "piano" },
    { adivinanza: "Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...", respuesta: "retrato" }
];

// DOM para traer los elementos, aplicar para controlar las adivinanzas
const adivinanzas00 = document.getElementById("adivtext");
const respuestas00 = document.getElementById("respAdiv");
const botonRespuestas = document.getElementById("btnRespuesta");
const listaResultados = document.getElementById("resultadosLista");

// borra input
function mostrarAdivinanza() {
    adivinanzas00.textContent = respuestas[adivinanzaIndex].adivinanza;
    respuestas00.value = '';
}


function verificarRespuesta() {
    const respuestaUsuario = respuestas00.value.toLowerCase();
    const respuestaCorrecta = respuestas[adivinanzaIndex].respuesta;
    
    if (respuestaUsuario === respuestaCorrecta) {
    resultados.push({ usuario: login, adivinanza: "Correcta" });
    alert("¡Respuesta Correcta!");
  } else {
    resultados.push({ usuario: login, adivinanza: "Incorrecta" });
    alert("Respuesta Incorrecta");
}

adivinanzaIndex++;

if (adivinanzaIndex < respuestas.length) {
    mostrarAdivinanza();
} else {
    alert("¡Juego terminado!");
    mostrarResultados();
}
}

function mostrarResultados() {
    listaResultados.innerHTML = '';
    resultados.forEach(resultado => {
        const li = document.createElement("li");
        li.textContent = `${resultado.usuario}: ${resultado.adivinanza}`;
        listaResultados.appendChild(li);
    });
}


botonRespuestas.addEventListener("click", verificarRespuesta);

const login = prompt("Ingrese Nombre y Apellido");
bienvenido();
console.log(resultados)


const storageUsuarios = JSON.stringify(resultados);

localStorage.setItem("resultados", storageUsuarios);



// let resultados = [ ]


// function bienvenido(){
    //     return login = prompt("Ingrese Nombre y Apellido")
    // }
    
    // function bienvenido2(){
        //     alert("Bienvenido " + login);
        
//     let bienv1 = prompt("¿Estas Preparado/a " + login + " ? (SI/NO)" ).toUpperCase()
//     if (bienv1 === "SI"){
//         alert ("Excelente. ¡Comencemos!")
//     }else{
//         alert ("¡Animate! VaMOS A JUGAR IGUAL...")
//     }
// }

// bienvenido()
// bienvenido2()

// let participante = {
//     nombre: login,
//     respuestasCorrectas: 0,
//     respuestasIncorrectas: 0,
//   };

// do {
//         //Adivinanza1
//         let resp1 = "TIEMPO"
//         let adiv1= prompt ("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...").toUpperCase();
        
//         if( adiv1 === resp1) {
//             alert("Respuesta Correcta");
//             participante.respuestasCorrectas++;
//         } else {
//             alert("Respuesta Incorrecta");
//             participante.respuestasIncorrectas++;
//         };
//         //Adivinanza2
//         let resp2 = "SILENCIO"
//         let adiv2= prompt ("Si me nombran, desaparezco. SOY EL...").toUpperCase();
        
//         if( adiv2 === resp2) {
//             alert("Respuesta Correcta");
//             participante.respuestasCorrectas++;
//         } else {
//             alert("Respuesta Incorrecta");
//             participante.respuestasIncorrectas++;
//         };
//         //Adivinanza3
//         let resp3 = "PIANO"
//         let adiv3= prompt ("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...").toUpperCase();
        
//         if( adiv3 === resp3) {
//             alert("Respuesta Correcta");
//             participante.respuestasCorrectas++;
//         } else {
//             alert("Respuesta Incorrecta");
//             participante.respuestasIncorrectas++;
//         };
        
//         //Adivinanza4
//         let resp4 = "RETRATO"
//         let adiv4= prompt ("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...").toUpperCase();
        
//         if( adiv4 === resp4) {
//             alert("Respuesta Correcta");
//             participante.respuestasCorrectas++;
//         } else {
//             alert("Respuesta Incorrecta");
//             participante.respuestasIncorrectas++;
//         };
//     } while(confirm("¿Quieres volver a intentarlo?"));

// resultados.push({ Participante: participante });

// let gameOver = alert ("Gracias por Participar");


// console.log(resultados);
