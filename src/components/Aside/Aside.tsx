import React from 'react';
import classes from './Aside.module.css';
import { ItemListType } from './AsideContainer';

const Aside: React.FC<ItemListType> = (props) => {
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