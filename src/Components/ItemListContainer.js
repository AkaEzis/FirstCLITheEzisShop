import React from 'react'
import ItemCount from './ItemCount'
import Item from './Item'
import ItemList from './ItemList'

function ItemListContainer(props) {

    return(
        <div>
            <h3 className= "container-fluid"> {props.greeting} </h3>
            <Item/>
            <ItemList/>
            <ItemCount stock= { 5 } initial={ 1 } />
        </div>
    );
}


export default ItemListContainer
