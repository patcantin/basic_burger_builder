import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.scss';

class Layout extends Component {
  constructor (props) {
    super(props);

    this.state = {
      visible: true
  }
}

  closeSideDrawerHandler = () => {
    this.setState({visible: false});
  };

  render() {
    return(
      <Aux>
        <Toolbar />
        <SideDrawer open={this.state.visible} sideDrawerClosed={this.closeSideDrawerHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
