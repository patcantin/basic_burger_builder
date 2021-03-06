import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.scss';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
  <DrawerToggle clicked={props.drawerToggleClicked}>
    <div className={classes.Logo}>
      <Logo />
    </div>
   </DrawerToggle>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
