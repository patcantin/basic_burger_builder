import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


// function App() {
//   return (
//     <div>
//       <Layout>
//         <BurgerBuilder />
//       </Layout>
//     </div>
//   );
// }



class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Make your own beer selection by filling the box" />
            <meta property="og:title" content="Sour Box" />
            <meta property="og:image" content="../public/logo192.png" />
          </MetaTags>
          <Layout>
            <BurgerBuilder />
            </Layout>
        </div>
      )
  }
}

export default App;


