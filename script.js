const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

  enunciado: "Gabriel conseguiu seu primeiro emprego em uma agência de publicidade. Depois de algumas semanas, a empresa anunciou uma novidade: uma IA capaz de criar textos, imagens e analisar dados em poucos segundos. O chefe disse que a ferramenta mudaria a rotina de toda a equipe. No primeiro dia, seu chefe apresenta uma nova ferramenta de IA que consegue escrever textos, analisar dados, criar imagens e automatizar tarefas que antes eram feitas pelos funcionários.
Gabriel fica impressionado",
        alternativas: [
            {
                texto: "Quero aprender a usar antes que todo mundo. ",
                afirmacao: "afirmacao"
            },
            {
                texto: "Preciso entender se isso vai colocar meu emprego em risco.",
                afirmacao: "afirmacao"
            }
        ]
    {
        enunciado: "Alguns meses se passaram. A equipe começou a utilizar a IA para tarefas repetitivas, e o trabalho ficou mais rápido. Porém, dois funcionários foram transferidos para outras funções.Gabriel agora precisa decidir como agir diante dessa mudança.",
        alternativas: [
            {
                texto: "Aprende IA e tenta assumir novas responsabilidades.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Foca em habilidades que a tecnologia não consegue substituir facilmente.",
                afirmacao: "afirmacao"
            }
          
        ]
    },
    {
        enunciado: "Gabriel se tornou um dos funcionários que mais entendiam da nova tecnologia. Seu chefe então fez uma proposta: liderar um projeto que usaria IA para substituir parte do trabalho manual da equipe.A proposta poderia trazer uma promoção, mas também afetaria o trabalho de alguns colegas.",
        alternativas: [
            {
                texto: "Aceitar e ajudar a empresa a mudar",
                afirmacao: "afirmacao"
            },
            {
                texto: "Aceitar, mas tentar proteger os funcionários afetados.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "O projeto começou a funcionar. A IA aumentou a produtividade, mas começou a cometer erros em algumas campanhas. Um cliente recebeu uma informação incorreta e a equipe precisou corrigir o problema rapidamente.Gabriel percebeu que confiar totalmente na tecnologia poderia ser perigoso.O que ele sugere?",
        alternativas: [
            {
                texto: "Manter a IA, mas exigir revisão humana",
                afirmacao: "afirmacao"
            },
            {
                texto: "Reduzir o uso da IA até que os problemas sejam resolvidos.",
                afirmacao: "afirmacao"
            }
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();

(const alternativa of perguntaAtual.alternativas)

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}