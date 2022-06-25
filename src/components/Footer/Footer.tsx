import React from 'react';
import Container from '../Container/Container';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
   return (
      <footer className={classes.footer}><Container element={<div>Footer</div>} /></footer>
   )
}

export default Footer;