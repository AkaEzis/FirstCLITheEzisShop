import React, { useState, useEffect} from "react"

export default function ItemCount() { 

    const [stock,setStock]= useState(5);
    const [initial,setInitial]= useState(0);
    const [onAdd,setOnAdd]= useState(+1<5);

    return(
        <div>
            <h1> Stock {stock} </h1>
            <h2>  {initial}</h2>
            <h3> + - {onAdd} </h3>
        </div>
    )
}



