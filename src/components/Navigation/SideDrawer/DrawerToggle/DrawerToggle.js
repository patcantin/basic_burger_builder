import React from 'react';

import burgerButton from '../../../../assets/images/original.png';
import classes from './DrawerToggle.module.scss';


const drawerToggle = (props) => (
  <img className={classes.DrawerToggle} src={burgerButton} onClick={props.clicked} alt="Toggle"/>
);

export default drawerToggle;
