const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalculador');
const parrafo = document.querySelector('#result');

form.addEventListener('submit', sumarInput);

function sumarInput() {
    const calculo = input1.value + input2.value;
    parrafo.innerText = "tu operacion es: " + calculo;

}

