import React from 'react';
import styles from './Dialog.module.css';

function Dialog(props) {
   return (
      <div className={styles.dialog}>
         <p>Hello</p>
         <p>What areayou doing</p>
         <p>Nothing</p>
      </div>
   )
}

export default Dialog;