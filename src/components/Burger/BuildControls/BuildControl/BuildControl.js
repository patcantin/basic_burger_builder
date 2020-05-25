import React from 'react';

import classes from './BuildControl.module.scss';


const buildControl = (props) => (
  <div  className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.More}
      onClick={props.added}
      disabled={props.full}>+</button>
    <button
      className={classes.Less}
      onClick={props.substract}
      disabled={props.disabled}>-</button>
  </div>
)
export default buildControl;
