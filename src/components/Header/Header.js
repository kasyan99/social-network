import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import classes from './Header.module.css';

function Header(props) {
   return (
      <header className={classes.header}>
         <Container
            element={
               <div className={classes.header__row}>
                  <div className={classes.header__col}>
                     <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt='logo' />
                     <p>SocialNetwork</p>
                  </div>
                  <div className={classes.header__col}>
                     {props.isAuth
                        ? <span><span>{props.login}</span> <button onClick={props.logout}>logout</button></span>
                        : <NavLink to='/login' className={classes.login}>login</NavLink>}
                  </div>
               </div>
            }
         />
      </header>
   )
}

export default Header;