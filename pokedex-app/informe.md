# Informe de Trabajo Práctico: Aplicación Web con React y PokéAPI

## 1. Introducción
El objetivo de este trabajo práctico fue construir una aplicación web simple en React utilizando **Vite**, consumiendo datos desde la API pública **PokéAPI** mediante la función nativa `fetch` de JavaScript, estructurando la solución en componentes reutilizables sin la necesidad de librerías externas de enrutamiento (routing).

## 2. Arquitectura y Componentes Desarrollados
La aplicación se dividió en los cuatro componentes obligatorios:

1. **`App` (Componente Raíz):**
   - Administra el estado global de la aplicación: `listaPokemons` y `pokemonSeleccionado`.
   - Utiliza el hook `useEffect` para realizar la petición fetch inicial al endpoint `https://pokeapi.co/api/v2/pokemon?limit=20` apenas se monta el componente.
   - Renderiza la estructura general y comunica `ListaPokemon` con `VisorPokemon`.

2. **`ListaPokemon`:**
   - Recibe por props el arreglo con la lista de Pokémon y la función para actualizar la selección.
   - Itera sobre los elementos utilizando el método `.map()` y genera componentes hijos individuales.

3. **`PokemonItem`:**
   - Representa un elemento individual dentro de la lista.
   - Muestra el nombre del Pokémon y captura el evento `onClick` para disparar la función que actualiza el estado del Pokémon seleccionado en el componente `App` enviando su URL de detalles.

4. **`VisorPokemon`:**
   - Gestiona el estado de los detalles del Pokémon seleccionado.
   - Contiene un `useEffect` condicional que se dispara cada vez que cambia la URL del Pokémon seleccionado, ejecutando un nuevo `fetch` al endpoint específico (ej. `https://pokeapi.co/api/v2/pokemon/bulbasaur`).
   - Muestra de forma limpia la imagen frontal oficial, altura, peso y los tipos correspondientes con diseño adaptativo. Si no hay selección, muestra un mensaje orientativo.

## 3. Funcionamiento del Programa
1. Al iniciar la aplicación, el componente principal `App` realiza una consulta asíncrona a la API para obtener los primeros 20 Pokémon.
2. La lista se visualiza en un panel lateral interactivo.
3. El usuario hace clic sobre cualquier elemento de la lista; esto actualiza la URL activa en el estado principal.
4. El componente `VisorPokemon` detecta este cambio de URL, realiza la consulta correspondiente de manera dinámica y renderiza las características detalladas del Pokémon en tiempo real.

## 4. Capturas de Pantalla de la Aplicación
### 1. Componente Principal (`App`)
Es el componente raíz que administra el estado global de la aplicación (la lista de Pokémon y el elemento seleccionado). Utiliza el hook `useEffect` con un arreglo de dependencias vacío para ejecutar una petición `fetch` inicial al endpoint de la PokéAPI al momento de montar el componente, almacenando los resultados obtenidos.

![Código del componente App](./capturas/app-principal.png)

### 2. Componente `ListaPokemon`
Este componente se encarga de recibir el arreglo con la lista de Pokémon y la función de selección a través de props. Utiliza el método `.map()` para iterar sobre cada elemento del arreglo y renderizar un componente `PokemonItem` por cada uno, pasándole su respectiva información y la propiedad `key` basada en el índice[cite: 5].

![Código del componente ListaPokemon](./capturas/lista-pokemon.png)

### 3. Componente `PokemonItem`
Representa un elemento individual dentro de la lista de Pokémon. Recibe por props los datos del Pokémon (nombre y URL) y la función de selección. Al hacer clic sobre el elemento (`onClick`), ejecuta dicha función para actualizar el Pokémon seleccionado en el componente principal[cite: 4].

![Código del componente PokemonItem](./capturas/pokemon-item.png)

 ### 4. Componente `VisorPokemon`
Este componente se encarga de recibir la URL del Pokémon seleccionado por el usuario. Utiliza un hook `useEffect` que se dispara cada vez que dicha URL cambia, realizando una petición `fetch` para obtener todos los detalles específicos (como la imagen, tipos, estadísticas, etc.) y gestiona los estados de carga y posibles errores[cite: 4].

![Código del componente VisorPokemon](./capturas/visor-pokemon.png)

### 5. Vista General de la Aplicación (Estado Inicial)
La interfaz principal de la Pokédex al cargar, mostrando la lista de Pokémon disponibles en el panel izquierdo y el panel de detalles en blanco a la derecha, esperando la interacción del usuario.

![Vista inicial de la Pokedex](./capturas/vista-inicial.png)

### 6. Vista General de la Aplicación
La interfaz gráfica final integrada y funcionando correctamente, mostrando el panel izquierdo con la lista interactiva de Pokémon y el visor derecho con los detalles completos del elemento seleccionado (como imagen, peso, altura y tipos)[cite: 8].

![Interfaz final de la Pokedex](./capturas/vista-previa.png)

- **Vista Inicial:** Muestra la lista de los 20 Pokémon cargados y el panel derecho indicando que se seleccione uno.
- **Vista con Detalle:** Muestra la tarjeta con la imagen, nombre, tipos, peso y altura de un Pokémon seleccionado (por ejemplo, Bulbasaur).