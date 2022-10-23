const table = document.querySelector('.table'),
        counter = document.querySelector('span');

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
        const card = document.createElement('div');
        const img = document.createElement('img');
        
        card.classList.add('card-hidden');
        card.id = randomizedData[i].name;
        img.src = randomizedData[i].imgSrc;

        card.append(img);
        table.append(card)
    }
}

createCard() 
//compare card.1
let choosenCard = [],
    shownCard = [],
    score = 0;

// showCard
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-hidden')){
        compareCard()
        e.target.classList.add('active');
        choosenCard.push(e.target);
    }
});

//compare card.2
function compareCard() {
    const cards = document.querySelectorAll('.card-hidden')
    if (choosenCard.length >= 2) {
        if (choosenCard[0].id == choosenCard[1].id) {
            shownCard.push(choosenCard[0], choosenCard[1]);
            choosenCard.forEach((card) => {
                card.classList.remove('active');
                card.classList.remove('card-hidden');
                card.classList.add('card-shown');
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
    }
}