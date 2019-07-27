import React from 'react'
import {Card} from 'semantic-ui-react';

export default function LocationCard (props) {
  console.log("props: ", props);
  return(
    <div>
      <Card>
        <h3>{props.name}</h3>
        <Card.Description>
          <p>Location: {props.location}</p>
          <p>{props.residents} residents</p>
        </Card.Description>
      </Card>
    </div>
  )
}
