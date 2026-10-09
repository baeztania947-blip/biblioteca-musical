import React, { useState, useEffect } from 'react';

function VisorPokemon({ urlPokemon }) {
  const [detalles, setDetalles] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [errorDetalle, setErrorDetalle] = useState(null);

  // useEffect que se ejecuta cada vez que cambia la URL del Pokémon seleccionado
  useEffect(() => {
    // Si no hay URL seleccionada, no hacemos nada
    if (!urlPokemon) return;

    setCargando(true);
    setErrorDetalle(null);

    fetch(urlPokemon)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudieron obtener los detalles del Pokémon');
        }
        return response.json();
      })
      .then((data) => {
        setDetalles(data);
        setCargando(false);
      })
      .catch((err) => {
        setErrorDetalle(err.message);
        setCargando(false);
      });
  }, [urlPokemon]);

  // Si el usuario aún no ha seleccionado ningún Pokémon
  if (!urlPokemon) {
    return (
      <div className="visor-pokemon placeholder">
        <p>Selecciona un Pokémon para ver sus detalles</p>
      </div>
    );
  }

  if (cargando) {
    return <div className="visor-pokemon"><p>Cargando detalles...</p></div>;
  }

  if (errorDetalle) {
    return <div className="visor-pokemon"><p className="error">{errorDetalle}</p></div>;
  }

  return (
    <div className="visor-pokemon">
      {detalles && (
        <div className="detalle-card">
          <h2>{detalles.name.toUpperCase()}</h2>
          <img 
            src={detalles.sprites.front_default} 
            alt={detalles.name} 
            className="pokemon-imagen"
          />
          <div className="detalle-info">
            <p><strong>Altura:</strong> {detalles.height / 10} m</p>
            <p><strong>Peso:</strong> {detalles.weight / 10} kg</p>
            <div className="tipos-container">
              <strong>Tipos:</strong>
              {detalles.types.map((t, index) => (
                <span key={index} className={`tipo-badge tipo-${t.type.name}`}>
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VisorPokemon;