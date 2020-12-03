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

function openCalc()
{
  if (window.confirm('¿Desea probar la calculadora?')){
    var ventana = open('../Calculadora/index.html', '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=467px,width=334px');
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

  display = window.getComputedStyle(document.body).display;    

  if (display == 'block'){
    document.getElementById('text').style.display = 'none';
  }

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
          if (op != undefined && op != '+' && op != '-' && op != '*' && op != '/'){
              alert('Introduzca un operador válido');
          }
      } while (op != undefined && (op != '+' && op != '-' && op != '*' && op != '/'))
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
  
