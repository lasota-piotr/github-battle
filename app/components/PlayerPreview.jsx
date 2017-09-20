import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview(props) {
  const onResetWithId = props.onReset.bind(null, props.id);
  return (
    <div
      className="o-flex o-flex--column o-flex--align-items-center
                 u-margin-bottom-large u-margin-left u-margin-right"
    >
      <div className="o-flex o-flex--column o-flex--align-items-center u-margin-bottom">
        <img
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
          className="c-avatar u-margin-bottom"
        />
        <h2 className="c-title">@{props.username}</h2>
      </div>
      <button
        onClick={onResetWithId}
        className="c-link-muted"
      >
        Reset
      </button>
    </div>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
