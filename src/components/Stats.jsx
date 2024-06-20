import React from 'react';

const Stats = ({ stats }) => {
  const statNameMapping = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  }

  return (
    <div className="stats-wrapper">
      {stats.map((stat) => (
        <div key={stat.stat.name} className="stats-wrap" data-stat={stat.stat.name}>
          <p className="body3-fonts stats">{statNameMapping[stat.stat.name]}</p>
          <p className="body3-fonts">{stat.base_stat}</p>
          <progress className="progress-bar" value={stat.base_stat} max={100}></progress>
        </div>
      ))}
    </div>
  );
};

export default Stats;
