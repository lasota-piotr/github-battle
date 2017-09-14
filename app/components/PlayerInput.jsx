import React from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      username: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username,
    );
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="o-flex o-flex--column o-flex--align-items-center"
      >
        <label
          htmlFor="username"
          className="u-margin-bottom c-title"
        >
          {this.props.label}
        </label>
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
          className="c-input u-margin-bottom"
        />
        <button
          type="submit"
          disabled={!this.state.username}
          className="c-button c-button--large"
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
