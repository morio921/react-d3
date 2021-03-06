import React from 'react';

import TwitterButton from './../TwitterButton/TwitterButton';

const Footer = () => (
  <footer className="footer container">
    <p>
      ©2015 - {(new Date()).getFullYear()} <a href="http://labs.topheman.com/">labs.topheman.com</a> - Christophe Rosset<br />
      <TwitterButton />
    </p>
  </footer>
);

export default Footer;
