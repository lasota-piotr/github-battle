import React from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    const newState = {
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`,
    };
    this.setState(newState);
  }

  handleReset(id) {
    const newState = {
      [`${id}Name`]: '',
      [`${id}Image`]: '',
    };
    this.setState(newState);
  }

  render() {
    return (
      <main className="u-margin-top">
        <h1 className="u-text-center u-margin-bottom-large">Battle</h1>
        <div className="o-flex o-flex--justify-content-center o-flex--wrap">
          {
            ['One', 'Two'].map(playerNumber => (
              !this.state[`player${playerNumber}Name`] ? (
                <PlayerInput
                  key={playerNumber}
                  id={`player${playerNumber}`}
                  label={`Player ${playerNumber}`}
                  onSubmit={this.handleSubmit}
                />
              ) : (
                <PlayerPreview
                  key={playerNumber}
                  username={this.state[`player${playerNumber}Name`]}
                  avatar={this.state[`player${playerNumber}Image`]}
                  id={`player${playerNumber}`}
                  onReset={this.handleReset}
                />
              )
            ))
          }
        </div>
        {
          (!!this.state.playerOneName && !!this.state.playerTwoName) ? (
            <div className="o-flex o-flex--justify-content-center">
              <button className="c-button c-button--large">Fight!</button>
            </div>
          ) : null
        }
      </main>
    );
  }
}
