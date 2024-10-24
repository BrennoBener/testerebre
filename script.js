// Desafios aleatórios
const desafios = [
    "Vire 1 copo cheio de refrigerante",
    "Grite um elogio para toda a equipe do MAGE",
    "Diga o nome de 5 produtos que foram vendidos no MAGE.",
    "Imite um integrante do grupo.",
    "Grite um elogio para uma pessoa especifica",
    "Vá até uma pessoa que esteja conversando com outra, e faça um elogio a uma das duas",
    "Faça uma dupla e juntos grite um elogio para todo o grupo"
];

// Perguntas do quiz
const perguntas = [
    {
        pergunta: "Qual o nome da cafeteria que participou do MAGE?",
        opcoes: ["Café ECIA", "KEOPI", "KE OTA", "Kero K-FÉ"],
        resposta: "KEOPI"
    },
    {
        pergunta: "Qual dupla de animes está impressa nos ingressos do MAGE?",
        opcoes: ["Naruto e Bleach", "One Piece e Berserker", "One Piece, Naruto e Kimetsu no Yaiba", "Dragonball e Kirby"],
        resposta: "One Piece, Naruto e Kimetsu no Yaiba"
    },
    {
        pergunta: "Qual a dupla mais louca do MAGE?",
        opcoes: ["Alisson e Paulo", "Ahri e Renata", "Eric e Brenno", "David e Wyarley"],
        resposta: "Eric e Brenno"
    },
    {
        pergunta: "Qual frase foi proferida por Daniel, Brenno e Wyarley ao ver o desastre das tendas?",
        opcoes: ["Eita temos um problema", "Vish...a tenda!", "CARALHO A TENDA VOANDO!", "LOUCURA!!!"],
        resposta: "CARALHO A TENDA VOANDO!"
    },
    {
        pergunta: "Quantos redbulls foram distribuídos durante a ação do MAGE?",
        opcoes: ["menos de 200", "entre 200 e 300", "350 a 400", "mais de 8000!!!"],
        resposta: "350 a 400"
    },
    {
        pergunta: "Quantos dias Paulo e Brenno ficaram sem dormir durante a organização do MAGE?",
        opcoes: ["1", "2", "3", "4"],
        resposta: "2"
    },
    {
        pergunta: "Qual o nome do protagonista de One Piece?",
        opcoes: ["Luffy","Jiren", "Goku", "Zoro"],
        resposta: "Luffy"
    },
    {
        pergunta: "Como ficou o pé do Eric no final do evento?",
        opcoes: ["Muito limpo", "Normal ele tava de bota", "Igual a lagoa de Maracanaú", "Normal ele tava de tenis"],
        resposta: "Igual a lagoa de Maracanaú"
    },
    {
        pergunta: "Qual o verdadeiro nome do Charles?",
        opcoes: ["Kakashi - O Proprio", "Kakashi - O Gostoso", "Kakashi Delas", "Kakashi da Caravana"],
        resposta: "Kakashi da Caravana"
    },
    {
        pergunta: "Quem negou água para alguem da organização?",
        opcoes: ["Paulo", "Eric", "Brenno", "Alisson"],
        resposta: "Brenno"
    },
    {
        pergunta: "A Ahri fez quantos bolos e dividiu NENHUM COM A EQUIPE?",
        opcoes: ["Não importa a quantidade, a amizade sim", "5 bolos", "1 bolo", "nenhum"],
        resposta: "Não importa a quantidade, a amizade sim"
    },
    {
        pergunta: "O David se sentiu poderoso quando:",
        opcoes: ["Usou a bolsinha dos ingressos", "Usou mascara de hospital", "Quando almoçou", "Quando chegou no evento"],
        resposta: "Usou a bolsinha dos ingressos"
    },
    {
        pergunta: "O Eric fica com raiva se falar mal de quem?",
        opcoes: ["Do Naruto", "Do Paulo", "Do MEU PREFEITO!!!", "Do Luffy"],
        resposta: "Do MEU PREFEITO!!!"
    },
    {
        pergunta: "Qual dupla do Dragon Ball melhor representa o Wyarley e Brenno?",
        opcoes: ["Goku e Vegeta", "Vegeta e Trunks", "Nappa e Vegeta", "Goku e Goten"],
        resposta: "Nappa e Vegeta"
    },
    {
        pergunta: "Com quem a Renata mais brigou, chateou e chamou de LIXO no MAGE?",
        opcoes: ["Daniel", "Ahri", "Brenno", "David"],
        resposta: "Brenno"
    },
    {
        pergunta: "Enquanto montava a tenda (sim ela mesmo), quem o Daniel imitou a voz?",
        opcoes: ["Silvio Santos", "Wyarley", "Brenno", "Goku"],
        resposta: "Silvio Santos"
    },
    {
        pergunta: "Quem sempre fica envolvido nas Polemicas das Camisas porque quer ficar bem aconxadin (segundo Paulo Hunter)?",
        opcoes: ["Eric", "Renata", "Wyarley", "Nadson"],
        resposta: "Nadson"
    },
    {
        pergunta: "Quais são todos os integrantes da equipe de ação do Alisson?",
        opcoes: ["Nadson, Brenno, Renata e Paulo", "Nadson, Ahrin, David e Daniel", "SOMENTE O NADSON", "Nadson, Wyarleu e Eric"],
        resposta: "SOMENTE O NADSON"
    },
    {
        pergunta: "Quem foi o integrante que ficou sem Camisa até as 10:45?",
        opcoes: ["Brenno", "Renata", "Eric", "Valberto"],
        resposta: "Valberto"
    },
    {
        pergunta: "Quantos relogios Kakashi usa no braço?",
        opcoes: ["Nenhum", "Somente 1 no direito", "somente 1 no esquerdo", "Quantos for possivel"],
        resposta: "Quantos for possivel"
    },
    {
        pergunta: "Quem é o integrante mais jovem do grupo?",
        opcoes: ["Brenno - 19", "Paulo - 20", "Charles - 18", "Alisson - 23"],
        resposta: "Charles - 18"
    },
    {
        pergunta: "Qual frase foi proferida pelo apoio da sejuv ao ver Wyarley, Daniel e Brenno resolvendo o que foi conhecido como Incidente da Tenda?",
        opcoes: ["estao ajeitando a tenda", "olha que legal", "tão colocando uma tenda nova", "falou nada"],
        resposta: "tão colocando uma tenda nova"
    },
    {
        pergunta: "Qual foi o primeiro casal formado depois do MAGE?",
        opcoes: ["Eric e Cigarro", "Brenno e Renata", "Alisson e Nadson", "Wyarley e Daniel"],
        resposta: "Brenno e Renata"
    },
    {
        pergunta: "Qual dupla mais teve sintonia e trabalhou bem juntos?",
        opcoes: ["Wyarley e Daniel", "Alisson e Renata", "David e Daniel", "Valberto e Mauricio"],
        resposta: "Wyarley e Daniel"
    },
    {
        pergunta: "Quem foi responsavel por fazer os feios ficarem mais bonitos ao fazer os cortes de cabelo?",
        opcoes: ["Mauricio KHALIFA", "Eric", "Ahri", "Charles"],
        resposta: "Mauricio KHALIFA"
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

// Embaralhar listas
function embaralharLista(lista) {
    return lista.sort(() => Math.random() - 0.5);
}

// Embaralha as perguntas e os desafios no início
embaralharLista(desafios);
embaralharLista(perguntas);

// Gerar desafio
document.getElementById('generateChallengeBtn').addEventListener('click', function () {
    if (desafios.length > 0) {
        const desafioAtual = desafios.shift();  // Remove o primeiro desafio da lista embaralhada
        document.getElementById('challengeDisplay').innerText = desafioAtual;
    } else {
        document.getElementById('challengeDisplay').innerText = "Todos os desafios foram completados!";
    }
});

// Começar quiz
document.getElementById('startQuizBtn').addEventListener('click', function () {
    document.getElementById('quiz').style.display = 'block';
    mostrarPergunta();
});

// Mostrar pergunta
function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('question').innerText = pergunta.pergunta;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    embaralharLista(pergunta.opcoes).forEach(function (opcao) {  // Embaralha as opções
        const button = document.createElement('button');
        button.innerText = opcao;
        button.addEventListener('click', function () {
            verificarResposta(opcao);
        });
        optionsDiv.appendChild(button);
    });

    document.getElementById('feedback').innerText = '';
    document.getElementById('nextQuestionBtn').style.display = 'none';
}

// Verificar resposta
function verificarResposta(resposta) {
    const pergunta = perguntas[perguntaAtual];
    const feedback = document.getElementById('feedback');

    if (resposta === pergunta.resposta) {
        feedback.innerText = "Correto!";
        feedback.style.color = "green";
        pontuacao++;  // Incrementar a pontuação se a resposta estiver correta
    } else {
        feedback.innerText = "Errado! A resposta correta é: " + pergunta.resposta;
        feedback.style.color = "red";
    }

    document.getElementById('nextQuestionBtn').style.display = 'block';
}

// Próxima pergunta
document.getElementById('nextQuestionBtn').addEventListener('click', function () {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarPontuacaoFinal();
    }
});

// Mostrar pontuação final
function mostrarPontuacaoFinal() {
    document.getElementById('question').innerText = `Você completou o quiz! Sua pontuação foi: ${pontuacao}/${perguntas.length}`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('nextQuestionBtn').style.display = 'none';
}
