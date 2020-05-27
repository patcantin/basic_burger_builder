import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import Linkedin from '../../../assets/images/linkedin.png';
import Github from '../../../assets/images/github.png';

import classes from './NavigationItems.module.scss';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="https://github.com/patcantin"><img className={classes.Img} src={Github} alt="gitHub"/></NavigationItem>
    <NavigationItem link="https://www.linkedin.com/in/patrice-cantin/" active><img className={classes.Img} src={Linkedin} alt="linkedIn"/></NavigationItem>
  </ul>
);

export default navigationItems;
