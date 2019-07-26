import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList(props) {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
            .then(resp => {
                console.log(resp.data.results);
                setCharacters(resp.data.results);
            })
            .catch(error => console.log(error));
    }, [])
    console.log(characters);

    {characters.map(character => <LocationCard location={character.location.name} />)}
}
