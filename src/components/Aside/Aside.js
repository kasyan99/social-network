import React from 'react';
import classes from './Aside.module.css';

function Aside(props) {

   return (
      <aside className={classes.aside}>
         <nav>
            <ul>
               {props.itemList}
            </ul>
         </nav>
      </aside>
   )
}


export default Aside;