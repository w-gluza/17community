import React, { useState } from 'react';
import './Home.scss';
import data from '../../assets/data';
import Goal from '../Goal/Goal';

const Home = () => {
  const goals = data.goals;

  const initialData = {
    title: '17 community',
    subtitle: 'Working together to build a better future for everyone.',
    src: 'illustrations/00_community.svg',
    alt: 'community',
    page: '0',
  };
  const [goalData, setGoalData] = useState({
    goalTitle: initialData.title,
    goalSubtitle: initialData.subtitle,
    goalSrc: initialData.src,
    goalAlt: initialData.alt,
  });
  return (
    <section className='section section__home'>
      <Goal goalData={goalData} />
      <section className='slider'>
        {goals.map(({ title, subtitle, src, alt, page }) => (
          <div
            className='card'
            key={page}
            onClick={() =>
              setGoalData({
                goalTitle: title,
                goalSubtitle: subtitle,
                goalSrc: src,
                goalAlt: alt,
              })
            }>
            <span>{page}</span>
            <p>{title}</p>
          </div>
        ))}
      </section>
    </section>
  );
};
export default Home;
