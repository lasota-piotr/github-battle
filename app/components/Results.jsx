import React from 'react';

class Results extends React.Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
        <div>{this.props.location.search}</div>
      </div>
    );
  }
}


export default Results;
