//Ejercicio feedback presentado por Natalia Lovich Para la asignatura de 
//programación de SEAS

//Toma de elementos del DOM:
const paisaje = document.getElementById("paisaje");
const ardilla = document.getElementById("ardilla");
const ardilla2 = document.getElementById("ardilla2");
const listaVel = document.getElementById("lista");
const btnVolar = document.getElementById("btn-volar");
const btnParar = document.getElementById("btn-parar")

//Función para que la ardilla aterrice 
function parar() {
  //se inicia un intervalo 
  miIntervalo = setInterval(aterrizar, 300);
  //deshabilitar los botones de volar y parar hasta que haya aterrizado 
  btnVolar.disabled = true;
  btnParar.disabled = true;
  btnParar.textContent = "Aterrizando!"
  // función a realizar durante el intervalo
  function aterrizar(){
    //guarda en una variable los datos de pocición del elemento ardilla 
    let posicion = ardilla.getBoundingClientRect()
    //cuando la ardilla llega a la posicón especificada, se muestra la ardilla2
    //se esconde la primera ardilla, se pausa el paisaje, se termina el 
    //intervalo y se habilita el botón de volar
    if (posicion.right < 400 && posicion.right > 300){
    paisaje.style.animationPlayState = "paused";
    ardilla.style.animationPlayState = "paused";
    ardilla.style.visibility = "hidden";
    ardilla2.style.visibility = "visible";
    clearInterval(miIntervalo);
    btnVolar.disabled = false;
    btnParar.textContent = "Listo!"
    }
  }
}

//Función para que la ardilla vuele
function volar() {
  //se habilita el botón de aterrizar, se esconde ardilla2 y se ponen en marcha las animaciones
  btnParar.disabled = false;
  paisaje.style.animationPlayState = "running";
  ardilla.style.animationPlayState = "running";
  ardilla.style.visibility = "visible";
  ardilla2.style.visibility = "hidden";
  btnParar.textContent = "Aterrizar"
}

//Controles de velocidad 
listaVel.addEventListener("change",function(){
  //Variable que guarda el valor del "option" cuando cambia
  const velocidad = listaVel.options[listaVel.selectedIndex].value;
  //se modifica la duración de la animación, haciendola mas rápida dependiendo del valor
  if (velocidad == 1){
    paisaje.style.animationDuration = "75s"
  } else if (velocidad ==2){
    paisaje.style.animationDuration = "38s"
  }  else if (velocidad ==3){
    paisaje.style.animationDuration = "25s"
  } else if (velocidad ==4){
    paisaje.style.animationDuration = "10s"
   } else {
    paisaje.style.animationDuration = "4s"
   }
} )

