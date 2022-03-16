import React from 'react';
import classes from './Aside.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const menuList = (props) => {
   return props.aside.menuList.map(
      menuItem => <NavigationItem linkName={menuItem.linkName} linkPath={menuItem.linkPath} />
   )
}

function Aside(props) {
   return (
      <aside className={classes.aside}>
         <nav>
            <ul>
               {menuList(props)}
            </ul>
         </nav>
      </aside>
   )
}

export default Aside;