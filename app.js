const table = document.querySelector('.table'),
        counter = document.querySelector('span'),
        btn = document.querySelector('button');

// Create a data
const data = [
    { name: 'owl', imgSrc: './image/owl.png' },
    { name: 'magic-ball', imgSrc: './image/magic-ball.png' },
    { name: 'frankenstein', imgSrc: './image/frankenstein.png' },
    { name: 'potion', imgSrc: './image/potion.png' },
    { name: 'tombstone', imgSrc: './image/tombstone.png' },
    { name: 'witch', imgSrc: './image/witch.png' },
    { name: 'owl', imgSrc: './image/owl.png' },
    { name: 'magic-ball', imgSrc: './image/magic-ball.png' },
    { name: 'frankenstein', imgSrc: './image/frankenstein.png' },
    { name: 'potion', imgSrc: './image/potion.png' },
    { name: 'tombstone', imgSrc: './image/tombstone.png' },
    { name: 'witch', imgSrc: './image/witch.png' }
]

// Randomize a data
function randomize() {
    let randomizedData = data;
    randomizedData.sort(() => Math.random() - 0.5);
    return randomizedData;
}

// create a card 
function createCard() {
    let randomizedData = randomize();
    for (let i = 0; i < randomizedData.length; i++) {
        const cardWrapper = document.createElement('div');
        const card = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        const questionImg = document.createElement('img');
        const cardImage = document.createElement('img');

        questionImg.src = 'image/question.png';
        cardImage.src = randomizedData[i].imgSrc;
        
        cardWrapper.classList.add('card-wrapper-hidden');
        cardWrapper.setAttribute('name', randomizedData[i].name); 
        card.classList.add('card');
        front.classList.add('front');
        back.classList.add('back');

        front.appendChild(questionImg);
        back.appendChild(cardImage);
        card.appendChild(front);
        card.appendChild(back);
        cardWrapper.appendChild(card);
        table.appendChild(cardWrapper);
    }
}

createCard() 
//compare card.1
let choosenCard = [],
    shownCard = [],
    score = 0;

// showCard
table.addEventListener('click', (e) => {
    let target = e.target.parentNode.parentNode.parentNode; // fuck this shit
    if (target.classList.contains('card-wrapper-hidden')){
        compareCard()
        target.classList.add('active');
        choosenCard.push(target);
    }
});

//compare card.2
function compareCard() {
    const cards = document.querySelectorAll('.card-wrapper-hidden')
    if (choosenCard.length >= 2) {
        if (choosenCard[0].getAttribute('name') == choosenCard[1].getAttribute('name')) {
            shownCard.push(choosenCard[0], choosenCard[1]);
            choosenCard.forEach((card) => {
                card.classList.remove('active');
                card.classList.remove('card-wrapper-hidden');
                card.classList.add('card-wrapper-shown');
            });
            choosenCard = [];
            updateCounter();
        } else {
            cards.forEach((card) => {
                card.classList.remove('active');
            });
            choosenCard = [];
        }
    }
}

// update counter 
function updateCounter() {
    score++;
    counter.innerHTML = `${score}`;
    if (score == 5) {
        score = 6
        counter.innerHTML = `${score}`;
        btn.classList.add('active');
    }
}
// restrat onClik 
btn.addEventListener('click', restart)
// restart
function restart() {
// null all arrays and counter
    choosenCard = [];
    shownCard = [];
    score = 0;

    counter.innerHTML = `${score}`;

    nullTable();
    createCard();

    btn.classList.remove('active')
}

// delete all cards
function nullTable() {
    let table = document.querySelector('.table');
    while(table.firstElementChild) {
        table.removeChild(table.firstChild);
    }
};
