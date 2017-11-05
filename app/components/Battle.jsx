import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const { match } = this.props;
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
                <div className="u-margin-bottom-large">
                  <PlayerPreview
                    key={playerNumber}
                    username={this.state[`player${playerNumber}Name`]}
                    avatar={this.state[`player${playerNumber}Image`]}
                  >
                    <button
                      onClick={() => { this.handleReset(`player${playerNumber}`); }}
                      className="c-link-muted"
                    >
                      Reset
                    </button>
                  </PlayerPreview>
                </div>
              )
            ))
          }
        </div>
        {
          (!!this.state.playerOneName && !!this.state.playerTwoName) && (
            <div className="o-flex o-flex--justify-content-center">
              <Link
                to={{
                  pathname: `${match.url}/results`,
                  search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`,
                }}
              >
                <button className="c-button c-button--large">Fight!</button>
              </Link>
            </div>
          )
        }
      </main>
    );
  }
}

Battle.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
