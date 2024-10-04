const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Porque sim"
        },
        {
            texto: "Não",
            afirmação: "Porque Não"
        }
        ]
    },
    {
        enunciado: "você usa IA frequentemente",
        alternativas: [{
            texto: "Sim",
            afirmação: "Todos os dias"
        },
        {
            texto:"Não",
            afirmação:"Horrível"
        }
        ]
    },
    {
        enunciado: "Você usa IA nos estudos",
        alternativas: [{
            texto: "Sim",
            afirmação: "Nas provas e nas tarefas"
        },
        {
            texto: "Não",
            afirmação: "não compensa"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionadas){
    const afirmacoes = opcaoSelecionadas.afirmação;
    respostas = afirmação;
    posicao++;
    mostraPergunta();
}
function mostraPergunta(){
    caixaPergunta.textContent = "Daqui a 10 anos ";
}
mostraPergunta();
