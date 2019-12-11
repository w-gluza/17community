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
    <Link to={`/profile/${_id}`} className='see-more'>
      <article className='member-card'>
        <img className='avatar' src={avatar} alt='avatar'></img>
        <div>
          <h3>{name}</h3>
          {/* <p>
          {status} from {location && <span>{location}</span>}
        </p> */}
          <ul className='tags'>
            {interests.slice(0, 4).map((interests, index) => (
              <li key={index} className='tag'>
                {interests}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};

ProfilePreview.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilePreview;
