document.addEventListener("DOMContentLoaded"), () => {
    const cards = [ //imagem das cartas
    {
        name: 'windows',
        id: 'images/windows.png'
    },
    {
        name: 'apple',
        id: 'images/windows.png'
    },
    {
        name: 'VS_Code',
        id: 'images/vs_code.png'
    },
    {
        name: 'github',
        id: 'images/github.png'
    },
    {
        name: 'android',
        id: 'images/android.png'
    },
    {
        name: 'chrome',
        id: 'images/chrome.png'
    },
    {
        name: 'windows',
        id: 'images/windows.png'
    },
    {
        name: 'apple',
        id: 'images/windows.png'
    },
    {
        name: 'VS_Code',
        id: 'images/vs_code.png'
    },
    {
        name: 'github',
        id: 'images/github.png'
    },
    {
        name: 'android',
        id: 'images/android.png'
    },
    {
        name: 'chrome',
        id: 'images/chrome.png'
    },
 ]
 //embaralhar cartas
 cards.sort(() => 0.5 - Math.random());
 const board = document.querySelector('.board');
 const resultView = document.querySelector('#result');
 let cardsChosen = []; //cartas escolhidas
 let cardsChosenId = []; //id cartas escolhidas
 let cardsWon = [] //cartas combinadas
   
     //criar quadro de cartas
function creatBoard(){
    for(let i = 0; i<cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/board.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipCard);
        board.append
    }
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId])
    }
}
};
