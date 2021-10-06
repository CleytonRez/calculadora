const btnNum = document.getElementsByClassName(".btn-num");
const btnCont = document.getElementsByClassName(".btn-cont");
const btnLimpar = document.getElementsByClassName(".btn-limpar");
const btnRes = document.getElementsByClassName(".btn-res");
const inputText = document.getElementsByClassName(".input-resultado");


capturaNum = () => {
    document.addEventListener("click", event => {
        const elemento = event.target;
        const value = event.target.textContent;
        // Seleciona o P.
        const inputResultado = document.querySelector(".input-resultado");
        // Insere o valor no Paragrafo
        inputResultado.innerHTML = value;

    });
};
capturaNum()




