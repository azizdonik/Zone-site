import React from 'react'

const Navbar = () => {
    return (
    <div className="container">
            <nav>
                <img src="img/logo.png" alt="" />
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <button className="btn-contact">Contact Us</button>
                </ul>
            </nav>    
    </div>
    )
}

export default Navbar
