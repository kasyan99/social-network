import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../Login/Login';
import styles from './Content.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';


function Content() {
   return (
      <main className={styles.content}>
         <Routes>
            <Route path="/profile/" element={<ProfileContainer />}>
            </Route>
            <Route path="/profile/">
               <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/login/*" element={<LoginPage />} />
         </Routes>
      </main>
   )
}

export default Content;