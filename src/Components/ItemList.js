import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';




 function ItemList(){

    const [ products, setProducts ] = useState([])
        
    const getProducts= async() =>{
        
        const data= await fetch('../Datalist.json')
        const responseData= await data.json()
        setProducts(responseData)
    }
    

    useEffect(()=>{
        setTimeout(()=> getProducts(), 2000);
    },[])

    return(
        <div className="">
            <div className="">
                <h1>♥Lista de productos♥</h1>
            </div>
            {products.map(product=>{
             
                return(
                    <div>
                    <Item 
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        categoria={product.categoria}
                        descripcion={product.descripcion}
                        stock={product.stock}
                        price={product.price}
                      />
                     </div>
                )
            })}
        </div>
        
        )

 } 

 export default ItemList

        