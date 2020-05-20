import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

import classes from './Toolbar.module.scss';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
