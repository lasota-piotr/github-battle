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
    const {
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage,
    } = this.state;
    return (
      <main className="u-margin-top">
        <div className="o-flex o-flex--justify-content-center">
          {
            !playerOneName ? (
              <PlayerInput
                id="playerOne"
                label="Player One"
                onSubmit={this.handleSubmit}
              />
            ) : (
              <PlayerPreview
                username={playerOneName}
                avatar={playerOneImage}
                id="playerOne"
                onReset={this.handleReset}
              />
            )
          }
          {
            !playerTwoName ? (
              <PlayerInput
                id="playerTwo"
                label="Player Two"
                onSubmit={this.handleSubmit}
              />
            ) : (
              <PlayerPreview
                username={playerTwoName}
                avatar={playerTwoImage}
                id="playerTwo"
                onReset={this.handleReset}
              />
            )
          }
        </div>
        {
          (!!playerOneName && !!playerTwoName) ? (
            <button>Fight!</button>
          ) : null
        }
      </main>
    );
  }
}
