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
    if (currentGuess == this.state.answer) {
      this.setState({
        feedback: "You win!"
      })
    }
    this.setState({
      currentGuess: currentGuess,
      currentCount: this.state.currentCount + 1,
      guessHistory: this.state.guessHistory.concat(currentGuess)
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

