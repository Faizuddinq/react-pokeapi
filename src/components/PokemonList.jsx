import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, onSelect }) => {
  return (
    <section className="pokemon-list">
      <div className="container">
        <div className="list-wrapper">
          {pokemons.map(pokemon => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} onSelect={onSelect} />
          ))}
        </div>
        {pokemons.length === 0 && <div id="not-found-message">Pokemon not found</div>}
      </div>
    </section>
  );
};

export default PokemonList;
