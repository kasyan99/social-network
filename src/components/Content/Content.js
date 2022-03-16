import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Content.module.css';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';

function Content(props) {
   return (
      <main className={styles.content}>
         <Routes>
            <Route path="/profile" element={
               <Profile
                  profile={props.state.profile}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText}
               />}
            />
            <Route path="/messages" element={<Messages massages={props.state.massages} />} />
         </Routes>
      </main>
   )
}

export default Content;