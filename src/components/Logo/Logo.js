import React from 'react';

import burgerLogo from '../../assets/images/original.png';

import classes from './Logo.module.scss';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <p className={classes.Text}>Sour Box</p>
  </div>
);

export default logo;
