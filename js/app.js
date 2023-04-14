let cronometro;

let segundos, minutos, horas;

inicializar();
activarBotones(false, true, true);

//addEventListener
document.getElementById('botonIniciar').addEventListener('click', init);
document.getElementById('botonPausar').addEventListener('click', pausar);
document.getElementById('botonDetener').addEventListener('click', detener);

//Funciones
function init() {
  cronometro = setInterval(function () {
    timer();
  }, 1000);
  activarBotones(true, false, false);
}

function timer() {
  segundos--;
  if (segundos < 0) {
    segundos = 59;
    minutos--;
  }
  if (minutos < 0) {
    minutos = 59;
    horas--;
  }
  if (horas < 0) {
    detener();
    alert('Tiempo agotado');
  }
  mostrarHora();
}
function mostrarHora() {
  document.getElementById('time').innerHTML = `${horas
    .toString()
    .padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos
    .toString()
    .padStart(2, '0')}`;
}

function detener() {
  clearInterval(cronometro);
  inicializar();
  activarBotones(false, true, true);
  document.getElementById('botonIniciar').innerHTML = 'Iniciar';
}

function inicializar() {
  segundos = 5;
  minutos = 0;
  horas = 0;
  mostrarHora();
}

function pausar() {
  clearInterval(cronometro);
  activarBotones(false, true, false);
  document.getElementById('botonIniciar').innerHTML = 'Continuar';
}

function cambiarColor(color) {
  let section = document.querySelector('.fs-1');
  console.log(section);
  section.className = 'fs-1 ' + color;
}

function activarBotones(estadoIniciar, estadoPausar, estadoDetener) {
  document.getElementById('botonIniciar').disabled = estadoIniciar;
  document.getElementById('botonPausar').disabled = estadoPausar;
  document.getElementById('botonDetener').disabled = estadoDetener;
}

let btnAzul = document.querySelector('#botonIniciar'),
  btnVerde = document.querySelector('#botonPausar'),
  btnFucsia = document.querySelector('#botonDetener');

console.log(btnAzul);

btnAzul.addEventListener('click', () => cambiarColor('textoAzul'));
btnVerde.addEventListener('click', () => cambiarColor('textoVerde'));
btnFucsia.addEventListener('click', () => cambiarColor('textoFucsia'));
