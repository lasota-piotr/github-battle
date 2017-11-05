import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import { battle } from '../utils/api';
import PlayerPreview from './PlayerPreview';

const ProfileInfo = ({ profile }) => (
  <PlayerPreview username={profile.login} avatar={profile.avatar_url}>
    <ul className="u-margin-top">
      {profile.name && <li>{profile.name}</li>}
      {profile.location && <li>{profile.location}</li>}
      {profile.company && <li>{profile.company}</li>}
      <li>Followers: {profile.followers}</li>
      <li>Following: {profile.following}</li>
      <li>Public Repos: {profile.public_repos}</li>
      {profile.blog && (
        <li>
          <a href={profile.blog}>{profile.blog}</a>
        </li>
      )}
    </ul>
  </PlayerPreview>
);

const Card = styled.article`
  background-color: #fff;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 4px 13px 0 #999;
`;

const ResultsPlayer = ({ label, profile, score }) => (
  <Card
    className="o-flex o-flex--column o-flex--align-items-center
               u-margin-bottom-large u-margin-left u-margin-right"
  >
    <h2 className="u-margin-bottom">{label}</h2>
    <h3 className="u-margin-bottom-large">Score: {score}</h3>
    <ProfileInfo profile={profile} />
  </Card>
);

ResultsPlayer.propTypes = {
  label: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
};

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      loading: true,
      error: null,
    };
  }
  componentDidMount() {
    const errorHandle = (error) => {
      this.setState({
        loading: false,
        error,
      });
    };

    const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);
    battle([playerOneName, playerTwoName])
      .then(([winner, loser]) => {
        if (!winner || !loser) {
          errorHandle('Oops... There is a problem with fetch results.');
        }
        this.setState({
          loading: false,
          winner,
          loser,
        });
      })
      .catch(() => {
        errorHandle('Oops... There is a problem with fetch results.');
      });
  }

  render() {
    const {
      winner, loser, loading, error,
    } = this.state;
    return (
      <div>
        <h1 className="c-title u-text-center u-margin-top u-margin-bottom-large">
          Results
        </h1>
        {loading ? (
          <div>
            <h3 className="u-text-center u-margin-top">Loading...</h3>
          </div>
        ) : (
          <div className="o-flex o-flex--justify-content-center o-flex--wrap">
            <ResultsPlayer
              label="Winner"
              score={winner.score}
              profile={winner.profile}
            />
            <ResultsPlayer
              label="Loser"
              score={loser.score}
              profile={loser.profile}
            />
          </div>
        )}
        {error && (
          <div>
            <p className="u-text-center u-margin-top">{error}</p>
            <div className="u-text-center u-margin-top">
              <Link to="/battle">
                <button className="c-button">Reset</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Results;
