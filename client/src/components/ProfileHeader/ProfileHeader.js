import React from 'react';
import PropTypes from 'prop-types';

const ProfileHeader = ({
  profile: {
    user: { name, avatar }, // object
    social: { facebook, instagram, linkedin }, // object
    status,
    location,
    website,
  },
}) => {
  return (
    <>
      {/* checking if not requried fields exist
      we do not want empty <p></p> */}

      <img src={avatar} alt='avatar' />
      <h4>User Name: {name}</h4>
      <p>Status: {status}</p>
      {facebook && (
        <a href={facebook} target='_blank' rel='noopener noreferrer'>
          facebook |
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target='_blank' rel='noopener noreferrer'>
          linkedin |
        </a>
      )}
      {instagram && (
        <a href={instagram} target='_blank' rel='noopener noreferrer'>
          instagram
        </a>
      )}

      {location && <p>Location: {location}</p>}
      {website && (
        <a href={website} target='_blank' rel='noopener noreferrer'>
          website
        </a>
      )}
    </>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileHeader;
