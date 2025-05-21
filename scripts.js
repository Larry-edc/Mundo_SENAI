document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        { name: 'windows', img: 'images/windows.png' },
        { name: 'apple', img: 'images/apple.png' },
        { name: 'VS_Code', img: 'images/vs_code.png' },
        { name: 'github', img: 'images/github.png' },
        { name: 'android', img: 'images/android.png' },
        { name: 'google', img: 'images/google.png.jpeg' },
        { name: 'windows', img: 'images/windows.png' },
        { name: 'apple', img: 'images/apple.png' },
        { name: 'VS_Code', img: 'images/android.png.jpeg' },
        { name: 'github', img: 'images/github.png' },
        { name: 'android', img: 'images/android.png' },
        { name: 'chrome', img: 'images/chrome.png' }
    ];

    // Embaralhar cartas
    cards.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    let cardsChosen = [];  // Cartas escolhidas
    let cardsChosenId = [];  // IDs das cartas escolhidas
    let cardsWon = [];  // Cartas combinadas

    // Criar quadro de cartas
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/board.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }

    // Virar carta
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);  // Alterei 'img' para 'id'
        
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500);  // Checar se as cartas combinam
        }
    }

    // Checar se as cartas combinam
    function checkMatch() {
        const cards = document.querySelectorAll('img');
        const [firstCardId, secondCardId] = cardsChosenId;
        
        if (cardsChosen[0] === cardsChosen[1]) {
            cardsWon.push(cardsChosen);  // Cartas combinadas
        } else {
            cards[firstCardId].setAttribute('src', 'images/board.png');
            cards[secondCardId].setAttribute('src', 'images/board.png');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultView.textContent = cardsWon.length;  // Mostrar número de combinações

        if (cardsWon.length === cards.length / 2) {
            alert('Parabéns, você ganhou!');
        }
    }

    // Chamar a função para criar o quadro de cartas
    createBoard();
});
