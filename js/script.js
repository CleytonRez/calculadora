// Importa pela classe os elementos do HTML. Criando Variaveis dos botoes.
const btnNum = document.getElementsByClassName(".btn-num");
const btnCont = document.getElementsByClassName(".btn-cont");
const btnLimpar = document.getElementsByClassName(".btn-limpar");
const btnRes = document.getElementsByClassName(".btn-res");
const inputText = document.getElementsByClassName(".input-resultado");
// Criacao de uma variavel que zera o input da conta.
let numeroAtual = '';
// Criacao de uma lista para armazenar os numeros digitados.
let numeros = []

// Funcao que limpa e zera o input.
function limparNum(inputResultado) {
    inputResultado.innerHTML = '';
    numeroAtual = '';
}

// Funcao que soma os numeros digitados.
function soma(inputResultado, numeroDigitado) {

    //A string digitado é adicionado a lista de numeros.
    numeros.push(numeroDigitado.split('+')[0])

    //Se uma string for digitado a conta é feita (Condicao)
    if (numeros.length > 1) {

        // As strings digitadas sao convertidos para numeros e somados.
        numeroAtual = Number(numeros[0]) + Number(numeros[1]);

        // A lista "numeros" é zerada.
        numeros = [];

        // O resultado é adicionado a lista e convertido para string.
        numeros.push(numeroAtual.toString());
    }

    // A funcao "limparNum" é chamado.
    limparNum(inputResultado)
}

// Funcao que subtrai os numeros digitados.
function subtrai(inputResultado, numeroDigitado) {

    //A string digitado é adicionado a lista de numeros.
    numeros.push(numeroDigitado.split('-')[0]);

    //Se uma string for digitado a conta é feita (Condicao)
    if (numeros.length > 1) {

        // As strings digitadas sao convertidos para numeros e subtraidos.
        numeroAtual = Number(numeros[0]) - Number(numeros[1]);

        // A lista "numeros" é zerada.
        numeros = [];

        // O resultado é adicionado a lista e convertido para string.
        numeros.push(numeroAtual.toString());
    }

    // A funcao "limparNum" é chamado.
    limparNum(inputResultado);
}

// Funcao que multiplica os numeros digitados.
function multiplica(inputResultado, numeroDigitado) {

    //A string digitado é adicionado a lista de numeros.
    numeros.push(numeroDigitado.split('*')[0])

    //Se uma string for digitado a conta é feita (Condicao)
    if (numeros.length > 1) {

        // As strings digitadas sao convertidos para numeros e multiplicados.
        numeroAtual = Number(numeros[0]) * Number(numeros[1]);

        // A lista "numeros" é zerada.
        numeros = [];

        // O resultado é adicionado a lista e convertido para string.
        numeros.push(numeroAtual.toString());
    }

    // A funcao "limparNum" é chamado.
    limparNum(inputResultado)
}

// Funcao que dividi os numeros digitados.
function dividir(inputResultado, numeroDigitado) {

    //A string digitado é adicionado a lista de numeros.
    numeros.push(numeroDigitado.split('/')[0]);

    //Se uma string for digitado a conta é feita (Condicao)
    if (numeros.length > 1) {

        // As strings digitadas sao convertidos para numeros e divididos.
        numeroAtual = Number(numeros[0]) / Number(numeros[1]);

        // A lista "numeros" é zerada.
        numeros = [];

        // O resultado é adicionado a lista e convertido para string.
        numeros.push(numeroAtual.toString());
    }

    // A funcao "limparNum" é chamado.
    limparNum(inputResultado);

}

// Funcao que apaga o input e zera a lista "numeros".
function apagar(inputResultado) {
    limparNum(inputResultado);
    numeros = [];
}

// Funcao que mostra o resultado da conta.
function mostraResultado(inputResultado) {
    // O item que ocupa a posicao 0 da lista "numeros" é externalizado e mostra o resultado ao usuario.
    inputResultado.innerHTML = numeros[0];
}

// Funcao que mapeia o botao que foi precionado.
capturaNum = () => {
    // Mapeia-se onde o usuario clica com o mouse e retorna um valor.
    document.addEventListener("click", event => {
        const value = event.target.textContent;
        // Seleciona o P.
        const inputResultado = document.querySelector(".input-resultado");
        // Variavel que junta o valor digitado recentemente com o anterior.
        const numeroDigitado = numeroAtual + value;

        // Switch que faz as contas.
        switch (value) {

            // No caso de ser pressionado o botão "+" a funcao "soma" é chamada.
            case "+":
                soma(inputResultado, numeroAtual, numeroDigitado);
                break;

            // No caso de ser pressionado o botão "-" a funcao "subtrai" é chamada.
            case "-":
                subtrai(inputResultado, numeroAtual, numeroDigitado);
                break;

            // No caso de ser pressionado o botão "*" a funcao "multiplica" é chamada.
            case '*':
                multiplica(inputResultado, numeroAtual, numeroDigitado);
                break;

            // No caso de ser pressionado o botão "/" a funcao "dividir" é chamada.
            case '/':
                dividir(inputResultado, numeroAtual, numeroDigitado);
                return;

            // No caso de ser pressionado o botão "AC" a funcao "apagar" é chamada.
            case 'AC':
                apagar(inputResultado, numeroAtual);
                break;

            // No caso de ser pressionado o botão "=" a funcao "mostraResultado" é chamada.
            case '=':
                mostraResultado(inputResultado);
                break;

            // No caso dos demais botoes serem pressionados nada acontece.
            case '(':
            case ')':
            case '%':
            case '.':
                break;

            default:
                // Insere o valor no Paragrafo.
                numeroAtual = numeroDigitado;
                inputResultado.innerHTML = numeroAtual;
        }
    });
};

// Funcao "capturaNum" é chamado.
capturaNum()


/* Lista de referencia do que é preciso fazer e a ordem do mesmo.

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