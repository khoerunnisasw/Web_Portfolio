import React from 'react';
import './Footer.css'; // Make sure to style the footer in this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&#169; {new Date().getFullYear()} Khoerunnisa Somawijaya - NRP: 152023096</p>
    </footer>
  );
};

export default Footer;
