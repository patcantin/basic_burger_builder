import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.scss';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients) //return an array of keys [salad, bacon, cheese, meat]
      .map(igKey => { //mapping an array for each array items above
        return [...Array(props.ingredients[igKey])].map((_, i) => { //[Array(1), Array(1), Array(2), Array(4)]
          return <BurgerIngredient key={igKey + i} type={igKey} />
          // each array content Objects, 2 if 2 meat including key and type [{}, {}}
        });
      });
      //console.log(transformedIngredients);
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
