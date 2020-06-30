import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UserInterface/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BottomDrawer from '../../components/Navigation/BottomDrawer/BottomDrawer';
import BottomToggle from '../../components/Navigation/BottomDrawer/DrawerToggle/BottomToggle';
import Spinner from '../../components/UserInterface/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';


const INGREDIENT_PRICES = {
  cow: 3.25,
  helix: 4.00,
  loop: 3.50,
  river: 3.75,
  tiki: 4.50
};


class BurgerBuilder extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ingredients: null,
      totalPrice: 0,
      purchasable: false,
      purchasing: false,
      showBottomDrawer: false,
      showHideStart: true,
      boxFull: false,
      loading: false,
      error: false
    }
  }

  componentDidMount () {
    console.log(this.props);
    axios.get('https://sourbox-c58f1.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState( { ingredients: response.data } );
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients) // [tomato, salad, bacon, cheese, meat]
      .map(igKey => {
        return ingredients[igKey]; // an array of value for each ingredients ex; [0,3,1,2,1]
      })
      .reduce((sum, el) => {
        return sum + el;    // return total of array items ex: 7 considering [0,3,1,2,1]
      }, 0);
    this.setState({
    purchasable:  sum == 4,
    boxFull: sum >= 4
    }) // set purcheasable to true or false
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
    // alert('Thank you for your order!');
    // this.setState( { loading: true } );
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Pat Cantin',
    //     address: {
    //       street: '85 Larose',
    //       zipCode: 'h2b3c4',
    //       country: 'Canada'
    //     },
    //     email: 'pat@gmail.com'
    //   },
    //   deliveryMethod: 'fastest'
    // }
    // axios.post('/orders.json', order)
    //   .then(response => {
    //     this.setState({ loading: false, purchasing: false })
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, purchasing: false })
    //   })
    this.props.history.push('/checkout');

  }

  closeBottomDrawerHandler = () => {
    this.setState( { showBottomDrawer: false } );
    this.setState( ( prevState ) => {
      return { showHideStart: !prevState.showHideStart };
    });
    console.log(this.state.showHideStart);

  };

  bottomDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showBottomDrawer: !prevState.showBottomDrawer };
    });
    this.setState( ( prevState ) => {
      return { showHideStart: !prevState.showHideStart };
    });
    console.log(this.state.showHideStart);
  }

  showHideStartHandler = () => {
    this.setState( ( prevState ) => {
      return { showHideStart: !prevState.showHideStart };
    });
    console.log(this.state.showHideStart);
  }




  render() {
    const disabledInfo = {
      ...this.state.ingredients // immutable copy of this.state.ingredients object
    }
    for (let key in disabledInfo) { // return true or false for each key in disabledInfo { salad: true, meat: false, ect...}
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    let burger = this.state.error ? <p>Products can't be loaded</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BottomToggle
           drawerToggleClicked={this.bottomDrawerToggleHandler}
           show={this.state.showHideStart} />
          <BottomDrawer
           open={this.state.showBottomDrawer}
           BottomDrawerClosed={this.closeBottomDrawerHandler}>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            maxReached={this.state.boxFull}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler} />
          </BottomDrawer>
        </Aux>
      );
      orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.cancelPurchaseHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice} />;
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);

