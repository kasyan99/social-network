import React from 'react';
import Container from '../Container/Container';
import classes from './Footer.module.css';

function Footer() {
   return (
      <footer className={classes.footer}><Container element={<div>Footer</div>} /></footer>
   )
}

export default Footer;