import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="App">
           
            <nav className="navbar navbar-fixed-top">

            </nav>
            <div className="slider">
                <header>
                    <div className="nav">
                        <ul>
                            <li id="show-nails">
                                <a href="/home">Home</a>
                            </li>
                            <li><Link to="signup">Sign Up</Link></li>
                            <li><Link to="signin">Login</Link></li>
                            <li><Link to="products">product</Link></li>
                        </ul>
                    </div>
                </header>
                <ul>
                    <li id="no-js-slider-1" className="slide">
                        <img src="https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                        
                    </li>
                </ul>
            </div>
            <link href="https://www.littlesnippets.net/css/codepen-result.css"></link>
           
                
        </div>
        
        
    )
}
