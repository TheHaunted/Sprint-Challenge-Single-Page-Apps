import React from 'react'
import {Card} from 'semantic-ui-react';

export default function LocationCard (props) {
  return(
    <Card name={props.name} location={props.location.name} />
  )
}
