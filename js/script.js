const btnNum = document.getElementsByClassName(".btn-num");
const btnCont = document.getElementsByClassName(".btn-cont");
const btnLimpar = document.getElementsByClassName(".btn-limpar");
const btnRes = document.getElementsByClassName(".btn-res");
const inputText = document.getElementsByClassName(".input-resultado");
let numeroAtual = '';
let numeros = []

function limparNum(inputResultado) {
    inputResultado.innerHTML = '';
    numeroAtual = '';
}
function soma(inputResultado, numeroDigitado) {
    numeros.push(numeroDigitado.split('+')[0])
    console.log(numeros)
    if (numeros.length > 1) {
        numeroAtual = Number(numeros[0]) + Number(numeros[1]);
        numeros = [];
        numeros.push(numeroAtual.toString());
    }
    console.log(numeros, numeroAtual)
    limparNum(inputResultado)
    console.log(numeros, numeroAtual)
}
function subtrai(inputResultado, numeroDigitado) {
    numeros.push(numeroDigitado.split('-')[0]);
    if (numeros.length > 1) {
        numeroAtual = Number(numeros[0]) - Number(numeros[1]);
        numeros = [];
        numeros.push(numeroAtual.toString());
    }
    console.log(numeros);
    limparNum(inputResultado);
}

function multiplica(inputResultado, numeroDigitado) {
    numeros.push(numeroDigitado.split('*')[0])
    if (numeros.length > 1) {
        numeroAtual = Number(numeros[0]) * Number(numeros[1]);
        numeros = [];
        numeros.push(numeroAtual.toString());
    }
    console.log(numeros)
    limparNum(inputResultado)
}

function dividir(inputResultado, numeroDigitado) {
    numeros.push(numeroDigitado.split('+')[0]);
    if (numeros.length > 1) {
        numeroAtual = Number(numeros[0]) / Number(numeros[1]);
        numeros = [];
        numeros.push(numeroAtual.toString());
    }
    console.log(numeros);
    limparNum(inputResultado);

}
function apagar(inputResultado) {
    limparNum(inputResultado);
    numeros = [];
}
function mostraResultado(inputResultado) {
    inputResultado.innerHTML = numeros[0];
}

capturaNum = () => {
    document.addEventListener("click", event => {
        const value = event.target.textContent;
        // Seleciona o P.
        const inputResultado = document.querySelector(".input-resultado");
        const numeroDigitado = numeroAtual + value;


        switch (value) {
            case "+":
                soma(inputResultado, numeroAtual, numeroDigitado);
                break;

            case "-":
                subtrai(inputResultado, numeroAtual, numeroDigitado);
                break;

            case '*':
                multiplica(inputResultado, numeroAtual, numeroDigitado);
                break;

            case '/':
                dividir(inputResultado, numeroAtual, numeroDigitado);
                return;

            case 'AC':
                apagar(inputResultado, numeroAtual);
                break;

            case '=':
                mostraResultado(inputResultado);
                break;

            case '(':
            case ')':
            case '%':
            case '.':
                break;

            default:
                // Insere o valor no Paragrafo
                numeroAtual = numeroDigitado;
                inputResultado.innerHTML = numeroAtual;
        }
    });
};
capturaNum()


/*
1- Criado teclado HTML
2- Funcao de click do botao
3- Mapear valor que esta vindo no click
4- Criar variavel global para salvar o resultado da operacao
5- Condicao para pegar apenas numeros
6- Condicao para os demais botoes
7- Array que salva os valores
8- Condicao para operacao - com a posicao 1 e 2 do Array
9- Usar switch
10- Exportar Operacoes para outro arquivo
*/




