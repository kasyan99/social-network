import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Content.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';


function Content() {
   return (
      <main className={styles.content}>
         <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
         </Routes>
      </main>
   )
}

export default Content;