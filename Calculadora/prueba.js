var numero1 = document.getElementById("primerNumero");
var operador = document.getElementById('operador');
var numero2 = document.getElementById('segundoNumero');
var resultadoB = document.getElementById('resultado');
var resultado = 1;

function mate() {
    operador = operador.value;
    numero1 = numero1.value;
    numero2 = numero2.value;
    resultado = parseInt(resultado);
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1-numero2;
            break;
        case 'x':
            resultado = numero1*numero2;
            break;
        case '%':
            resultado = numero1/numero2;
            break;
        default:
            alert('no funciona')
            break;
    }
    localStorage.setItem("resultado", resultado);
}
resultadoB.addEventListener('click',mate)
