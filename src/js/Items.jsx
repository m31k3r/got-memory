import React from "react";
import ReactDOM from "react-dom";

import Item from "./Item.jsx";
import shuffle from "./shuffle.js";

let cards = [];
let images = ["arryn.png", "baratheon.png",
  "greyjoy.png", "lannister.png", "stark.png"];

shuffle(images.concat(images)).map((image, index) => {
  cards.push({active:false, image, index, found:false});
});

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {firstPick:null, cards};
  }

  flip(currentPick) {
    const { firstPick, cards } = this.state;

    if(cards.filter(c => c.active).length === 2) return;

    cards[currentPick.index].active = true;

    if(!firstPick) {
      return this.setState({firstPick:currentPick, cards});
    } else {
      this.setState({cards});
      return setTimeout(() => this.matchFlips(currentPick, firstPick, cards), 1000);
    }
  }

  matchFlips(currentPick, firstPick, cards) {
    if(firstPick) {
      if(currentPick.image === firstPick.image) {
        cards[currentPick.index].active = false;
        cards[currentPick.index].found = true;
        cards[firstPick.index].active = false;
        cards[firstPick.index].found = true;
      } else {
        cards[currentPick.index].active = false;
        cards[firstPick.index].active = false;
      }
      this.setState({firstPick:null, cards});
    }
    if(cards.every(c => c.found))
      document.body.innerHTML += '<img id="success" src="./img/success.gif">';
  }

  render() {
    return <div className="row">
      {cards.map(card => <Item key={card.index} active={card.active}
        image={card.image} index={card.index} found={card.found}
        onClick={card.found||card.active?null:() => this.flip(card)} />)}
    </div>;
  }
}

ReactDOM.render(<Cards />, document.getElementById("memory"));
