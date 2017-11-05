import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview(props) {
  return (
    <div
      className="o-flex o-flex--column o-flex--align-items-center
                 u-margin-left u-margin-right"
    >
      <div className="o-flex o-flex--column o-flex--align-items-center u-margin-bottom">
        <img
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
          className="c-avatar u-margin-bottom"
        />
        <h2 className="c-title">@{props.username}</h2>
      </div>
      {props.children}
    </div>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
