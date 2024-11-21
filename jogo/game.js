let currentDialogue = 0;
const dialogues = [
    { 
        text: "Bem-vindo ao Jogo sobre o Vôlei Paralímpico! Neste jogo, você vai aprender sobre o esporte através de diálogos interativos. Escolha uma opção para aprender mais. Vamos começar!",
        choices: [
            { text: "Como jogar?", next: 1 }
        ] 
    },
    {
        text: "Este é um jogo de escolhas! Você vai ver uma série de perguntas e opções de respostas. Basta clicar nas opções de resposta para avançar na história e aprender sobre o vôlei paralímpico. Vamos começar! Escolha uma das opções abaixo para aprender mais sobre o esporte.",
        choices: [
            { text: "História do Vôlei Paralímpico", next: 2 },
            { text: "Atletas Importantes", next: 3 },
            { text: "Regras do Vôlei Paralímpico", next: 4 }
        ]
    },
    { 
        text: "O Vôlei Paralímpico foi introduzido nas Paralimpíadas em 1980, em Arnhem, na Holanda. No início, o esporte era jogado apenas por atletas com lesões na medula espinhal. Hoje, o esporte é praticado por atletas com diversas deficiências.",
        choices: [
            { text: "Interessante! Fale sobre atletas importantes", next: 3 },
            { text: "Quais são as regras?", next: 4 }
        ]
    },
    { 
        text: "Atletas como **Rafael Medeiros**, **Lúcia Tavares** e **Renato Leite** são considerados ícones do Vôlei Paralímpico no Brasil e no mundo. Rafael é conhecido por suas habilidades técnicas e liderança dentro da quadra, e Lúcia Tavares foi fundamental para o desenvolvimento do esporte feminino.",
        choices: [
            { text: "Quais são as regras do jogo?", next: 4 },
            { text: "Voltar para o início", next: 0 }
        ]
    },
    { 
        text: "As regras do Vôlei Paralímpico são semelhantes ao vôlei tradicional, mas com algumas adaptações. O esporte é jogado em uma quadra menor, com 6 jogadores de cada time. Além disso, a rede é mais baixa para atender as necessidades dos atletas com deficiência.",
        choices: [
            { text: "Voltar para o início", next: 0 },
            { text: "Fale sobre mais atletas importantes", next: 3 }
        ]
    }
];

function chooseOption(option) {
    const choice = dialogues[currentDialogue].choices[option - 1];
    currentDialogue = choice.next;

    if (currentDialogue === -1) {
        document.getElementById('dialogue').innerText = "Fim do jogo. Você pode começar de novo!";
        document.getElementById('choices').innerHTML = '<li><button class="choice-button" onclick="restartGame()">Reiniciar</button></li>';
    } else {
        displayDialogue();
    }
}

function displayDialogue() {
    const dialogue = dialogues[currentDialogue];
    document.getElementById('dialogue').innerText = dialogue.text;

    let choicesHTML = '';
    dialogue.choices.forEach((choice, index) => {
        choicesHTML += `<li><button class="choice-button" onclick="chooseOption(${index + 1})">${choice.text}</button></li>`;
    });
    document.getElementById('choices').innerHTML = choicesHTML;
}

function restartGame() {
    currentDialogue = 0;
    displayDialogue();
}

displayDialogue();