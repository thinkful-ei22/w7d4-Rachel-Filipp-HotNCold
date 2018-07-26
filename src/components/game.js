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
      guessHistory: [],
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

  render() {
        
    return (
        <div>
            <Header onClick={() => this.switchOverlay(this.state.overlay)} overlay={this.state.overlay}/>
            <GuessSection feedback="Make your guess!" onSubmit={currentGuess => this.setState({currentGuess})} />
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
  }
}

