import React from 'react';

function PokemonItem({ pokemon, onSeleccionarPokemon }) {
  return (
    <li 
      className="pokemon-item" 
      onClick={() => onSeleccionarPokemon(pokemon.url)}
    >
      <span className="pokemon-nombre">{pokemon.name}</span>
    </li>
  );
}

export default PokemonItem;