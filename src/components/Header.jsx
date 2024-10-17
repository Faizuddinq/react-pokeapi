import React from 'react';
import Search from './Search';
import { MdOutlineCatchingPokemon } from "react-icons/md";


const Header = ({ onSearch, onSort }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
        <MdOutlineCatchingPokemon style={{ height: '40px', width: '40px',  color: 'white' }} className='logo-react-icon' />
          <h1>Pokédex</h1>
        </div>
        <div className="search-wrapper">
          <Search onSearch={onSearch} />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
