import React from 'react';

import Aux from '../../../hoc/Aux';

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
    </Aux>
  )

};

export default orderSummary;
