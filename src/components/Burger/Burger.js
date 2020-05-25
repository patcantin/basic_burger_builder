import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Box from '../../assets/images/box.jpeg';

import classes from './Burger.module.scss';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) //return an array of keys [salad, bacon, cheese, meat]
      .map(igKey => { //mapping an array for each array items above
        return [...Array(props.ingredients[igKey])].map((_, i) => { //[Array(1), Array(1), Array(2), Array(4)]
          return <BurgerIngredient key={igKey + i} type={igKey} />
          // each array content Objects, 2 if 2 meat including key and type [{}, {}}
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el)
        // returns the length of transformed ingrediens arry by counting/concat his number of objects
      }, []);

      console.log(transformedIngredients);

  if (transformedIngredients.length === 0) { // if transformedIngredients empty
      transformedIngredients = <p>Fill me!</p>
  }

  return(
    <div className={classes.Box}>
      <img className={classes.Box} src={Box} alt="box"/>
      <ul>
        <li>{transformedIngredients}</li>
      </ul>

    </div>
  );
};

export default burger;
