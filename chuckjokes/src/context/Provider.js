import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [jokeData, setJokeData] = useState(null)
  const [favoritesJokes, setFavoritesjokes] = useState([]);
  const [name, setName] = useState('');

  const getJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await response.json();
    setJokeData(json);
  }

  const contextValue = { 
    jokeData, setJokeData, 
    favoritesJokes, setFavoritesjokes ,
    name, setName,
    getJoke,
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;