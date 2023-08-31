import React from 'react';
import '../styles/CharacterCard.scss';

const CharacterCard = ({ character }) => {
    const hasImage = character.image !== '';
    const imageSource = hasImage ? character.image : '';
  
    return (
      <div className="character-card">
        {hasImage ? (
          <img src={imageSource} alt={character.name} />
        ) : (
          <div className="empty-image" />
        )}
        <h2>{character.name}</h2>
        <p>Birthdate: {character.dateOfBirth}</p>
        <p>House: {character.house}</p>
        <p>Patronus: {character.patronus}</p>
        <p>Actor: {character.actor}</p>
        <p>Alive: {character.alive ? 'Yes' : 'No'}</p>
      </div>
    );
  };
  
  export default CharacterCard;
