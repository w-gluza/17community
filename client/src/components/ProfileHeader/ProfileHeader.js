import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../assets/icons/index';
import Card from '@material-ui/core/Card';

const ProfileHeader = ({
  profile: {
    user: { name, avatar }, // object
    social: { facebook, instagram, linkedin }, // object
    status,
    location,
    website,
    bio,
    interests,
  },
}) => {
  return (
    <>
      <Card className='section__profile'>
        <img className='profile__img' src={avatar} alt='avatar' />
        <article>
          <h2>{name}</h2>

          <div className='status__container'>
            <p>{status}&nbsp;</p>
            {location && <p> | {location}</p>}
          </div>

          <div className='icons__container'>
            {facebook && (
              <a
                href={facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='icon'>
                <Icon name='Facebook' alt='Facebook account' />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='icon'>
                <Icon name='Instagram' alt='' />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='icon'>
                <Icon name='LinkedIn' alt='' />
              </a>
            )}
          </div>

          {website && (
            <a href={website} target='_blank' rel='noopener noreferrer'>
              {website}
            </a>
          )}
          <section>
            {bio && (
              <article>
                <p>{bio}</p>
              </article>
            )}

            {interests && (
              <ul className='tags'>
                {interests.map((interest, index) => (
                  <li className='tag' key={index}>
                    {interest}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </article>
      </Card>
    </>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileHeader;
