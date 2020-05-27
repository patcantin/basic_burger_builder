import React from 'react';

import classes from './BottomToggle.module.scss';


const buttomToggle = (props) => (
  <div className={classes.ButtomToggle}>
    <button onClick={props.drawerToggleClicked}>Start !</button>
  </div>

);

export default buttomToggle;
