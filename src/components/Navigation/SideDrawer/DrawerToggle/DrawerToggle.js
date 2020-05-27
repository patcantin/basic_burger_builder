import React from 'react';

import burgerButton from '../../../../assets/images/logo_can.png';
import classes from './DrawerToggle.module.scss';


const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
      <img  src={burgerButton}  alt="Toggle"/>
      <p className={classes.Text}>Sour Box</p>
  </div>

);

export default drawerToggle;
