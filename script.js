    const caixaPrinciapal = document.querySelector('.caixa-princiapal');
    const caixaPergunta = document.querySelector('.caixa-pergunta');
    const caixaAlternativa = document.querySelector('.caixa-alternativa');
    const caixaResultado = document.querySelector('.caixa-resultado');

    const pergunta =[
        {
            enunciado:"Pergunta 1",
            alternativa:["alternativa 1","Alternativa 2"]
        },
        {
            enunciado:"Pergunta 2",
            alternativa:["alternativa 1","Alternativa 2"]
        },
        {
            enunciado:"Pergunta 3",
            alternativa:["alternativa 1","Alternativa 2"]
        }
    ]
    let posicao = 0;
    let perguntaAtual;

    function mostraPergunta(){
        
    }