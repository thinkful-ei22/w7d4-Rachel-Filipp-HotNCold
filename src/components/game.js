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
      currentGuess: '',
      currentCount: 0,
      guessHistory: [1, 2, 45],
      feedback: '',
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
    this.setState({
      currentGuess: currentGuess,
      currentCount: this.state.currentCount + 1
    });

  }


  render() {
        
    return (
        <div>
            <Header onClick={() => this.switchOverlay(this.state.overlay)} overlay={this.state.overlay}/>
            <GuessSection feedback="Make your guess!" onSubmit={(currentGuess) => this.onSubmit(currentGuess)} />
            <GuessCount count={this.state.currentCount} />
            <GuessList guesses={this.state.guessHistory} />
        </div>
    );
  }
}

