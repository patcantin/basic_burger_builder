import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  tomato: 0.25,
  salad: 0.5,
  cheese: 1,
  bacon: 0.7,
  meat: 1.3
}


class BurgerBuilder extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ingredients: {
        tomato: 0,
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    }
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) { // because negative values will crash the app
      return; // nothing happen
    }
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount
      const priceSubstract = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceSubstract;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      })
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients // immutable copy of this.state.ingredients object
    };
    for (let key in disabledInfo) { // return true or false for each key in disabledInfo { salad: true, meat: false, ect...}
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    console.log(disabledInfo);
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;

