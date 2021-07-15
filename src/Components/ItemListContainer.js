import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

    return(
        <div>
            <h3 className= "container-fluid"> {props.greeting} </h3>
            <ItemCount stock= '5' initial='0' />
        </div>
    );
}
export default ItemListContainer
