/*Codigo Adivinanzas*/

let i = 0;
// Array con objetos adentro (Adivinanza y respuesta)
const respuestas = [
    { adivinanza: "¿Qué Pokemon aparece en el primer episodio luchando contra Nidorino?", respuesta: "gengar"},
    { adivinanza: "¿A qué Pokemon abandonan bajo la lluvia y es rescatado por Ash?", respuesta: "charmander" },
    { adivinanza: "El Equipo Rocket roba un Pokemon en Pueblo Newpark. ¿Cuál es?", respuesta: "totodile" },
    { adivinanza: "¿Qué Pokemon de Ash vence a Hariyama en el Gimnasio Dewford?", respuesta: "treecko" },
    { adivinanza: "¿Cuál es el primer Pokemon de James en la Region Hoenn?", respuesta: "cacnea"},
];
// DOM para traer los elementos, aplicar para controlar las adivinanzas
const adivinanzas00 = document.getElementById("adivtext");
const respuestas00 = document.getElementById("respAdiv");
const botonRespuestas = document.getElementById("btnRespuesta");
const listaResultados = document.getElementById("resultadosLista");
const loginBienv = document.getElementById("loginbienvenido");
const botonlogin = document.getElementById("btnlogin");
const buttonResultados = document.getElementById("btnResultados");
const botonpista = document.getElementById("btnpistas01");
const gengarDiv = document.getElementById("gengarDiv");
let renderizada = false;
let secondsRemaining = 60;
////temporizador
function updateTimer() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = secondsRemaining + " segundos";
  if (secondsRemaining === 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "Tiempo agotado";
  }
  secondsRemaining--;
}
// Actualizar las adivinanzas.
function mostrarAdivinanza() {
  adivinanzas00.textContent = respuestas[i].adivinanza;
  respuestas00.value = '';
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

function mostrarResultados() {
    listaResultados.innerHTML = "";
    const resultadoLocal = JSON.parse(localStorage.getItem("resultados"));
    if (resultadoLocal) {
      resultadoLocal.forEach((resultado) => {
        const li = document.createElement("li");
        li.textContent = `${resultado.usuario} -Respuestas | Correctas: ${resultado.correctas} Incorrectas: ${resultado.incorrectas}`;
        listaResultados.appendChild(li);
      });
    } else {
      listaResultados.innerHTML = "No hay resultados para mostrar";
    }
  }
  
function verificarRespuesta() {
  const respuestaUsuario = respuestas00.value.toLowerCase();
  const respuestaCorrecta = respuestas[i].respuesta;
  if (respuestaUsuario === respuestaCorrecta) {
    const resultadoLocal = JSON.parse(localStorage.getItem("resultados"));
    resultadoLocal[resultadoLocal.length - 1].correctas += 1;
    localStorage.setItem("resultados", JSON.stringify(resultadoLocal));
    Swal.fire("Respuesta Correcta");
  } else {
    const resultadoLocal = JSON.parse(localStorage.getItem("resultados"));
    console.log(resultadoLocal);
    resultadoLocal[resultadoLocal.length - 1].incorrectas += 1;
    localStorage.setItem("resultados", JSON.stringify(resultadoLocal));
    Swal.fire("Respuesta Incorrecta");
  }
  i++;
  if (i < 5) {
    mostrarAdivinanza();
  } else {
    Swal.fire("Game Over");
  }
}

botonlogin.addEventListener("click", () => {
  if (loginBienv.value != "") {
    const resultadoLocal = JSON.parse(localStorage.getItem("resultados"));
    if (resultadoLocal) {
      resultadoLocal.push({
        usuario: loginBienv.value,
        correctas: 0,
        incorrectas: 0,
      });
      localStorage.setItem("resultados", JSON.stringify(resultadoLocal));
    } else {
      const resultadoLocal = [
        {usuario: loginBienv.value, correctas: 0, incorrectas: 0,},
      ];
      localStorage.setItem("resultados", JSON.stringify(resultadoLocal));
    }
    Swal.fire("Gracias por Registrarte", mostrarAdivinanza());
  } else {
      Swal.fire("Ingrese su nombre");
    } 
  });

buttonResultados.addEventListener("click", () =>{
    mostrarResultados();
})
botonRespuestas.addEventListener("click", verificarRespuesta, updateTimer);

//Utilizando API en function (Proyecto Final)
function callPokemon() {
  let apiData = [];
  let charmander = "https://pokeapi.co/api/v2/pokemon/charmander";
  let gengar = "https://pokeapi.co/api/v2/pokemon/gengar";
  let cacnea ="https://pokeapi.co/api/v2/pokemon/cacnea";
  let treecko ="https://pokeapi.co/api/v2/pokemon/treecko";
  let totodile ="https://pokeapi.co/api/v2/pokemon/totodile";

  fetch(cacnea)
  .then((response) => response.json())
  .then((data) => {
    const cacneaData = [data.sprites.front_default, data.name];
    apiData.push(cacneaData);
  })
  .catch(() => console.error(exploto));

  fetch(totodile)
  .then((response) => response.json())
  .then((data) => {
    const totodileData = [data.sprites.front_default, data.name];
    apiData.push(totodileData);
  })
  .catch(() => console.error(exploto));

  fetch(treecko)
  .then((response) => response.json())
  .then((data) => {
    const treeckoData = [data.sprites.front_default, data.name];
    apiData.push(treeckoData);
  })
  .catch(() => console.error(exploto));

  fetch(charmander)
    .then((response) => response.json())
    .then((data) => {
      const charmanderData = [data.sprites.front_default, data.name];
      apiData.push(charmanderData);
    })
    .catch(() => console.error(exploto));

  fetch(gengar) //
    .then((response) => response.json())
    .then((data) => {
      const gengarData = [data.sprites.front_default, data.name];
      apiData.push(gengarData);

      if (apiData.length > 0 && !renderizada) {
        renderizada = true;

        apiData.map((p) => {
          const pista = document.createElement("div");
          pista.innerHTML = `<div class="card"><img src="${p[0]}"> <h3>${p[1]}</h3></div>`;
          gengarDiv.appendChild(pista);
        });
      }
    })
    .catch(() => console.error(exploto));
}

botonpista.addEventListener("click", callPokemon);