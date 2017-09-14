import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview(props) {
  const onResetWithId = props.onReset.bind(null, props.id);
  return (
    <div>
      <div>
        <img
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
          className="c-avatar"
        />
        <h2 className="c-title">@{props.username}</h2>
      </div>
      <button onClick={onResetWithId}>
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
