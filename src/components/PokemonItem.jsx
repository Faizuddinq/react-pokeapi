import React from 'react';

const PokemonItem = ({ pokemon, onSelect }) => {
  const pokemonID = pokemon.url.split('/')[6];

  return (
    <div className="list-item" onClick={() => onSelect(pokemon)}>
      <div className="number-wrap">
        <p className="caption-fonts">#{pokemonID}</p>
      </div>
      <div className="img-wrap">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`} alt={pokemon.name} />
      </div>
      <div className="name-wrap">
        <p className="body3-fonts">{pokemon.name}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
