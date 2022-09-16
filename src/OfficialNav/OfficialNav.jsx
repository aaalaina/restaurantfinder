import React from 'react';
import logo from '../Pics/logo.jpeg';
import './OfficialNav.css';
import Search from '../Search/Search';
export default function OfficialNav() {
  return (
    <>
        <div className="official-nav">
        <img src={logo} alt='Hungery website logo' />
        <Search/>
        <button className="button">Sign In</button>
        <button className="button">Register</button>
        </div>
    </>
  )
}
