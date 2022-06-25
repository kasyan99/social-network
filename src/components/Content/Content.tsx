import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../common/Preloader';
import styles from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';

const MessagesContainer = React.lazy(() => import('./Messages/MessagesContainer'))
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))
const LoginPage = React.lazy(() => import('../Login/Login'))

const Content: React.FC = () => {
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