import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UserInterface/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import classes from './SideDrawer.module.scss';

import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open];
  }
  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.sideDrawerClosed} />
      <div className={attachClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
