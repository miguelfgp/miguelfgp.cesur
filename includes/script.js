function canvas(src){
  ctx.fillStyle = window.getComputedStyle( document.body ,null).getPropertyValue('background-color'); 
  ctx.fillRect(0, 0, c.width, c.height);
  var img = new Image();
  img.src = src;
  ctx.fillStyle = "DarkCyan";

  //var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  if (img.width > c.width || img.height > c.height){
    var ratio = Math.min(c.width / img.width, c.height / img.height);
    var height = img.height * ratio;
    var width = img.width * ratio;

    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
  } else {
    ctx.fillRect(0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);
  }
  
}

function randomPallette(){

  let redColor = Math.floor(Math.random() * 50);
  let greenColor = Math.floor(Math.random() * 50);
  let blueColor = Math.floor(Math.random() * 50);

  let redColor2 = 255 - redColor;    
  let greenColor2 = 255 - greenColor;
  let blueColor2 = 255 - blueColor; 

  let color1 = 'rgb('+(redColor)+', '+(greenColor)+', '+(blueColor)+')'; 
  let color2 = 'rgb('+(redColor2)+', '+(greenColor2)+', '+(blueColor2)+')'; 

  document.documentElement.style.setProperty('--color1', color1);
  document.documentElement.style.setProperty('--color2', color2);
    
}

function visitCounter(){
  var n = localStorage.getItem('counter');

  if (n === null) {
      n = 0;
  }

  n++;

  localStorage.setItem("counter", n);

  var visitors = parseInt(document.getElementById("number").innerHTML);
  visitors += parseInt(localStorage.getItem("counter"));
  document.getElementById("number").innerHTML = visitors;
}

function helper(){
  document.addEventListener('keydown', function(event) {

    let code = event.code;
    let helpText = document.getElementById("help");
  
    if (code.slice(0,1) == 'F'){
        let num = code.slice(1);
        if (num == '1'){
          event.preventDefault();
          helpText.innerHTML = 'Aquí aparecerá el texto de ayuda que has pedido';
        } else {
        if (helpText.innerHTML == ''){
            helpText.innerHTML = 'Si quieres ayuda presiona F1 (presiona cualquier tecla para continuar)'
        } else {
            helpText.innerHTML = '';
        }
        }
    }
    });
}

function openCalc()
{
  if (window.confirm('¿Desea probar la calculadora?')){
    var ventana = open('Calculadora/', '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=467px,width=334px');
  }
  else{
    window.alert('No hay problema');
  }
}

function openMp3Player()
{
  if (window.confirm('¿Desea probar el reproductor MP3?')){
    var ventana = open('mp3player/', '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=520px,width=685px');
  }
  else{
    window.alert('No hay problema');
  }
}

function navegador(){
  
  let nombre = navigator.appName;
  let version = navigator.appVersion;

  document.getElementById('navegador').innerHTML = nombre + " " + version;
}

function aumentar(){

  elemento = document.getElementById('text');
  size = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));
  size++;
  document.getElementById('text').style.fontSize = size + 'px';

}

function disminuir(){
  elemento = document.getElementById('text');
  size = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));
  size--;
  document.getElementById('text').style.fontSize = size + 'px';
}

function hide(){

  elemento = document.getElementById('text');
  size = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));
  
  if (size > 0){
    document.getElementById('text').style.fontSize = 0 + 'px';
  }
}

function show(){
  elemento = document.getElementById('text');
  size = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));
  
  if (size == 0){
    document.getElementById('text').style.fontSize = 16 + 'px';
  }
}

function invertirColor(){

  colorFondo = window.getComputedStyle(document.body).backgroundColor;
  colorTexto = window.getComputedStyle(document.body).color;
  
  document.documentElement.style.setProperty('--color1', colorTexto);
  document.documentElement.style.setProperty('--color2', colorFondo);
}

function list(){

  let num;
  let lista = "<ul>";

  do {
      if (isNaN(num)) {
          num = prompt('Introduzca un número positivo o negativo');
      }
  } while (num != undefined && isNaN(num));

  if (num > 0){
      for (i = 0; i <= num; i++) {
          lista +=  '<li>' + i + '</li>';
      }
  } else if (num < 0){
      for (i = 0; i >= num; i--) {
          lista +=  '<li>' + i + '</li>';
      }
  } else {
    lista += '<li>' + num + '</li>';
  }

  lista += '</ul>';

  document.getElementById('list').innerHTML = lista
}

function operator(){

  let num1;
  let num2;
  let op;
  let operators = ['+', '-', '*', '/']

  do{
      num1 = prompt('Introduzca el primer número');
      if (isNaN(num1)){
          alert('Introduzca un número');
      }
  } while (num1 != undefined && isNaN(num1))

  if (num1 != undefined){
      do{
          op = prompt('Introduzca un operador \n' +
          'Para sumar: + \n' +
          'Para restar: - \n' +
          'Para multiplicar: * \n' +
          'Para dividir: /');
          
          if (op != undefined && !operators.includes(op)){
              alert('Introduzca un operador válido ');
          }
      } while (op != undefined && !operators.includes(op))
  }

  if (num1 != undefined && op != undefined){
      do{
          num2 = prompt('Introduzca el segundo número');
          if (isNaN(num2)){
              alert('Introduzca un número');
          }
      } while (num2 != undefined && isNaN(num2))
  }    
  
  if (num1 != undefined && op != undefined && num2 != undefined){
      document.getElementById('result').innerHTML = 'El resultado es: ' + eval(num1 + op + num2);
  }   

}

class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  toString(){
    return 'Nombre del alumno: ' + this.nombre + '. Edad: ' + this.edad;
  }
}

function crearAlumno(){
  
  do{
    nombre = prompt('Introduzca un nombre');
    if (!isNaN(nombre)){
        alert('Introduzca un nombre');
    }
  } while (nombre != undefined && !isNaN(nombre))

  do{
    edad = prompt('Introduzca una edad');
    if (isNaN(edad)){
        alert('Introduzca un número');
    }
  } while (edad != undefined && isNaN(edad))

  let alumno = new Alumno(nombre, edad);

  document.getElementById('data').innerHTML = alumno.toString()
}
  
function esPrimo(){
    let txt = "";
    let primo = true;
    let number = document.getElementById("primo").value

    if (document.getElementById("primo").validity.rangeUnderflow) {
      txt = "Número demasiado pequeño";
    } else if (document.getElementById("primo").validity.rangeOverflow) {
      txt = "Número demasiado grande";
    } else {

      i = 2
      while (primo && i < number){
        if (number % i == 0){
          primo = false;
        }
        i++;
      }

      if (primo){
        txt = "El número es primo";
      } else {
        txt = "El número no es primo";
      }
    }  
    document.getElementById("esprimo").innerHTML = txt;
  }

function regex(){
  let message = "";

  let pattern = /^[A-Z]{1}[A-Za-z]+(\s+[A-Z]{1}[A-Za-z]+){1,3}$/

  let regex = new RegExp(pattern);
  
  let text = document.getElementById("regex").value;

  let regCheck = regex.test(text);

  if (regCheck){
    message = "Nombre correcto";
  } else {
    message = "Formato incorrecto";
  }
  
  document.getElementById("cumpleregex").innerHTML = message
}

$(document).ready(function() {
  $( "select" ).change(function () {
      $('#result').empty();
      let value = "";
      $( "select option:selected").each(function() {
          value = $( this ).val();
      });
      let weatherRaw = getWeather(value);

      weatherRaw.then(function(weather) {
          let ul = document.createElement("ul");
          let li = '';
          let content = '';
          ul.setAttribute("id", "weather");

          for (attr in weather){
              li = document.createElement("li");
              content = document.createTextNode(attr + ': ' + weather[attr]);
              li.appendChild(content);
              ul.appendChild(li);
          }

          $( "#result" ).append(ul);
      });
  })
});

function getWeather(val){
  let url = 'https://api.openweathermap.org/data/2.5/weather?id=%s&appid=541bcc0e0611a32e3becec862a2525dc&units=metric';
  url = url.replace('%s', val);

  return fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          var weatherRaw = {}

          weatherRaw['humidity'] = data['main']['humidity'] + "%";
          weatherRaw['temp_max'] = data['main']['temp_max'] + " ºC";
          weatherRaw['temp_min'] = data['main']['temp_min'] + " ºC";
          weatherRaw['wind'] = data['wind']['speed'] + " m/s";
          weatherRaw['description'] = data['weather'][0]['description'];

          return weatherRaw;
      })
      .catch((err) => {
          console.log(err);
      })
}

$("#invertirJquery").click(function(){
  colorFondo = $("body").css("backgroundColor");
  colorTexto = $("body").css("color");

  $("body").css("backgroundColor", colorTexto);
  $("body").css("color", colorFondo);

  $(':root').css('--color1', colorTexto);
  $(':root').css('--color2', colorFondo);
})

$("#aumentarJquery").click(function(){

  tamanhoLetra = parseInt($("#text").css("font-size"));

  tamanhoLetra++;

  if (tamanhoLetra < 30){
      $("#text").css("font-size", tamanhoLetra);
  }

})

$("#disminuirJquery").click(function(){

  tamanhoLetra = parseInt($("#text").css("font-size"));

  tamanhoLetra--;

  if (tamanhoLetra > 15){
      $("#text").css("font-size", tamanhoLetra);
  }

})

function addNumber(){
  let number;
  let span;
  let lista;

  $(document).on('keypress', function (event) {

      number = parseInt(String.fromCharCode(event.which));
      
      if (number < 5){
          span = "#lista1";
      } else {
          span = "#lista2";
      }

      $(span).append(number);
      lista = Array.from($(span).text());
      $(span).html(lista.sort());

  });
}