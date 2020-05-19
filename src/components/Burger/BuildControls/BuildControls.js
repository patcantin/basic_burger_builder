import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.scss'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' },
  { label: 'Tomato', type: 'tomato' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        substract={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <p>Current price: {props.price.toFixed(2)} $</p>
    <button className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.ordered}>ORDER NOW!</button>
  </div>
);

export default buildControls;
