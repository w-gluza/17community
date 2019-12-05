import React from "react";
import PropTypes from "prop-types";
import Icon from "../../assets/icons/index";

const ProfileHeader = ({
  profile: {
    user: { name, avatar }, // object
    social: { facebook, instagram, linkedin }, // object
    status,
    location,
    website,
    bio,
    interests
  }
}) => {
  return (
    <>
      <section className="section__profile">
        <img className="profile__img" src={avatar} alt="avatar" />
        <article>
          <h2>{name}</h2>
          <div className="status__container">
            <p>{status}&nbsp;</p>
            {location && <p> | {location}</p>}
          </div>
          {/* checking if not requried fields exist
      we do not want empty <p></p> */}
          <div className="icons__container">
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <Icon name="Facebook" alt="Facebook account" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <Icon name="Instagram" alt="" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <Icon name="LinkedIn" alt="" />
              </a>
            )}
          </div>
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          )}
          {bio && (
            <section>
              <article>{bio}</article>
              <article>
                {interests.map((interest, index) => (
                  <p key={index}>{interest}</p>
                ))}
              </article>
            </section>
          )}
        </article>
      </section>
    </>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
