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

    // Deal a new game
    document.getElementById('shuffle').addEventListener('click', (id) => {
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
            if(i >= 15 && i <= 20){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col6';
            }
            if(i >= 21 && i <= 27){
                console.log('position: ', i, 'numbers[i]: ', numbers[i]);
                fullDeck[numbers[i]].loc = 'col7';
            }
            else if(i >= 28){
                fullDeck[numbers[i]].loc = 'stock';
            }
        }

        // Check card distribution
        let locCounts = fullDeck.reduce((counts, card) => {
            counts[card.loc] = (counts[card.loc] || 0) + 1;
            return counts;
        }, {});

        console.log('locCounts: ', locCounts);

        insert(fullDeck)

        console.log('fullDeck final: ', fullDeck);

    });

});


// Insert function to add elements to html
function insert(columnId) {
    // Filter cards that belong to the specified column
    let colCards = fullDeck.filter(card => card.loc === columnId);
    let colElement = document.querySelector(`#${columnId}`);

    // Clear existing
    colElement.innerHTML = '';

    colCards.forEach(card => {
        let listItem = document.createElement('li');
        listItem.textContent = `${card.n} of ${card.suit}`;
        colElement.appendChild(listItem);
    });


};
