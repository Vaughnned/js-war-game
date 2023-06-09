import { Card, CARD_SUITS, CARD_VALUES } from "./card.js";

export function Deck() {
  this.cards = [];
}

Deck.prototype.fillStandardCards = function () {
  Object.keys(CARD_SUITS).forEach((suit) => {
    Object.keys(CARD_VALUES).forEach((val) => {
      this.cards.push(new Card(suit, val));
    });
  });
};

Deck.prototype.shuffle = function () {
  // fisher yates algorithm
  // https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
  let arr = this.cards;
  let i = arr.length;
  while (--i > 0) {
    let temp = Math.floor(Math.random() * (i + 1));
    [arr[temp], arr[i]] = [arr[i], arr[temp]];
  }
};

Deck.prototype.draw = function () {
  return this.cards.pop();
};

Deck.prototype.drawThree = function () {
  return this.cards.splice(0, 3);
};

Deck.prototype.addCard = function (card) {
  this.cards.unshift(card);
};

Deck.prototype.addCards = function (cards) {
  this.cards = cards.concat(this.cards);
};
