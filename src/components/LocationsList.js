import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList(props) {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
            .then(resp => {
                console.log(resp);
                setLocations(resp.data.results);
            })
            .catch(error => console.log(error));
    }, [])
    console.log(locations);

    return (<section className='location-list grid-view'>
        {locations.map(location => <LocationCard location={location.name} residents={location.residents.length} /> )}
    </section>)
}
