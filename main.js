/*Codigo Adivinanzas*/
let i = 0;
let resultados = JSON.parse(localStorage.getItem("resultados")) || [];
let usuarioActual= "";

// Array con objetos adentro (Adivinanza y respuesta)
const respuestas = [
    { adivinanza: "Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...", respuesta: "tiempo" },
    { adivinanza: "Si me nombran, desaparezco. SOY EL...", respuesta: "silencio" },
    { adivinanza: "Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...", respuesta: "piano" },
    { adivinanza: "Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...", respuesta: "retrato" },
    { adivinanza: "Juan tuvo 200 Paltas, Pedro va a tener 700 y Ana tiene 400. ¿Quién tiene mas Paltas?", respuesta: "ana"},
];

// DOM para traer los elementos, aplicar para controlar las adivinanzas
const adivinanzas00 = document.getElementById("adivtext");
const respuestas00 = document.getElementById("respAdiv");
const botonRespuestas = document.getElementById("btnRespuesta");
const listaResultados = document.getElementById("resultadosLista");
const loginBienv = document.getElementById("loginbienvenido");
const botonlogin = document.getElementById("btnlogin");
const botontemp = document.getElementById("iniciarTemp");
const usuarioNuevo = {usuario:"",respuestas: {correctas:0, incorrectas:0}};

function mostrarAdivinanza() {
    adivinanzas00.textContent = respuestas[i].adivinanza;
    respuestas00.value = '';
}

function mostrarResultados() {
    listaResultados.innerHTML = '';
    resultados.forEach(usuario => {
        const li = document.createElement("li");
    li.textContent = `${usuario.usuario} Correctas: ${usuarioNuevo.respuestas.correctas} Incorrectas: ${ usuarioNuevo.respuestas.incorrectas}`;
    listaResultados.appendChild(li);
    })
    localStorage.setItem("resultados", JSON.stringify(resultados));
}


function verificarRespuesta() {
    const respuestaUsuario = respuestas00.value.toLowerCase();
    const respuestaCorrecta = respuestas[i].respuesta;
    
    if (respuestaUsuario === respuestaCorrecta) {
        Swal.fire("Respuesta Correcta");
        usuarioNuevo.respuestas.correctas++;
    } else {
        Swal.fire("Respuesta Incorrecta");
        usuarioNuevo.respuestas.incorrectas++;
    }
    i++;
    if (i < respuestas.length) {
        mostrarAdivinanza();
    } else {
        Swal.fire("Game Over");
        resultados.push(usuarioNuevo);
    }
}

loginBienv.addEventListener("input", (e) =>{
    usuarioActual = (e.target.value);
})

botontemp.addEventListener("click", () =>{
    mostrarResultados();
})

botonlogin.addEventListener("click", () =>{
    usuarioNuevo.usuario = usuarioActual
    Swal.fire(
        "Gracias por Registrarte",
        mostrarAdivinanza(),
    )
})

botonRespuestas.addEventListener("click", verificarRespuesta);
console.log(resultados);