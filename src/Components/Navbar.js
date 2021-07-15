import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
    return (
        <div className='nav_container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand" href="#">The Ezis Shop</p>
                    <p className='navbar-component' href="#"> Productos </p>
                    <p className='navbar-component' href="#"> Nosotros </p>                 
            
                </div>
                <CartWidget />
            </nav>

        </div>
    )
    
}
export default Navbar 