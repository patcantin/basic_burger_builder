import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.scss'

const controls = [
  { label: 'Cow', type: 'cow' },
  { label: 'Helix', type: 'helix' },
  { label: 'Loop', type: 'loop' },
  { label: 'River', type: 'river' },
  { label: 'Tiki', type: 'tiki' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        substract={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        full={props.maxReached} />
    ))}
    <p>Current price: {props.price.toFixed(2)} $</p>
    <button className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.ordered}>ORDER NOW!</button>
  </div>
);

export default buildControls;
