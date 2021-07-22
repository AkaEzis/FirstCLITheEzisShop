import React, { useEffect, useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import ItemList from './ItemList'

function item(props) {
  
  return(
  <div>
    <ItemList/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.xt-pc.com.ar/img/productos/Pics_Prod/MOU458.jpg" />
      <Card.Body>
        <Card.Title>Mouse Logitech G PRO 1600DPI</Card.Title>
        <Card.Text>
        Mouse Logitech G PRO 1600DPI RGB en blanco, negro y gris.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default item