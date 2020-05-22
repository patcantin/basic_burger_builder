import React, { Component } from 'react';

import Backdrop from '../../UserInterface/Backdrops/Backdrop';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Aux from '../../../hoc/Aux';

import classes from './BottomDrawer.module.scss';
class BottomDrawer extends Component {
  render() {
    let attachClasses = [classes.BottomDrawer, classes.Close];
    if (this.props.open) {
    attachClasses = [classes.BottomDrawer, classes.Open];
    }
    return(
      <Aux>
        <Backdrop show={this.props.open} clicked={this.props.BottomDrawerClosed} />
        <div className={attachClasses.join(' ')}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}


export default BottomDrawer;
