import React from 'react';

const Goal = ({ goalData }) => {
  const { goalTitle, goalSubtitle, goalSrc, goalAlt } = goalData;
  console.log('goalDsta', goalData);
  return (
    <>
      <p>{goalTitle}</p>
      <p>{goalSubtitle} </p>
      <img src={goalSrc} alt={goalAlt} />
    </>
  );
};
export default Goal;
