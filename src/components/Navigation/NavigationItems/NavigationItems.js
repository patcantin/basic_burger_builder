import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.scss';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Our Catalog</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
