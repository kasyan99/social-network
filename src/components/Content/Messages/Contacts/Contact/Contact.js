import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Contact.module.css';


function Contact(props) {
   return (
      <li className={styles.contact}>
         <NavLink to={`/messages/${props.id}`} className={navData => navData.isActive ? styles.activeLink : ''}>{props.name}</NavLink>
      </li>
   )
}

export default Contact;