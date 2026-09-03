const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Gabriel conseguiu seu primeiro emprego em uma agência de publicidade. Depois de algumas semanas, a empresa anunciou uma novidade: uma IA capaz de criar textos, imagens e analisar dados em poucos segundos. O chefe disse que a ferramenta mudaria a rotina de toda a equipe. No primeiro dia, seu chefe apresenta uma nova ferramenta de IA que consegue escrever textos, analisar dados, criar imagens e automatizar tarefas que antes eram feitas pelos funcionários. Gabriel fica impressionado.",
        alternativas: [
            {
                texto: "Quero aprender a usar antes que todo mundo.",
                afirmacao: "Gabriel decidiu se antecipar e aprender a usar a ferramenta logo no início."
            },
            {
                texto: "Preciso entender se isso vai colocar meu emprego em risco.",
                afirmacao: "Gabriel ficou cauteloso e preferiu analisar os impactos da IA na sua carreira."
            }
        ]
    },
    {
        enunciado: "Alguns meses se passaram. A equipe começou a utilizar a IA para tarefas repetitivas, e o trabalho ficou mais rápido. Porém, dois funcionários foram transferidos para outras funções. Gabriel agora precisa decidir como agir diante dessa mudança.",
        alternativas: [
            {
                texto: "Aprende IA e tenta assumir novas responsabilidades.",
                afirmacao: "Ele buscou se especializar na tecnologia para assumir novas responsabilidades."
            },
            {
                texto: "Foca em habilidades que a tecnologia não consegue substituir facilmente.",
                afirmacao: "Ele focou em aprimorar suas habilidades humanas e criativas no trabalho."
            }
        ]
    },
    {
        enunciado: "Gabriel se tornou um dos funcionários que mais entendiam da nova tecnologia. Seu chefe então fez uma proposta: liderar um projeto que usaria IA para substituir parte do trabalho manual da equipe. A proposta poderia trazer uma promoção, mas também afetaria o trabalho de alguns colegas.",
        alternativas: [
            {
                texto: "Aceitar e ajudar a empresa a mudar.",
                afirmacao: "Aceitou a liderança do projeto focado na inovação e na mudança da empresa."
            },
            {
                texto: "Aceitar, mas tentar proteger os funcionários afetados.",
                afirmacao: "Aceitou a liderança buscando equilibrar a inovação com a proteção da sua equipe."
            }
        ]
    },
    {
        enunciado: "O projeto começou a funcionar. A IA aumentou a produtividade, mas começou a cometer erros em algumas campanhas. Um cliente recebeu uma informação incorreta e a equipe precisou corrigir o problema rapidamente. Gabriel percebeu que confiar totalmente na tecnologia poderia ser perigoso. O que ele sugere?",
        alternativas: [
            {
                texto: "Manter a IA, mas exigir revisão humana.",
                afirmacao: "Defendeu que a tecnologia deve sempre passar por supervisão humana."
            },
            {
                texto: "Reduzir o uso da IA até que os problemas sejam resolvidos.",
                afirmacao: "Sugeriu desacelerar o uso da automação até garantir a precisão dos dados."
            }
        ]
    }
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        exibeResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa os botões anteriores
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function exibeResultado() {
    caixaPerguntas.textContent = "Resumo da sua jornada:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();