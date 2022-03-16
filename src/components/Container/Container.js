import React from 'react';
import styles from './Container.module.css';

function Container(props) {
   return (
      <div className={`${styles.container} ${props.stretch ? styles.container_stretch : ''}`}>
         {props.element}
      </div>
   )
}

export default Container;