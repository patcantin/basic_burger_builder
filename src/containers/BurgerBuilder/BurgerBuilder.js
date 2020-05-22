import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UserInterface/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BottomDrawer from '../../components/Navigation/BottomDrawer/BottomDrawer';
import BottomToggle from '../../components/Navigation/BottomDrawer/DrawerToggle/BottomToggle';


const INGREDIENT_PRICES = {
  tomato: 0.25,
  salad: 0.5,
  cheese: 1,
  bacon: 0.7,
  amstel: 1.3
};


class BurgerBuilder extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ingredients: {
        tomato: 0,
        salad: 0,
        bacon: 0,
        cheese: 0,
        amstel: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      showBottomDrawer: false
    }
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients) // [tomato, salad, bacon, cheese, meat]
      .map(igKey => {
        return ingredients[igKey]; // an array of value for each ingredients ex; [0,3,1,2,1]
      })
      .reduce((sum, el) => {
        return sum + el;    // return total of array items ex: 7 considering [0,3,1,2,1]
      }, 0);
    this.setState({purchasable: sum > 0}) // set purcheasable to true or false
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
    this.updatePurchaseState(updatedIngredients);
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
      this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  cancelPurchaseHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('You continue');
  }

  closeBottomDrawerHandler = () => {
    this.setState( { showBottomDrawer: false } );
  };

  bottomDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showBottomDrawer: !prevState.showBottomDrawer };
    });
  }


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
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.cancelPurchaseHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BottomToggle drawerToggleClicked={this.bottomDrawerToggleHandler} />
        <BottomDrawer
          open={this.state.showBottomDrawer}
          BottomDrawerClosed={this.closeBottomDrawerHandler}>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler} />
        </BottomDrawer>
      </Aux>
    );
  }
}

export default BurgerBuilder;

