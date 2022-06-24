import React from 'react';
import { ContactType } from '../../../../reduxF/messsages-reducer';
import Contact from './Contact/Contact';
import styles from './Contacts.module.css';

type Props = {
   contactsList: Array<ContactType>
}

const Contacts: React.FC<Props> = (props) => {
   return (
      <div className={styles.contacts}>
         <ul className='contacts__list'>
            {props.contactsList.map(
               contact => <Contact id={contact.id} name={contact.name} key={contact.id} />
            )}
         </ul>
      </div>
   )
}

export default Contacts;