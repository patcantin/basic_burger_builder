import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.scss';

const controls = [
  { label: 'Cow', type: 'cow', photo: require("../../../assets/images/cowsure.png")},
  { label: 'Helix', type: 'helix', photo: require("../../../assets/images/helix.png")},
  { label: 'Loop', type: 'loop', photo: require("../../../assets/images/loop.png")},
  { label: 'River', type: 'river', photo: require("../../../assets/images/river.png")},
  { label: 'Tiki', type: 'tiki', photo: require("../../../assets/images/tiki_sour.png")}
];

const buildControls = (props) => (
  <div className={classes.Build}>
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          photo={ctrl.photo}
          added={() => props.ingredientAdded(ctrl.type)}
          substract={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          full={props.maxReached} />
      ))}
    </div>
      <p>Current price: {props.price.toFixed(2)} $</p>
      <button className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>ORDER NOW!</button>
  </div>
);

export default buildControls;
