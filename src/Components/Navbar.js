import React from 'react'

export default function Navbar() {
    return (
        <div className='nav_container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">The Ezis Shop</a>
                    <a className='navbar-component' href="#"> Productos </a>
                    <a className='navbar-component' href="#"> Nosotros </a>
                    <a className='navbar-component' href="#"> Carrito </a>
                    
                </div>
            </nav>

        </div>
    )
}