import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

    return(
        <div>
            <h3 className= "container-fluid"> {props.greeting} </h3>
        </div>
    );
}
export default ItemListContainer
