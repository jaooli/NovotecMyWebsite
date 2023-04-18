function calcular() {
    var numero1 = document.getElementByClassName('input1').value;
    var numero2 = document.getElementByClassName('input2').value;

    var soma = numero1 + numero2;
    var subtrair = numero1 - numero2;
    var divisao = numero1 / numero2;
    var multiplicacao = numero1 * numero2;

    document.getElementById(soma).innerHTML = soma;
    document.getElementById(subtrair).innerHTML = subtrair;
    document.getElementById(divisao).innerHTML = divisao;
    document.getElementById(multiplicacao).innerHTML = multiplicacao;

}

calcular()