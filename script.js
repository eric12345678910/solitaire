console.log('Loading Solitaire . . . ');

// Function to Create Cards of a Suit
function suits(suit){
    // Start deck with an Ace
    let cardSuit = [{n:'A', suit: suit, loc:'', className:'cardDown'}];

    // Add cards 2 through 10
    for(let i = 2; i <= 10; i++){
        cardSuit.push( {n: i, suit: suit, loc: '', className:'cardDown'});
    }
    // Add face cards
    cardSuit.push(
        {n: 'J', suit: suit, loc:'', className:'cardDown'},
        {n: 'Q', suit: suit,loc:'', className:'cardDown'},
        {n: 'K', suit: suit,loc:'', className:'cardDown'},
        );
    return cardSuit;
}

// Create the Full Deck of Cards
let fullDeck = [
    ...suits('hearts'),
    ...suits('diamonds'),
    ...suits('spades'),
    ...suits('clubs')
];

//console.log('fullDeck of', fullDeck.length, 'cards:', fullDeck);

// Add/update elements in html //////////////////////////////////////////////
function addHtml(locationId){
    //console.log(`\naddHtml(${locationId})...`);

    // Filter cards that belong to the specified column
    let cardLoc = fullDeck.filter(card => card.loc === locationId);
    //console.log('Cards with location ID: ', locationId, '\n', cardLoc);

    let locElement = document.querySelector(`#${locationId}`);

    // Clear existing
    if( locElement){
        locElement.innerHTML = '';

        // Append li to each location category
        cardLoc.forEach(((cardLoc, index) => {
            console.log('cardLoc.forEach(cardLoc > cardLoc: ', cardLoc);
            let newListItem = document.createElement('li');
            if(index === 0){
                newListItem.className = 'cardUp'
            }
            else{
                newListItem.className = 'cardDown'
            }

            newListItem.textContent = `${cardLoc.n} of ${cardLoc.suit}`;
            locElement.appendChild(newListItem);
        }));
    }
}

// DOM LOADED /////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const locations = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7', 'stock']
    // Click Event //////////////////////////////////////////////////////////
    // Shuffle a new game
    document.getElementById('shuffle').addEventListener('click', () => {
        //alert('New Deck!');

        // Create and shuffle numbers 1-52
        function shuffle(arr){
            for( let i = arr.length -1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        let numbers = [...Array(52).keys()]; // Create an array [0, 1, 2, ..., 52]
        shuffle(numbers);

        //console.log('numbers: ', numbers);

        // Assign location data to each card element
        // aka Deal Cards
        for(let i = 0; i < 52; i++){
            // Assign cards to Columns 1-7 in Foundation
            if(i === 0) fullDeck[numbers[i]].loc = 'col1';
            else if(i >= 1 && i <= 2) fullDeck[numbers[i]].loc = 'col2';
            else if(i >= 3 && i <= 5 ) fullDeck[numbers[i]].loc = 'col3';
            else if(i >= 6 && i <= 9) fullDeck[numbers[i]].loc = 'col4';
            else if(i >= 10 && i <= 14) fullDeck[numbers[i]].loc = 'col5';
            else if(i >= 15 && i <= 20) fullDeck[numbers[i]].loc = 'col6';
            else if(i >= 21 && i <= 27) fullDeck[numbers[i]].loc = 'col7';
            else fullDeck[numbers[i]].loc = 'stock';
        }

        locations.forEach(locationId => {
            const list = document.querySelector(`#${locationId}`);

            if(list){
                const firstItem  = list.querySelector('li');

                if(firstItem){
                    firstItem.className = 'cardUp'
                }
            }
        })

/*
        // Check card distribution
        let locCounts = fullDeck.reduce((counts, card) => {
            counts[card.loc] = (counts[card.loc] || 0) + 1;
            return counts;
        }, {});

        console.log('Size of each stack of cards: ', locCounts);
        console.log('\nStarting Deck: ', fullDeck);
*/


        addHtml('col1');
        addHtml('col2');
        addHtml('col3');
        addHtml('col4');
        addHtml('col5');
        addHtml('col6');
        addHtml('col7');
        addHtml('stock');


    });
});

