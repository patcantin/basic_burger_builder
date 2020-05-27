import React, { Component } from 'react';

import Aux from '../../../../hoc/Aux';

import classes from './BottomToggle.module.scss';


class ButtomToggle extends Component {
  render() {
     let attachClasses = [classes.ButtomToggle, classes.Hide];
      if (this.props.show) {
      attachClasses = [classes.ButtomToggle, classes.Show];
     }
    return (
      <Aux>
        <div className={attachClasses.join(' ')}>
          <button onClick={this.props.drawerToggleClicked}>Start !</button>
        </div>
      </Aux>
    );
  }
}

export default ButtomToggle;

