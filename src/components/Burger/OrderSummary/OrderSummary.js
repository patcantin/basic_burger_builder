import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UserInterface/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients) // [salad, meat, bacon, ect....]
      .map(igKey => { // for each ingredients, i return his name {igKey} + number of ingredients {props.ingredients[igKey]}
        return (
          <li key={igKey}>
            <span>{igKey}</span> : {props.ingredients[igKey]}
          </li>
        );
      });

console.log(ingredientSummary);
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredints of your burger:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.continue}>Buy</Button>
    </Aux>
  )

};

export default orderSummary;
