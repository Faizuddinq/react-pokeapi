import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="search-wrap">
      <img src="./assets/search.svg" alt="search" className="search-icon" />
      <input
        type="text"
        className="search-input body3-fonts"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <img
          src="./assets/cross.svg"
          alt="cross icon"
          className="search-close-icon"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default Search;
