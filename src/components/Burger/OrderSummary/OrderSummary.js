import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UserInterface/Button/Button';

class OrderSummary extends Component {
  // component turned to a class component only to use componentDidUpdate
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  };

  constructor (props) {
    super(props);

    this.state = {


    }
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients) // [salad, meat, bacon, ect....]
      .map(igKey => { // for each ingredients, i return his name {igKey} + number of ingredients {this.props.ingredients[igKey]}
        return (
          <li key={igKey}>
            <span>{igKey}</span> : {this.props.ingredients[igKey]}
          </li>
        );
      });

    console.log(ingredientSummary);

    return(
      <Aux>
        <h3>Your Sour beer Box</h3>
        <p>Here's your selection:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <h3>Total: {this.props.price.toFixed(2)}$</h3>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.continue}>Buy</Button>
      </Aux>
    );
  }
}


export default OrderSummary;
