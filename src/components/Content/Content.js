import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Content.module.css';
// import Messages from './Messages/Messages';
import MessagesContainer from './Messages/MessagesContainer';
import Profile from './Profile/Profile';

function Content(props) {
   return (
      <main className={styles.content}>
         <Routes>
            <Route path="/profile" element={
               <Profile
                  profile={props.store._state.profile}
                  dispatch={props.store.dispatch.bind(props.store)}
               />}
            />
            {/* <Route path="/messages" element={<Messages massages={props.store.getState().massages} dispatch={props.store.dispatch.bind(props.store)} />} /> */}
            <Route path="/messages"
               element={<MessagesContainer
                  massages={props.store.getState().massages}
                  dispatch={props.store.dispatch.bind(props.store)}
               />}
            />
         </Routes>
      </main>
   )
}

export default Content;