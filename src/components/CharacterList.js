import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard.js';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, [])

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(resp => {
      setCharacters(resp.data.results);
    })
    .catch(error => console.log(error));
  }, [])

  return <section className='character-list grid-view'>
    {characters.map(character => <CharacterCard image={character.image} name={character.name} location={character.location.name} />)}
    </section>

}
