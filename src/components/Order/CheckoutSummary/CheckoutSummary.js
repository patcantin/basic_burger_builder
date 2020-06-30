import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UserInterface/Button/Button';

import classes from './CheckoutSummary.module.scss';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div style={{width:'100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <div className={classes.ConfirmButton}>
      <Button
          btnType="Danger"
          clicked={props.checkoutCancelled}>Cancel</Button>
      <Button
          btnType="Succes"
          clicked={props.checkoutContinued}>Continue</Button>
      </div>
      <h1>We hope it tatse well</h1>

    </div>
  );

}

export default checkoutSummary;

