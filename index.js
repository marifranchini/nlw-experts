const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de back-end",
        "Uma linguagem de marcação para criar páginas web",
        "Uma linguagem de programação de front-end",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Para verificar o tipo de um valor",
        "Para declarar uma variável",
        "Para criar uma função",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor constante",
        "Um tipo de dado",
        "Um contêiner para armazenar dados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Para criar um elemento HTML",
        "Para adicionar um ouvinte de eventos a um elemento HTML",
        "Para remover um elemento HTML",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um conjunto de instruções para realizar uma tarefa específica",
        "Uma variável",
        "Um operador aritmético",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de comentar código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      respostas: [
        "Uma declaração condicional",
        "Um tipo de dado",
        "Uma estrutura de repetição",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
      respostas: [
        "'6'",
        "6",
        "33",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma array em JavaScript?",
      respostas: [
        "Uma função",
        "Um tipo de dado",
        "Uma estrutura de dados que armazena uma coleção de elementos",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta //o sinal == compara a resposta independente do tipo, se number ou string.
     
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  
  
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  