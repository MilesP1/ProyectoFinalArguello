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