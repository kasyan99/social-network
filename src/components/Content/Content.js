import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Content.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import Profile from './Profile/Profile';

function Content() {
   return (
      <main className={styles.content}>
         <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<MessagesContainer />} />
         </Routes>
      </main>
   )
}

export default Content;