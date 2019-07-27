import React from 'react';
import {Card} from 'semantic-ui-react';

export default function EpisodeCard(props){
    return(
        <div>
            <Card>
                <h3>{props.name}</h3>
            </Card>
        </div>
    )
}