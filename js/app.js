let cronometro;
let segundos, minutos, horas;
let primeraVez = true;
activarBotones(false, true, true);
mostrarSelect(true);

//addEventListener
window.addEventListener('DOMContentLoaded', select);

document.getElementById('botonIniciar').addEventListener('click', init);
document.getElementById('botonPausar').addEventListener('click', pausar);
document.getElementById('botonDetener').addEventListener('click', detener);

//Funciones
function select() {
  const selectHoras = document.getElementById('selectHoras');
  optionChoose(selectHoras, 99);
  const selectMinutos = document.getElementById('selectMinutos');
  optionChoose(selectMinutos, 59);
  const selectSegundos = document.getElementById('selectSegundos');
  optionChoose(selectSegundos, 59);
}

function optionChoose(selectId, numero) {
  const option00 = document.createElement('option');
  option00.selected = true;
  option00.value = '00';
  option00.innerHTML = '00';
  selectId.appendChild(option00);

  for (let i = 1; i <= numero; i++) {
    const option = document.createElement('option');
    option00.selected = true;
    option.value = i.toString().padStart(2, '0');
    option.innerHTML = i.toString().padStart(2, '0');
    selectId.appendChild(option);
  }
}

function init() {
  if (
    document.getElementById('selectHoras').value === '00' &&
    document.getElementById('selectMinutos').value === '00' &&
    document.getElementById('selectSegundos').value === '00'
  ) {
    mostrarModal00();
    return;
  } else {
    activarBotones(true, false, false);
    mostrarSelect(false);
    if (primeraVez) {
      inicializar();
    }
    cronometro = setInterval(function () {
      timer();
    }, 1000);
  }
}

function timer() {
  mostrarHora();
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
    mostrarModal();
    volveraCeroSelect();
  }
}
function mostrarHora() {
  document.getElementById('time').style.display = 'block';
  document.getElementById('time').innerHTML = `${horas
    .toString()
    .padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos
    .toString()
    .padStart(2, '0')}`;
}

function detener() {
  clearInterval(cronometro);
  volveraCeroSelect();
  inicializar();
  activarBotones(false, true, true);
  document.getElementById('botonIniciar').innerHTML = 'Iniciar';
  document.getElementById('time').style.display = 'none';
  mostrarSelect(true);
  primeraVez = true;
}

function inicializar() {
  segundos = 0;
  minutos = 0;
  horas = 0;

  segundos = document.getElementById('selectSegundos').value;
  minutos = document.getElementById('selectMinutos').value;
  horas = document.getElementById('selectHoras').value;

  primeraVez = false;
}

function pausar() {
  clearInterval(cronometro);
  activarBotones(false, true, false);
  document.getElementById('botonIniciar').innerHTML = 'Continuar';
}

function cambiarColor(color) {
  let section = document.querySelector('.fs-1');
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

btnAzul.addEventListener('click', () => cambiarColor('textoAzul'));
btnVerde.addEventListener('click', () => cambiarColor('textoVerde'));
btnFucsia.addEventListener('click', () => cambiarColor('textoFucsia'));

function volveraCeroSelect() {
  document.getElementById('selectSegundos').value = '00';
  document.getElementById('selectMinutos').value = '00';
  document.getElementById('selectHoras').value = '00';
}

function mostrarSelect(estadoSelect) {
  if (estadoSelect) {
    document.getElementById('selectHMS').classList.remove('d-none');
  } else {
    document.getElementById('selectHMS').classList.add('d-none');
  }
}

function mostrarModal() {
  let myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
  let modalBody = document.getElementById('modal-body');
  modalBody.className = 'bg-danger text-white p-2 m-1';
  modalBody.innerHTML = 'Tiempo Agotado!!!';
}

function mostrarModal00() {
  let myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
  let modalBody = document.getElementById('modal-body');
  modalBody.className = 'bg-danger text-white p-2 m-1';
  modalBody.innerHTML = 'Debes ingresar valores mayores a 0';
}
