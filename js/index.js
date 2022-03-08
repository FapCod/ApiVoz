const botongrabar= document.getElementById('botongrabar');
const botonparar= document.getElementById('botonparar');

let reconocimiento = window.webkitSpeechRecognition || window.SpeechRecognition ;
let recognition = new reconocimiento();
recognition.lang="es-Es";
recognition.continuous=true;

//resultado en pantalla 
const body = document.querySelector('body');


const dibujarpantalla= function(frase){
    let color="";
    //pintar segun color
    if(frase.trim()=="Rojo." || frase.trim()=="rojo") color="red"
    if(frase.trim()=="Verde." || frase.trim()=="verde") color="green"
    if(frase.trim()=="Amarillo." || frase.trim() =="amarillo") color="yellow"
    if(frase.trim()=="Azul." || frase.trim()=="azul") color="blue"
    if(frase.trim()=="Negro." || frase.trim()=="negro") color="black"
   
    if(frase.trim()!="Rojo." && frase.trim()!="rojo" && frase.trim()!="Verde." && frase.trim()!="verde" && frase.trim()!="Amarillo." && frase.trim() !="amarillo" && frase.trim()!="Azul." && frase.trim()!="azul" && frase.trim()!="Negro." && frase.trim()!="negro" ){ color="pink"}

    // guardar color en local storage
    localStorage.setItem("coloActual",color);
    body.style.backgroundColor=color;
    body.style.backgroundColor=window.innerWidth;
    body.style.backgroundColor=window.innerHeight;

}
// persistencia de datos con localStorage
window.addEventListener('DOMContentLoaded',(e)=>{
    let colorguardado= localStorage.getItem("coloActual");
    body.style.backgroundColor=colorguardado;
    body.style.backgroundColor=window.innerWidth;
    body.style.backgroundColor=window.innerHeight;
});

// evento 

recognition.onstart = function(){
    console.log("El microfono funciona correctamente");
}
recognition.onresult = function(evento){
    const resultado =evento.results;
    console.log(evento);
    const frase= resultado[resultado.length-1][0].transcript;
    console.log(frase);
    dibujarpantalla(frase);
}

botongrabar.addEventListener('click',(e)=>{
    recognition.start();
});
botonparar.addEventListener('click',(e)=>{
    recognition.abort();
    console.log("se apago el microfono");
});