import React from 'react';
import Contact from './Contact/Contact';
import styles from './Contacts.module.css';

function Contacts(props) {
   return (
      <div className={styles.contacts}>
         <ul className='contacts__list'>
            {props.contactsList.map(
               contact => <Contact id={contact.id} name={contact.name} />
            )}
         </ul>
      </div>
   )
}

export default Contacts;