import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss'
import Cow from '../../../assets/images/cowsure.png';
import Helix from '../../../assets/images/helix.png';
import Loop from '../../../assets/images/loop.png';
import River from '../../../assets/images/river.png';
import Tiki from '../../../assets/images/tiki_sour.png';

class BurgerIngredient extends Component {
  render() {
    let brand = null;

    switch (this.props.type) {
      case ('cow'):
        brand = <div className={classes.Cow}>
        <img src={Cow} alt="cow" />
        </div>;
        break;
      case ('helix'):
        brand = <div className={classes.Helix}>
        <img src={Helix} alt="helix" />
        </div>;
        break;
      case ('loop'):
        brand = <div className={classes.Loop}>
        <img src={Loop} alt="loop" />
        </div>;
        break;
      case ('river'):
        brand = <div className={classes.River}>
        <img src={River} alt="river" />
        </div>;
        break;
      case ('tiki'):
        brand = <div className={classes.Tiki}>
        <img src={Tiki} alt="tiki" />
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
