import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

    return(
        <div>
            <h3 className= "container-fluid"> {props.greeting} </h3>
            <ItemCount stock= { 5 } initial={ 1 } />
        </div>
    );
}
export default ItemListContainer
