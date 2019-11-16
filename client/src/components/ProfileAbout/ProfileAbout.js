import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({ profile: { bio, interests } }) => (
  <>
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
  </>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
