import React from 'react';

import classes from './ModalBackdrop.module.scss';

const backdrop = (props) => (
  props.show ? <div className={classes.ModalBackdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
