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
        //alert('New Deck!');
        function shuffle(arr){
            for( let i = arr.length -1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        let numbers = [...Array(52).keys()]; // Create an array [0, 1, 2, ..., 52]
        shuffle(numbers);

        console.log('numbers: ', numbers);

        // Assign location data to each card element
        for(let i = 0; i < 52; i++){
            // Assign cards to Foundation
            if(i === 0){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col1';
            }
            if(i >= 1 && i <= 2){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col2';
            }
            if(i >= 3 && i <= 5 ){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col3';
            }
            if(i >= 6 && i <= 10){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col4';
            }
            if(i >= 10 && i <= 14){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col5';
            }
            if(i >= 15 && i <= 21){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col6';
            }
            if(i >= 22 && i <= 28){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col7';
            }
            else if(i >= 29){
                fullDeck[numbers[i]].loc = 'stock';
            }

        }




        console.log('fullDeck final: ', fullDeck);
});

    let shuffle = document.getElementById('shuffle');
});
