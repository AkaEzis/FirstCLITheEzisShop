import React from 'react';
import Item from './Item';
import { useEffect } from 'react';
import { useContext } from 'react';
import { product } from 'prelude-ls';

export default function productos() {

    var products = useContext(FetchConext);

    const mapProducts = () =>{

        let itemArray = products.map(product =>{
            return <Item
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        tittle={product.tittle}
                        description={product.description}
                        price={product.price}

                    />
        });
        return intemArray
    }

    useEffect(()=>{
        mapProducts();
    }, [products] )


    return(
        <div className="">
            <div className="">
                <h1>♥Lista de productos♥</h1>
            </div>
            <div className="">
                {mapProducts()}
            </div>
        </div>
        )
}