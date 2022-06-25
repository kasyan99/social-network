import React from 'react';
import styles from './Container.module.css';

type Props = {
   stretch?: boolean
   element: any
}

const Container: React.FC<Props> = (props) => {
   return (
      <div className={`${styles.container} ${props.stretch ? styles.container_stretch : ''}`}>
         {props.element}
      </div>
   )
}

export default Container;