import React from 'react';

import classes from './Logo.module.scss';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}} onClick={props.clicked} >
    <p className={classes.Text}>Sour Box</p>
  </div>
);

export default logo;
