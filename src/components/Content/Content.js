import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../common/Preloader';
// import LoginPage from '../Login/Login';
import styles from './Content.module.css';
// import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
// import UsersContainer from './Users/UsersContainer';

const MessagesContainer = React.lazy(() => import('./Messages/MessagesContainer'))
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))
const LoginPage = React.lazy(() => import('../Login/Login'))

function Content() {
   return (
      <main className={styles.content}>
         <Suspense fallback={<Preloader />}>
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
         </Suspense>
      </main>
   )
}

export default Content;