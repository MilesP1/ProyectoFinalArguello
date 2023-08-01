/*Codigo Adivinanzas*/

let resultados = []

function bienvenido(){
    
    return login = prompt("Ingrese Nombre y Apellido")
}

function bienvenido2(){

alert ("Bienvenido " + login)
    
let bienv1 = prompt("¿Estas Preparado/a " + login + "?").toUpperCase()
if (bienv1 === "SI"){
    alert ("Excelente. ¡Comencemos!")
}else{
    alert ("¡Animate! VaMOS A JUGAR IGUAL...")
}
}

while ( confirm != "cancelar"){
    
    do {
        bienvenido ()
        bienvenido2 ()
        //Adivinanza1
        let resp1 = "TIEMPO"
        let adiv1= prompt ("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...").toUpperCase();
        
        if( adiv1 != resp1) {
            alert("Respuesta Incorrecta");
            let adiv1= prompt ("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...").toUpperCase();
            resultados.push({ usuario1: login, adivinanza1: 'Incorrecta'});
        } else {
            (adiv1 === resp1 .includes)
            alert("Respuesta Correcta");
            resultados.push({ usuario1: login, adivinanza1: 'Correcta'});
        };
        //Adivinanza2
        let resp2 = "SILENCIO"
        let adiv2= prompt ("Si me nombran, desaparezco. SOY EL...").toUpperCase();
        
        if( adiv2 != resp2) {
            alert("Respuesta Incorrecta");
            let adiv1= prompt ("Si me nombran, desaparezco. SOY EL...").toUpperCase();
            resultados.push({ usuario1: login, adivinanza2: 'Incorrecta'});
        } else {
            (adiv2 == resp2)
            alert("Respuesta Correcta");
            resultados.push({ usuario1: login, adivinanza2: 'Correcta'});
        };
        //Adivinanza3
        let resp3 = "PIANO"
        let adiv3= prompt ("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...").toUpperCase();
        
        if( adiv3 != resp3) {
            alert("Respuesta Incorrecta");
            let adiv1= prompt ("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...").toUpperCase();
            resultados.push({ usuario1: login, adivinanza3: 'Incorrecta'});
        } else {
            (adiv3 == resp3)
            alert("Respuesta Correcta");
            resultados.push({ usuario1: login, adivinanza3: 'Correcta'});
        };
        
        //Adivinanza4
        let resp4 = "RETRATO"
        let adiv4= prompt ("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...").toUpperCase();
        
        if( adiv4 != resp4) {
            alert("Respuesta Incorrecta");
            let adiv1= prompt ("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...").toUpperCase();
            resultados.push({ usuario1: login, adivinanza4: 'Incorrecta'});
        } else {
            (adiv4 == resp4)
            alert("Respuesta Correcta");
            resultados.push({ usuario1: login, adivinanza4: 'Correcta'});
        };
        // "Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...").toUpperCase();

    } while(confirm("¿Quieres volver a intentarlo?"));
    break;
}

let gameOver = alert ("Gracias por Participar")

// Array resultado
console.log(resultados);


// En esta parte está el metodo de filtrafo ".filter", No supe aplicarlo, intente de varias maneras pero no entendi
// Intente que .filter encuentre todas las respuestas correctas y me las presente por console.log

// let cantRespCorr = resultados.filter((resultados) => adivinanza1.adivinanza1 === 'Correcta');
// console.log("Respuestas Correctas: ")
// console.log(cantRespCorr)