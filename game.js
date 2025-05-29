const grid = document.querySelector('.grid');

const logos = [
    "android",
    "apple",
    "github",
    "brain",
    "google",
    "insta",
    "nvidia",
    "vs_code",
    "windows"
]

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const creatCard = () => {
    
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';
    
   
    card.appendChild(back);
    card.appendChild(front);

    return card;
}

const loadGame = () => {
    
    logos.forEach((logos) => {

       const card = creatCard();
       grid.appendChild(card);
    });
}
loadGame();
