import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src="images/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
