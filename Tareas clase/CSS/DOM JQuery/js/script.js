var colorFondo;
var colorTexto;
var elemento;
var tamanhoLetra;

$("#invertir").click(function(){
    colorFondo = $("body").css("backgroundColor");
    colorTexto = $("body").css("color");

    $("body").css("backgroundColor", colorTexto);
    $("body").css("color", colorFondo);
})

$("#aumentar").click(function(){

    tamanhoLetra = parseInt($("#demo").css("font-size"));

    tamanhoLetra++;

    if (tamanhoLetra < 30){
        $("#demo").css("font-size", tamanhoLetra);
    }

})

$("#disminuir").click(function(){

    tamanhoLetra = parseInt($("#demo").css("font-size"));

    tamanhoLetra--;

    if (tamanhoLetra > 15){
        $("#demo").css("font-size", tamanhoLetra);
    }

})