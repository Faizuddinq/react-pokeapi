import React from 'react';
import Search from './Search';


const Header = ({ onSearch, onSort }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <img src="./assets/pokeball.svg" alt="pokeball" />
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
