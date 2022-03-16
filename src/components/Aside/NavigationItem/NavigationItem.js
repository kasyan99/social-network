import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
   return (
      <li className={classes.navigationItem}><NavLink to={props.linkPath} className={navData => navData.isActive ? classes.activeLink : ''}>{props.linkName}</NavLink></li>
      // <li className={classes.navigationItem}><a href={props.nav_to}>{props.nav_name}</a></li>

   )
}

export default NavigationItem;