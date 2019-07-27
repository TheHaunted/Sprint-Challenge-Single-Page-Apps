import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
            .then(resp => {
                console.log(resp);
                setEpisodes(resp.data.results);
            })
            .catch(error => console.log(error));
    }, [])
    console.log(episodes);

    return <section className='episode-list grid-view'>
        {episodes.map(episode => <EpisodeCard name={episode.name} />)}
    </section>
}