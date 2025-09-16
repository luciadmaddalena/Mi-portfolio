//Texto para la animacion
const textoCompleto = "Hola! Bienvenidos a mi portfolio. Soy Lucía, una apasionada desarrolladora frontend en formación. Aquí comparto mis proyectos y certificaciones mientras avanzo en mi carrera tecnológica.";

//elemento donde se muestra el texto
const elementoTexto = document.getElementById('texto');

//variables de control
let indice = 0;
let intervalo;
const velocidad = 50; //ms por caracter(ajustar)

//funcion para escribir el texto
function escribir() {
    if (indice < textoCompleto.length) {
        //anadir el siguiente caracter
        elementoTexto.innerHTML = textoCompleto.substring(0, indice + 1) + '<span class="cursor"></span>';
        indice++;
    } else {
        //detener cuando se complete el texto y quitar cursor
        clearInterval(intervalo);
        elementoTexto.innerHTML = textoCompleto;
    }
}

//iniciar la animacion al cargar la pagina
window.onload = function() {
    intervalo = setInterval(escribir, velocidad);
};
