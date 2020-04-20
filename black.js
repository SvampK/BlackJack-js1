let cards = [
  { card: "🂡", value: 1 }, //spader
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
  { card: "🂱", value: 1 }, //hjärter
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
  { card: "🃁", value: 1 }, //ruter
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
  { card: "🃑", value: 1 }, //klöver
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
let dealer = [];
let player = [];
let outputArea = document.getElementById("output-area");
let winnerArea = document.getElementById("winner-area");
let newGameBtn = document.getElementById("new-game-button");
let hitBtn = document.getElementById("hit-button");
let stayBtn = document.getElementById("stay-button");
let playerScore = 0;
let dealerScore = 0;

stayBtn.addEventListener('click', function (){
  showNewGameButton();
  while (dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21){
    dealAnotherCard(dealer);
    showHands(true);
  }
})
function shuffleDeck() {
  let tmpDeck = cards.slice(0);

  while (tmpDeck.length >= 1) {
    let randomNum = Math.floor(Math.random() * tmpDeck.length);
    let card = tmpDeck.splice(randomNum, 1);
    deck.push(...card);
  }
}

function drawCard() {
  return deck.shift();
}
function showHand(hand, score) {
  let cards = '';
  hand.forEach(element => {
    cards += element.card;
})

 return cards.concat(" " + score + "<br>");
  //outputArea.innerHTML += cards.concat(" " + score + '<br>');
}

function dealInitialCards() {
  player.push(drawCard());
  player.push(drawCard());
  dealer.push(drawCard());
  dealer.push(drawCard());
  showHands();
}
function clearTable() {
  outputArea.innerHTML = "";
}
function calculateHand(cards) {
  let score = 0;
  let ace = cards.find(card => card.value === 1) !== undefined;
  cards.forEach((card) => {
    score = score + card.value;
  });
  if (score + 10 < 21 && ace) {
    score += 10;
  }
  return score;
}

function startNewGame() {
  hideNewGameButton();
  deck = [];
  dealer = [];
  player = [];
  clearTable();
  shuffleDeck();
  dealInitialCards();
}

function showNewGameButton() {
  newGameBtn.style.display = "inline";
  hitBtn.style.display = "none";
  stayBtn.style.display = "none";
}
function hideNewGameButton() {
  newGameBtn.style.display = "none";
  hitBtn.style.display = "inline";
  stayBtn.style.display = "inline";
}

function showHands(stayed = false) {
  dealerScore = calculateHand(dealer);
  playerScore = calculateHand(player);
  clearTable();
  outputArea.innerHTML += showHand(dealer, dealerScore);
  outputArea.innerHTML += showHand(player, playerScore);
  let winner = determineWinner(stayed);
  winnerArea.innerHTML = winner;
  //showHand();
// ??
  if (winner != ''){
    hideNewGameButton();
  }
}
function dealAnotherCard(hand) {
  hand.push(drawCard());
}
hitBtn.addEventListener("click", function () {
  dealAnotherCard(player);
  showHands();
});
function hasBlackJack(hand, score) {
  if (hand.length == 2 && score === 21) {
    return true;
  }
  return false;
}
function isBust(score) {
  if (score > 21) {
    return true;
}
return false;
}
function determineWinner(stayed) {
  const dealerWins = "Dealer Wins!";
  const playerWins = "You win!";
  const draw = "Draw";

  if (isBust(playerScore)) {
    return dealerWins;
  } 
  else if (isBust(dealerScore)) {
    return playerWins;
  } 
  else if (dealer.length == 5 && score <= 21 ) {
    return dealerWins;
  } 
  else if (dealerScore == playerScore && stayed) {
    return draw;
  } 
  else if (dealerScore < playerScore && stayed) {
    return playerWins;
  } 
  else if (dealerScore > playerScore && stayed) {
    return dealerWins;
  } 
  
  else {
    let dealerBJ = hasBlackJack(dealer, dealerScore);
    let playerBJ = hasBlackJack(player, playerScore);
    if (!!dealerBJ && !!playerBJ) {
      return draw;
    }
    if (playerBJ == true) {
      return playerWins;
    }
    if (dealerBJ == true) {
      return dealerWins;
    }
  }
  return '';
}
showNewGameButton();