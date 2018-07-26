import React from 'react';

import './styles/guess-form.css';

export default class GuessForm extends React.Component {
  
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target.userGuess.value);
    event.target.userGuess.value = '';
  }

  render() {return (
        <form onSubmit={e => this.onSubmit(e)}>
            <input type="number" name="userGuess" id="userGuess"
                className="number" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
  }
}

