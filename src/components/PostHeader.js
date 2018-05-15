import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="data-container">
      <h3 className="name">{props.name}</h3>
      <h3 className="time">{props.time}</h3>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
