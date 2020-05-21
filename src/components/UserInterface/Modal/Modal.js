import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.scss';

class Modal extends Component {
   // component turned to a class component only to use componentDidUpdate and shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true;
    }
  }
  // Modal component will update only if its content (OrderSummary component) is updated, see BurgerBuilder component.
  componentDidUpdate() {
    console.log('[Modal] DidUpdate');
  };

  render() {
    return(
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1': '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}


export default Modal;
