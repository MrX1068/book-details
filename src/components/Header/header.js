import React from 'react';

import './header.scss'
import Logo from '../../assets/bmuse_logo.png'
import Search from '../../assets/search.png'

const Header = () => {
    return(
      <div className="header">
           <div className='logo'>
               <img src={Logo} alt="company logo" />
           </div>
           <div className='search'>
           <img src={Search} alt="search icon" />
           </div>
      </div>
    )
}

export default Header;