/*Codigo Adivinanzas*/


let adivinanzaIndex = 0;
let resultados = [];


// Array con objetos adentro (Adivinanza y respuesta)

const respuestas = [
    { adivinanza: "Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...", respuesta: "tiempo" },
    { adivinanza: "Si me nombran, desaparezco. SOY EL...", respuesta: "silencio" },
    { adivinanza: "Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...", respuesta: "piano" },
    { adivinanza: "Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...", respuesta: "retrato" },
    { adivinanza: "Juan tuvo 200 Paltas, Pedro va a tener 700 y Ana tiene 400. ¿Quién tiene mas Paltas?", respuesta: "ana"}
];

// DOM para traer los elementos, aplicar para controlar las adivinanzas

const adivinanzas00 = document.getElementById("adivtext");
const respuestas00 = document.getElementById("respAdiv");
const botonRespuestas = document.getElementById("btnRespuesta");
const listaResultados = document.getElementById("resultadosLista");
const loginBienv = document.getElementById("loginbienvenido");
// const loginBienv2 = loginBienv.value.toLowerCase();
const botonlogin = document.getElementById("btnlogin");

// borra input

botonlogin.addEventListener("click", () =>{

    Swal.fire(
        "Gracias por Registrarte",
        "Empecemos",
        mostrarAdivinanza()
    )
})


function mostrarAdivinanza() {
    const respuestaUsuario = respuestas00.value.toLowerCase();
    const respuestaCorrecta = respuestas[adivinanzaIndex].respuesta;
    
    if (respuestaUsuario === respuestaCorrecta) {
        resultados.push({ usuario: loginBienv.value, adivinanza: "Correcta" });
        Swal.fire("Respuesta Correcta")
    } else {
        resultados.push({ usuario: loginBienv.value , adivinanza: "Incorrecta" });
        Swal.fire("Respuesta Incorrecta")
    }
    adivinanzas00.textContent = respuestas[adivinanzaIndex].adivinanza;
    respuestas00.value = '';
}


function verificarRespuesta() {

    adivinanzaIndex++;

    if (adivinanzaIndex < respuestas.length) {
        mostrarAdivinanza();
    } else {
        Swal.fire("Game Over")
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
    localStorage.setItem("resultados", JSON.stringify(resultados));
}


botonRespuestas.addEventListener("click", verificarRespuesta);

// const login = prompt("Ingrese Nombre y Apellido");
// bienvenido();

console.log(resultados) 




