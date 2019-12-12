import React from "react";
import PropTypes from "prop-types";
import Icon from "../../assets/icons/index";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";

const ProfileHeader = ({
  profile: {
    user: { name, avatar }, // object
    social,
    status,
    location,
    website,
    bio,
    interests
  }
}) => {
  return (
    <>
      <Card className="section__profile">
        <img className="profile__img" src={avatar} alt="avatar" />
        <article className="details">
          <h2>{name}</h2>
          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              {website}
            </Link>
          )}
          <div className="status__container">
            <p>{status}&nbsp;</p>
            {location && <p> | {location}</p>}
          </div>
          <div className="icons__container">
            {social && social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <Icon name="Facebook" alt="Facebook account" />
              </a>
            )}
            {social && social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <Icon name="Instagram" alt="" />
              </a>
            )}
            {social && social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <Icon name="LinkedIn" alt="" />
              </a>
            )}
          </div>
          <section>
            {bio && (
              <article className="bio">
                <p>{bio}</p>
              </article>
            )}

            {interests && (
              <div className="tags">
                {interests.map((interest, index) => (
                  <p className="tag" key={index}>
                    {interest}
                  </p>
                ))}
              </div>
            )}
          </section>
        </article>
      </Card>
    </>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
