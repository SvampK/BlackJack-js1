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
let dealer = [];
let player = [];
let outputArea = document.getElementById("output-area");
let newGameBtn = document.getElementById("new-game-button");
let hitBtn = document.getElementById("hit-button");
let stayBtn = document.getElementById("stay-button");
let playerScore;

function shuffleDeck() {
  let tmpDeck = cards.slice(0);

  while (tmpDeck.length > 0) {
    let randomNum = Math.floor(Math.random() * tmpDeck.length);
    let card = tmpDeck.splice(randomNum, 1);
    deck.push(...card);
  }
}

function drawCard() {
  return deck.shift();
}
function showHand(hand, score) {
  let cards = "";
  hand.forEach((element) => {
    cards += element.card;
  });
  return cards.concat(" " + score + "<br>");
  //outputArea.innerHTML += cards.concat(" " + score + '<br>');
}
function showHands() {
  clearTable();
  playerScore = calculateHand(player);
  dealerScore = calculateHand(dealer);
}
function dealInitialCards() {
  player.push(drawCard());
  player.push(drawCard());
  dealer.push(drawCard());
  dealer.push(drawCard());
  showHand();
  showHand();
}
function clearTable() {
  outputArea.innerHTML = "";
}
function calculateHand(cards) {
  let score = 0;
  let ace = cards.find((card) => card.value == 1) !== undefined;
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
