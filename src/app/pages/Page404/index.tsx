import * as React from 'react';
import * as style from './style.css';

export default () => {
  return (
    <div className={style.wrappError}>
      <div>
        <span className={style.back}>
          Try to go back to the home page <a href="/">Home</a>
        </span>
        <h1 className={style.error}> 404</h1>
        <span className={style.pageNotFound}> Page not found</span>
      </div>
    </div>
  );
};
