import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div style={{textAlign: 'center'}}>
      <h1>We Are Farmers</h1>
      <a><Link to="/">Schedule</Link></a> | <a><Link to="/produce">Produce List</Link></a>
    </div>
  );
}

export default Header;
