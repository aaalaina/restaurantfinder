import React from 'react';
import NavTop from '../NavTop/NavTop';
import './MainPage.css';
import logo from '../Pics/logo.jpeg'
import Search from '../Search/Search';
import {useNavigate} from 'react-router-dom';
// import GMaps from '../Maps/GMaps';
export default function MainPage() {
  const navigate = useNavigate();
  function search(term, location){
    navigate('');
  }
  return (
    <div>
        <NavTop/>
        <div className="search-area">
        <img src={logo} alt='logo' className='logo'></img>
        <Search/>
        {/* <GMaps/> */}
      </div>
    </div>
  )
}
