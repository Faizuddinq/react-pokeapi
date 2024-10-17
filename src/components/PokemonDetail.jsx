import React, { useState, useEffect } from 'react';
import Stats from './Stats';
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const PokemonDetail = ({ pokemon }) => {
  const [details, setDetails] = useState(null);
  const pokemonID = pokemon.url.split('/')[6];

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
      const data = await res.json();
      setDetails(data);
    };

    fetchDetails();
  }, [pokemonID]);

  if (!details) return <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '80vh' 
  }}>
    <AiOutlineLoading3Quarters
    className="rotating" style={{ fontSize: '80px', color: 'white' }}
  />
  </div>;

  const { name, id, types, weight, height, abilities, stats } = details;
  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <main className="detail-main main">
      <header className="header">
        <div className="header-wrapper">
          <div className="header-wrap">
            <a href="./index.html" className="back-btn-wrap">
              <FaArrowLeft className="back-btn" id='back-btn' />
            </a>
            <div className="name-wrap">
              <h1 className="name">{capitalizeFirstLetter(name)}</h1>
            </div>
          </div>
          <div className="pokemon-id-wrap">
            <p className="body2-fonts">#{String(id).padStart(3, '0')}</p>
          </div>
        </div>
      </header>
      <div className="featured-img">
        <div className="detail-img-wrapper">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={name} />
        </div>
      </div>
      <div className="detail-card-detail-wrapper">
        <div className="power-wrapper">
          {types.map(type => (
            <div className={`btn ${type.type.name}`} key={type.type.name}>
              <p className="button-fonts">{type.type.name}</p>
            </div>
          ))}
        </div>
        <div className="pokemon-detail-wrap">
          <div className="height-wrap">
          
            <p className="title-fonts">Height:{height / 10} m</p>
            
          </div>
          <div className="weight-wrap">
            <p className="title-fonts">Weight: {weight / 10} kg</p>
            <p className="body2-fonts"></p>
          </div>
          <div className="ability-wrap">
            <br />
            <p className="title-fonts">Abilities & Moves</p>
            <ul>
              {abilities.map(ability => (
                <li key={ability.ability.name} className="body2-fonts">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />
        <Stats stats={stats} />
      </div>
    </main>
  );
};

export default PokemonDetail;



