import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Contact.module.css';

type Props = {
   id: number
   name: string
}

const Contact: React.FC<Props> = (props) => {
   return (
      <li className={styles.contact}>
         <NavLink to={`/messages/${props.id}`} className={navData => navData.isActive ? styles.activeLink : ''}>{props.name}</NavLink>
      </li>
   )
}

export default Contact;