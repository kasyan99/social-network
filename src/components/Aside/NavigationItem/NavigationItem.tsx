import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

type ItemType = {
   linkName: string
   linkPath: string
}

const NavigationItem: React.FC<ItemType> = (props) => {
   return (
      <li className={classes.navigationItem}>
         <NavLink
            to={props.linkPath}
            className={navData => navData.isActive ? classes.activeLink : ''}
         >
            {props.linkName}
         </NavLink>
      </li>
   )
}

export default NavigationItem;