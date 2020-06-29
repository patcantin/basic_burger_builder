import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import classes from './Checkout.module.scss';

class Checkout extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ingredients: {
        cow: 1,
        helix: 1,
        loop: 1,
        river: 1,
        tiki: 1
      }
    }
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
