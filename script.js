console.log('Loading Solitaire . . . ');

// Function to Create Cards of a Suit
function suits(suit){
    // Start deck with an Ace
    let cardSuit = [{n:'A', suit: suit}];

    // Add cards 2 through 10
    for(let i = 2; i <= 10; i++){
        cardSuit.push( {n: i, suit: suit});
    }
    // Add face cards
    cardSuit.push(
        {n: 'J', suit: suit},
        {n: 'Q', suit: suit},
        {n: 'K', suit: suit},
        )
    return cardSuit;
}

// Function to Create the Full Deck of Cards
let fullDeck = [
    ...suits('hearts'),
    ...suits('diamonds'),
    ...suits('spades'),
    ...suits('clubs')
];

console.log('fullDeck of', fullDeck.length, 'cards:', fullDeck);


// Load after dom
document.addEventListener('DOMContentLoaded', () => {
    // Set up the structure of the game
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    let col6 = [];
    let col7 = [];

    let spadeStack = [];
    let heartStack = [];
    let clubStack = [];
    let diamondStack = [];


    let activeCard = [];
    // Deal The Cards

})
