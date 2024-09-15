console.log('Loading Solitaire . . . ');

// Function to Create Cards of a Suit
function suits(suit){
    // Start deck with an Ace
    let cardSuit = [{n:'A', suit: suit, loc:''}];

    // Add cards 2 through 10
    for(let i = 2; i <= 10; i++){
        cardSuit.push( {n: i, suit: suit, loc: ''});
    }
    // Add face cards
    cardSuit.push(
        {n: 'J', suit: suit, loc:''},
        {n: 'Q', suit: suit,loc:''},
        {n: 'K', suit: suit,loc:''},
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

    let stock = [];

    // Deal The Cards

    document.addEventListener('click', (id) => {
        alert('New Deck!');
        function shuffle(arr){
            for( let i = arr.length -1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        let numbers = [...Array(53).keys()]; // Create an array [0, 1, 2, ..., 52]
        shuffle(numbers);
        console.log(numbers);


    });

    let shuffle = document.getElementById('shuffle');
})
