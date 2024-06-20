import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=649`)
      .then(response => response.json())
      .then(data => {
        setAllPokemons(data.results);
        setFilteredPokemons(data.results);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = allPokemons.filter(pokemon => 
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  const handleSort = (sortType) => {
    const sorted = [...filteredPokemons].sort((a, b) => {
      if (sortType === 'number') {
        return a.url.split('/')[6] - b.url.split('/')[6];
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setFilteredPokemons(sorted);
  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="main">
      <Header onSearch={handleSearch} onSort={handleSort} />
      {selectedPokemon ? (
        <PokemonDetail pokemon={selectedPokemon} />
      ) : (
        <PokemonList pokemons={filteredPokemons} onSelect={handleSelectPokemon} />
      )}
    </div>
  );
};

export default App;
