import React from 'react';
import queryString from 'query-string';
import { battle } from '../utils/api';

class Results extends React.Component {
  componentDidMount() {

  }

  render() {
    const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);
    battle([playerOneName, playerTwoName]).then((players) => { console.log(players); });
    return (
      <div>
        <h1>Results</h1>
        <div>{playerOneName},{playerTwoName}</div>
      </div>
    );
  }
}


export default Results;
