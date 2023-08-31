import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import './App.scss';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data));
  }, []);

  return (
    <div className="app">
      <h1>Harry Potter Characters</h1>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
