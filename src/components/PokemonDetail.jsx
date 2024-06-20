import React, { useState, useEffect } from 'react';
import Stats from './Stats';
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

  if (!details) return <div>Loading...</div>;

  const { name, id, types, weight, height, abilities, stats } = details;
  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <main className="detail-main main">
      <header className="header">
        <div className="header-wrapper">
          <div className="header-wrap">
            <a href="./index.html" className="back-btn-wrap">
              <img src="./assets/back-to-home.svg" alt="back to home" className="back-btn" id='back-btn' />
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
        {/* <div className="stats-wrapper">
          <h2 className="stats-title title-fonts">Stats</h2>
          {stats.map(stat => (
            <div key={stat.stat.name} className="stats-wrap">
              <p className="body2-fonts">{stat.stat.name}</p>
              <div className="stat-bar">
                <div className="stat-value" style={{ width: `${stat.base_stat}%` }}></div>
              </div>
              <progress value="" max="100" className="progress-bar"></progress>
              <p className="body2-fonts">{stat.base_stat}</p>
            </div>
          ))}
        </div> */}
      </div>
    </main>
  );
};

export default PokemonDetail;

// import React, { useEffect } from 'react';

// import Stats from './Stats';

// const PokemonDetail = ({ pokemon }) => {
//   const { name, id, types, weight, height, abilities, stats } = pokemon.pokemon;
//   const { flavor_text_entries } = pokemon.species;

//   useEffect(() => {
//     document.title = `${name} Details`;
//   }, [name]);

//   const getEnglishFlavorText = () => {
//     for (let entry of flavor_text_entries) {
//       if (entry.language.name === "en") {
//         let flavor = entry.flavor_text.replace(/\f/g, " ");
//         return flavor;
//       }
//     }
//     return "";
//   };

//   return (
//     <main className={`detail-main main ${name.toLowerCase()}`}>
      
//       <div className="featured-img">
//         <div className="detail-img-wrapper">
//           <img
//             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
//             alt={name}
//           />
//         </div>
//       </div>
//       <div className="detail-card-detail-wrapper">
//         <div className="power-wrapper">
//           {types.map((type) => (
//             <p key={type.type.name} className={`body3-fonts type ${type.type.name}`}>
//               {type.type.name}
//             </p>
//           ))}
//         </div>
//         <p className="body2-fonts about-text">About</p>
//         <div className="pokemon-detail-wrapper">
//           <div className="pokemon-detail-wrap">
//             <p className="caption-fonts">Weight</p>
//             <div className="pokemon-detail">
//               <img src="./assets/weight.svg" alt="weight" />
//               <p className="body3-fonts weight">{weight / 10}kg</p>
//             </div>
//           </div>
//           <div className="pokemon-detail-wrap">
//             <p className="caption-fonts">Height</p>
//             <div className="pokemon-detail">
//               <img src="./assets/height.svg" alt="height" className="straighten" />
//               <p className="body3-fonts height">{height / 10}m</p>
//             </div>
//           </div>
//           <div className="pokemon-detail-wrap">
//             <p className="caption-fonts">Moves</p>
//             <div className="pokemon-detail move">
//               {abilities.map((ability) => (
//                 <p key={ability.ability.name} className="body3-fonts">
//                   {ability.ability.name}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//         <p className="body3-fonts pokemon-description">{getEnglishFlavorText()}</p>
//         <p className="body2-fonts about-text">Base Stats</p>
//         <Stats stats={stats} />
//       </div>
//       <img src="./assets/pokedex.svg" alt="pokedex" className="detail-bg" />
//     </main>
//   );
// };

// export default PokemonDetail;

