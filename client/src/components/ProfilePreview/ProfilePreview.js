import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfilePreview = ({
  profile: {
    user: { _id, name, avatar },
    status,
    location,
    interests,
  },
}) => {
  return (
    <article className='member-card'>
      <img src={avatar} alt='avatar'></img>
      <div>
        <h3>{name}</h3>
        <p>{status}</p>
        <p>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`}>See Profile</Link>
        <ul className='tags'>
          {interests.slice(0, 4).map((interests, index) => (
            <li key={index}>{interests}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

ProfilePreview.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilePreview;
