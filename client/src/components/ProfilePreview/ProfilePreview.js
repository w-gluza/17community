import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const ProfilePreview = ({
  profile: {
    user: { _id, name, avatar },
    status,
    location,
    interests,
  },
}) => {
  return (
    <Card>
      <CardActionArea>
        <Link to={`/profile/${_id}`}>
          <article className='member-card'>
            <img className='avatar' src={avatar} alt='avatar'></img>
            <div>
              <h3>{name}</h3>
              <div className='status__container'>
                <p>{status}&nbsp;</p>
                {location && <p> | {location}</p>}
              </div>
            </div>
            <div className='tags'>
              {interests.slice(0, 4).map((interests, index) => (
                <p key={index} className='tag'>
                  {interests}
                </p>
              ))}
            </div>
          </article>
        </Link>
      </CardActionArea>
    </Card>
  );
};

ProfilePreview.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilePreview;
