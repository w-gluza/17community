import React from 'react';
import mainIllustration from '../../assets/illustrations/00_community.svg';
import './Home.scss';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import data from '../../assets/data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const Home = () => {
  const classes = useStyles();
  const goals = data.goals;
  console.log(goals);
  return (
    <>
      <section className='section home'>
        <article className='article'>
          <h2>17 Community</h2>
          <p>Working together to build a better future for everyone.</p>
        </article>
        <figure className='figure'>
          <img src={mainIllustration} alt='test' />
        </figure>
        <section className='slider-section'>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={5}>
              {goals.map(({ page, title }) => (
                <GridListTile className='card' key={page}>
                  <span>{page}</span>
                  <p>{title}</p>
                </GridListTile>
              ))}
            </GridList>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
