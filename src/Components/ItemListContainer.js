import React from 'react'
import ItemList from './ItemList'

function ItemListContainer(props) {

    return(
        <div>
            <h3 className= "container-fluid"> {props.greeting} </h3>
            <ItemList/>
            
        </div>
    );
}


export default ItemListContainer
