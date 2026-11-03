
import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const telaInicial = document.querySelector(".tela-inicial");
const telaJogo = document.querySelector(".tela-jogo");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {

    historiaFinal += aleatorio(opcaoSelecionada.afirmacao) + " ";

    if (opcaoSelecionada.proxima !== undefined) {

        atual = opcaoSelecionada.proxima;
        mostraPergunta();

    } else {

        mostraResultado();

    }
}

function mostraResultado() {

    telaJogo.style.display = "none";

    caixaPerguntas.textContent = `Em 2049, ${nome}`;

    textoResultado.textContent = historiaFinal;

    caixaResultado.classList.add("mostrar");
}

function iniciarJogo() {

    telaInicial.style.display = "none";

    telaJogo.style.display = "block";

    atual = 0;
    historiaFinal = "";

    mostraPergunta();
}

function jogaNovamente() {

    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    telaInicial.style.display = "block";

    telaJogo.style.display = "none";
}

function substituiNome() {

    for (const pergunta of perguntas) {

        pergunta.enunciado = pergunta.enunciado.replace(/Gabriel/g, nome);

    }
}

botaoIniciar.addEventListener("click", iniciarJogo);

botaoJogarNovamente.addEventListener("click", jogaNovamente);

substituiNome();
