import React from 'react';
import PokemonItem from './PokemonItem';

function ListaPokemon({ pokemons, onSeleccionarPokemon }) {
  return (
    <div className="lista-pokemon-container">
      <h2>Lista de Pokémon</h2>
      <ul className="lista-pokemon">
        {pokemons.map((pokemon, index) => (
          <PokemonItem 
            key={index} 
            pokemon={pokemon} 
            onSeleccionarPokemon={onSeleccionarPokemon} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaPokemon;