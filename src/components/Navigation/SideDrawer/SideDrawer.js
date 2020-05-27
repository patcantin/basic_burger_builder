import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UserInterface/Backdrops/Backdrop';
import Aux from '../../../hoc/Aux';

import classes from './SideDrawer.module.scss';

import Wagon from '../../../assets/images/wagon.jpeg'

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
      <div className={classes.Projects}>
        <h2 className={classes.Title}>Infos & projects</h2>
        <div className={classes.Project}>
          <img src={Wagon} alt="leWagon"/>
        </div>
        <div className={classes.Project}>
          <a href="http://www.papelitos.fun/users/sign_in" target="_blank">Papelitos</a>
          <p>A game in Rails</p>
        </div>
        <div className={classes.Project}>
          <a href="https://mistercocktail7777.herokuapp.com/">Mix-A-Lot</a>
          <p>Share your favorite Cocktails (Rails)</p>
        </div>
        <div className={classes.Project}>
          <a href="https://airbnb-clone-partybus.herokuapp.com/" target="_blank">PartyBus</a>
          <p>An AirBnB clone in Rails</p>
        </div>
      </div>
        <nav className={classes.Nav}>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
