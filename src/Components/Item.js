import React, { useEffect, useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import ItemCount from "./ItemCount"

function Item(props) {
  console.log(props)
  return(
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
    <ItemCount stock= { props.stock } initial={ 1 } />
  </div>
  )
}

export default Item