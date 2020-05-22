import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss'
import Amstel from '../../../assets/images/amstel.png';

class BurgerIngredient extends Component {
  render() {
    let brand = null;

    switch (this.props.type) {
      case ('amstel'):
        brand = <div className={classes.Amstel}>
        <img src={Amstel} alt="amstel" />
        </div>;
        break;
      case ('cheese'):
        brand = <div className={classes.Cheese}>
        </div>;
        break;
      case ('tomato'):
        brand = <div className={classes.Tomato}>
        </div>;
        break;
      case ('salad'):
        brand = <div className={classes.Salad}>
        </div>;
        break;
      case ('bacon'):
        brand = <div className={classes.Bacon}>
        </div>;
        break;
      default:
        brand = null;
    }
    return brand;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};


export default BurgerIngredient;
