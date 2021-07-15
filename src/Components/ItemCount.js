import React, { useState } from "react"

function ItemCount(props) { 
    const [qty,setQty]= useState(props.initial)
    
    

    function onAdd(){
        alert(`Agregaste  ${qty}  productos!`)
    }
    function resta(){
        const newValue = qty-1
        if(newValue>=props.initial){
            setQty(newValue)
            
        }
        console.log (qty)
    }

    function suma(){
        const newValue= qty+1
        if(newValue<=props.stock){
            setQty(newValue)
            
        }
        console.log (qty)
    }

    return(
        <div>
            <h1> Stock {props.stock} </h1>
            <div className="controls">
                <button onClick={resta}> - </button>
                <span>  {qty} </span>
                <button onClick={suma}> + </button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
            
        </div>
        
        
    )
}
export default ItemCount


