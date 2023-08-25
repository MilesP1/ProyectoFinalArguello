/*Codigo Adivinanzas*/
let i = 0;

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
    listaResultados.innerHTML = "";
    const resultadoLocal = JSON.parse(localStorage.getItem("resultados"));
    if (resultadoLocal) {
      resultadoLocal.forEach((resultado) => {
        const li = document.createElement("li");
        li.textContent = `${resultado.usuario} -> Respuestas Correctas: ${resultado.correctas} Respuestas Incorrectas: ${resultado.incorrectas}`;
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
      i = 0;
    }
  }

botontemp.addEventListener("click", () =>{
    mostrarResultados();
})

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
          {
            usuario: loginBienv.value,
            correctas: 0,
            incorrectas: 0,
          },
        ];
        localStorage.setItem("resultados", JSON.stringify(resultadoLocal));
      }
  
      Swal.fire("Gracias por Registrarte", mostrarAdivinanza());
    } else {
      Swal.fire("coloque su nombre");
      mostrarAdivinanza()
    } 
  });
botonRespuestas.addEventListener("click", verificarRespuesta);
console.log(resultados);