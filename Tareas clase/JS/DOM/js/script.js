var colorFondo;
var colorTexto;
var elemento;
var tamanhoLetra;

function invertirColor(){
0
    colorFondo = window.getComputedStyle(document.body).backgroundColor;
    colorTexto = window.getComputedStyle(document.body).color;
    
    document.body.style.color = colorFondo;
    document.body.style.backgroundColor = colorTexto;
}

// Ejercicio 5. Tecla para invertir el color de frente y fondo.

function aumentar(){

    elemento = document.getElementById('demo');

    tamanhoLetra = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));

    tamanhoLetra++;

    if (tamanhoLetra < 30){
        document.getElementById('demo').style.fontSize = tamanhoLetra;
    }

}

// Ejercicio 6. Asignar margen en puntos.

function disminuir(){

    elemento = document.getElementById('demo');

    tamanhoLetra = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));

    tamanhoLetra--;

    if (tamanhoLetra > 15){
        document.getElementById('demo').style.fontSize = tamanhoLetra;
    }
}