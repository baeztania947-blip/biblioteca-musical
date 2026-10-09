import React, { useState, useEffect } from 'react';
import ListaPokemon from './components/ListaPokemon';
import VisorPokemon from './components/VisorPokemon';
import './App.css';

function App() {
  // Estado para almacenar la lista de Pokémon obtenida de la API
  const [listaPokemons, setListaPokemons] = useState([]);
  // Estado para almacenar el Pokémon seleccionado (guardamos su URL o nombre detallado)
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);
  // Estados para manejo de carga y errores
  const [cargandoLista, setCargandoLista] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para realizar la petición fetch inicial al montar el componente
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener la lista de Pokémon');
        }
        return response.json();
      })
      .then((data) => {
        setListaPokemons(data.results);
        setCargandoLista(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargandoLista(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokédex Simple - React</h1>
        <p>Selecciona un Pokémon de la lista para ver sus detalles</p>
      </header>

      <main className="app-main">
        {cargandoLista && <p className="mensaje-carga">Cargando lista de Pokémon...</p>}
        {error && <p className="mensaje-error">Error: {error}</p>}

        {!cargandoLista && !error && (
          <div className="contenido-principal">
            {/* Componente que renderiza la lista pasándole la lista y la función de selección */}
            <ListaPokemon 
              pokemons={listaPokemons} 
              onSeleccionarPokemon={setPokemonSeleccionado} 
            />
            {/* Componente que visualiza los detalles del Pokémon seleccionado */}
            <VisorPokemon urlPokemon={pokemonSeleccionado} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;