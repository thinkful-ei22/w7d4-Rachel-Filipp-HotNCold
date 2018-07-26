import React from 'react';

import './styles/guess-form.css';

export default class GuessForm extends React.Component {
  
  onSubmit(event) {
    event.preventDefault();
    this.onSubmit(event.target.value);
  }

  render() {return (
        <form>
            <input onSubmit={e => this.onSubmit(e)}  type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
  }
}

