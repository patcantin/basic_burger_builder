import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.scss';

const layout = ( props ) => (
  <Aux>
    <div>To do : Toolbar, Side Drawer</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>

);

export default layout;
