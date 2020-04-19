let cards = [
    { card: '🂡', value: 1 }, //spader
    { card: "🂢", value: 2 },
    { card: "🂣", value: 3 },
    { card: "🂤", value: 4 },
    { card: "🂥", value: 5 },
    { card: "🂦", value: 6 },
    { card: "🂧", value: 7 },
    { card: "🂨", value: 8 },
    { card: "🂩", value: 9 },
    { card: "🂪", value: 10 },
    { card: "🂫", value: 10 },
    { card: "🂭", value: 10 },
    { card: "🂮", value: 10 },
    { card: "🂱", value: 1 },  //hjärter
    { card: "🂲", value: 2 },
    { card: "🂳", value: 3 },
    { card: "🂴", value: 4 },
    { card: "🂵", value: 5 },
    { card: "🂶", value: 6 },
    { card: "🂷", value: 7 },
    { card: "🂸", value: 8 },
    { card: "🂹", value: 9 },
    { card: "🂺", value: 10 },
    { card: "🂻", value: 10 },
    { card: "🂽", value: 10 },
    { card: "🂾", value: 10 },
    { card: "🃁", value: 1 },   //ruter
    { card: "🃂", value: 2 },
    { card: "🃃", value: 3 },
    { card: "🃄", value: 4 },
    { card: "🃅", value: 5 },
    { card: "🃆", value: 6 },
    { card: "🃇", value: 7 },
    { card: "🃈", value: 8 },
    { card: "🃉", value: 9 },
    { card: "🃊", value: 10 },
    { card: "🃋", value: 10 },
    { card: "🃍", value: 10 },
    { card: "🃎", value: 10 },
    { card: "🃑", value: 1 },   //klöver
    { card: "🃒", value: 2 },
    { card: "🃓", value: 3 },
    { card: "🃔", value: 4 },
    { card: "🃕", value: 5 },
    { card: "🃖", value: 6 },
    { card: "🃗", value: 7 },
    { card: "🃘", value: 8 },
    { card: "🃙", value: 9 },
    { card: "🃚", value: 10 },
    { card: "🃛", value: 10 },
    { card: "🃝", value: 10 },
    { card: "🃞", value: 10 },

];
let deck = [];
let outputArea = document.getElementById("output-area");

function shuffleDeck() {
    let tmpDeck = cards.slice(0);
   
    while( tmpDeck.length > 0){
        let randomNum = Math.floor(Math.randan() * (tmpDeck.length));
        let card = tmpDeck.splice(randomNum, 1);
        deck.push(...card);
        
    }
}