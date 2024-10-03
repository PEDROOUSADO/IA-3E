const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta de Inteligência Artificial",
        alternativa:[{
            texto:"Sim",
            afirmação:"Afirmação da Alternativa 1"
        },
        {
        texto:"não",
        afirmação:"Afirmação da alternativa "

        }
    ]
},    
        {
            enunciado:"Você usa IA no dia a dia ",
            alternativa:[{
                texto:"sim",
                afirmação:"Porque Sim"
            },
        {
            texto:"Não",
            afirmação:"Porque não"
        }   
            ] 
            
        
        }                                                                                                                                                                                                                                                                                                                                                                                                                   
    {
        enunciado:"Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]
let posicao = 0;
let perguntaAtual;


function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta. textContent = perguntaAtual.enunciado;
    mostraAlternativa();

}
function mostraAlternativa(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.creatElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", function(){
            posicao++;
        })
        caixaAlternativa.appendChild(botaoAlternativas);
    }

}
mostraPergunta();
