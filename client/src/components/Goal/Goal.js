import React from 'react';
const Goal = ({ goalData }) => {
  const { goalTitle, goalSubtitle, goalSrc, goalAlt } = goalData;
  return (
    <section className='goal'>
      <article className='goal-description'>
        <h3>{goalTitle}</h3>
        <p>{goalSubtitle} </p>
      </article>
      <img className='goal-img' src={goalSrc} alt={goalAlt} />
    </section>
  );
};
export default Goal;
