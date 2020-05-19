import React from 'react';

import classes from './Toolbar.module.scss';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div>Logo</div>
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;
