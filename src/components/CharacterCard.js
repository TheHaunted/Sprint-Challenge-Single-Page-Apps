import React from 'react'
import {Card} from 'semantic-ui-react';

export default function CharacterCard (props) {
  return (
    <div>
      <Card>
        <img src={props.image} />
        <h3>{props.name}</h3>
      </Card>
    </div>
  )
}
