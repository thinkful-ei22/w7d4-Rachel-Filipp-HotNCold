import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: Math.floor((Math.random() * 100) + 1),
      currentGuess: null,
      currentCount: 0,
      guessHistory: [],
      feedback: 'Make your guess!',
      overlay: false
    };
  }
  
  switchOverlay(){
    const currentOverlay = this.state.overlay;
    this.setState({
      overlay : !currentOverlay
    });
  }

  onSubmit(currentGuess){

    const currentGuessNum = parseInt(currentGuess);
    const difference = Math.abs(this.state.answer - currentGuessNum);

    let feedback = 'Make your guess!';
    
    
    if (difference > 50) {
      feedback = 'You\`re in absolute zero';
    }
    if (difference <= 50) {
      feedback = 'You\'re very cold';
    }
    if (difference <= 30) {
      feedback = 'You\'re cold';
    }
    if (difference <= 15) {
      feedback = 'You\'re warm';
    }
    if (difference <= 5) {
      feedback = 'You\'re hot!';
    } 
    
    
    if (currentGuessNum === this.state.answer) {
      feedback = 'You win!';
    }
    this.setState({
      currentGuess: currentGuessNum,
      currentCount: this.state.currentCount + 1,
      guessHistory: this.state.guessHistory.concat(currentGuessNum),
      feedback: feedback
    });

  }


  render() {
        
    return (
        <div>
            <Header onClick={() => this.switchOverlay(this.state.overlay)} overlay={this.state.overlay}/>
            <GuessSection feedback={this.state.feedback} onSubmit={(currentGuess) => this.onSubmit(currentGuess)} />
            <GuessCount count={this.state.currentCount} />
            <GuessList guesses={this.state.guessHistory} />
        </div>
    );
  }
}

