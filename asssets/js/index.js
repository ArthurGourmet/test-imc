function Meuscop(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")
    function recebeEventoForm (evento){
    evento.preventDefault();
    const peso= form.querySelector(".test1");
    const altura= form.querySelector(".test2");
    const pesoNumerico = Number(peso.value.replace(',', '.'));
    const alturaNumerica = Number(altura.value.replace(',', '.'));

    let imc = pesoNumerico / (alturaNumerica * alturaNumerica);
    imc = imc.toFixed(1);

    if (imc <= 18.5) {
        resultado.innerHTML = `<h2>Resultado:</h2><p>seu imc é ${imc} é voce esta <b>abaixo do peso</b> </p>`;
    } else if (imc >= 18.9 && imc <= 24.9) {
        resultado.innerHTML = `<h2>Resultado:</h2><p>seu imc é ${imc} <b>peso normal</b> </p>`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `<h2>Resultado:</h2><p>seu imc é ${imc} <b>sobre peso</b> </p>`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<h2>Resultado:</h2><p>seu imc é ${imc}  <b>obesidade grau 1</b></p>`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<h2>Resultado:</h2><p>seu imc é ${imc} <b>obesidade grau 2</b></p>`;
    } else if (imc >= 40) {
        resultado.innerHTML = `<h2>Resultado:</h2><p>seu imc é ${imc} <b>obesidade grau 3</b></p>`;
    } else {
        resultado.innerHTML = `<h2>ERRO</h2><p>voce nao digitou um numero valido</p>`;
    }
}

form.addEventListener("submit", recebeEventoForm);
}

Meuscop();
