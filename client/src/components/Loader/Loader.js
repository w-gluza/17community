import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {
  return (
    <figure className='loader'>
      <CircularProgress />
    </figure>
  );
}

export default Loader;
