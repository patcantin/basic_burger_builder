import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';


class App extends Component {

  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>SourBox</title>
            <meta name="description" content="Make your own beer selection by filling the box" />
            <meta property="og:title" content="Sour Box" />
            <meta property="og:image" content="../public/logo192.png" />
          </MetaTags>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/" component={BurgerBuilder} />
            </Switch>
          </Layout>
        </div>
      )
  }
}

export default App;


