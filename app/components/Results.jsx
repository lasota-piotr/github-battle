import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { battle } from '../utils/api';

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

    const {
      playerOneName,
      playerTwoName,
    } = queryString.parse(this.props.location.search);
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
    console.log(winner, loser);
    return (
      <div>
        <h1 className="c-title u-text-center u-margin-top">Results</h1>
        {loading && (
          <div>
            <h3 className="u-text-center u-margin-top">Loading...</h3>
          </div>
        )}
        {error && (
          <div>
            <p className="u-text-center u-margin-top">
              {error}
            </p>
            <div className="u-text-center u-margin-top">
              <Link to="/battle"><button className="c-button">Reset</button></Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Results;
