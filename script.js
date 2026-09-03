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
                afirmacao: "afirmacao"
            }
        ]
    }
];