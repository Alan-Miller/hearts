import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      deck: this.shuffle(this.makeDeck()),
      playerOneHand: [],
      playerTwoHand: [],
      playerThreeHand: [],
      playerFourHand: []
    }
  }

  componentDidMount() {
    this.deal(this.state.deck);
  }

  makeDeck() {
    return Array.from(Array(52).keys()).map((item, i) => {
      const id = i + 1;
      const value = [ 'Joker', 'A', '2', '3', '4', '5', '6', '7', 
                      '8', '9', '10', 'J', 'Q', 'K'][(i % 13) + 1];
      const suit = id < 14 ? '♣' 
          : id < 27 ? '♦' 
          : id < 40 ? '♠' 
          : '♥';
      return {id, value, suit};
    }); 
  }

  shuffle(deck) {
    let shuffledDeck = [];
    while (deck.length) {
      const i = ~~(Math.random() * deck.length);
      shuffledDeck.push(deck.splice(i, 1)[0]);
    }
    return shuffledDeck;
  }

  deal(deck) {
    const { playerOneHand, playerTwoHand, playerThreeHand, playerFourHand } = this.state;
    while (deck.length) {
      const round = deck.splice(0, 4);
      playerOneHand.push(round[0]);
      playerTwoHand.push(round[1]);
      playerThreeHand.push(round[2]);
      playerFourHand.push(round[3]);
      this.setState({ playerOneHand, playerTwoHand, playerThreeHand, playerFourHand });
    }
    console.log('hands', playerOneHand, playerTwoHand, playerThreeHand, playerFourHand);
  }

  render() {
    const { playerOneHand, playerTwoHand, playerThreeHand, playerFourHand } = this.state;
    const cardStyle = suit => suit === '♣' || suit === '♠' ? 
          {backgroundColor: 'rgb(15, 40, 60)', color: 'white'} 
          : {backgroundColor: 'rgb(243, 83, 132)'};
    return (
      <div className="App">
        <div className="sidebar"></div>
        <div className="table">

          <div className="player one computer">
            <div className="hand">
              { playerOneHand.map((card, i) => (
                <div 
                  key={i} 
                  className="card" 
                  style={cardStyle(card.suit)}
                  >{card.value}{card.suit}</div>
              )) }
            </div>
          </div>
          <div className="player two computer">
            <div className="hand">
              { playerTwoHand.map((card, i) => (
                <div 
                  key={i} 
                  className="card" 
                  style={cardStyle(card.suit)}
                  >{card.value}{card.suit}</div>
              )) }
            </div>
          </div>
          <div className="player three computer">
            <div className="hand">
              { playerThreeHand.map((card, i) => (
                <div 
                  key={i} 
                  className="card" 
                  style={cardStyle(card.suit)}
                  >{card.value}{card.suit}</div>
              )) }
            </div>
          </div>
          <div className="player four human">
            <div className="hand">
              { playerFourHand.map((card, i) => (
                <div 
                  key={i} 
                  className="card" 
                  style={cardStyle(card.suit)}
                  >{card.value}{card.suit}</div>
              )) }
            </div>
          </div>

          <div className="centerOfTable">
            <div className="discard"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


