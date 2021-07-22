import React from 'react';
import Item from './Item';
import { useEffect } from 'react';
import { useContext } from 'react';
import { product } from 'prelude-ls';


function Promises() {
    let ServerOnline=true;
    new Promise((resolve ,reject)=>{
        setTimeout(() => {
            if(ServerOnline){
            resolve ='[{\"id\":1,\"image\":\"https://www.xt-pc.com.ar/img/productos/Pics_Prod/MOU458.jpg]'}
            else{
                reject (new Error ('offline server'));
            }
           
        },2000);
    }).then (resultado =>{
        resultado = JSON.parse (resultado);
        setProducts (resultado);
    }).catch (error =>{
        alert(error.message);
    })

    

    function products() {

    var products = useContext(FetchConext);

    const mapProducts = () =>{

        let itemArray = products.map(products =>{
            return <Item
                        key={products.id}
                        id={products.id}
                        image={products.image}
                        tittle={products.tittle}
                        description={products.description}
                        price={products.price}

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
        )}