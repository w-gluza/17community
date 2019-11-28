import React, { useState } from 'react';
import data from '../../assets/data';
import Goal from '../Goal/Goal';

const Home = () => {
  const goals = data.goals;

  const initialData = {
    title: '17 Community',
    subtitle: 'Working together to build a better future for everyone.',
    src: 'illustrations/00_community.svg',
    alt: 'community',
    page: '0',
  };
  const [goalData, setgoalData] = useState({
    goalTitle: initialData.title,
    goalSubtitle: initialData.subtitle,
    goalSrc: initialData.src,
    goalAlt: initialData.alt,
  });
  return (
    <section className='section home'>
      <section className='goal-container'>
        <Goal goalData={goalData} />
      </section>
      <section className='slider'>
        {goals.map(({ title, subtitle, src, alt, page }) => (
          <div
            className='slide'
            key={page}
            onClick={() =>
              setgoalData({
                goalTitle: title,
                goalSubtitle: subtitle,
                goalSrc: src,
                goalAlt: alt,
              })
            }>
            <h4>{page}</h4>
            <span>{title}</span>
          </div>
        ))}
      </section>
    </section>
  );
};
export default Home;
