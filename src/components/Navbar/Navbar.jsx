import React from 'react'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Navbar() {
    window.addEventListener('scroll',()=>{
        let navPostion  =window.pageYOffset;
        let navbar=document.querySelector(".navbar");
        if(navPostion>50){
            navbar.style.backgroundColor='rgba(0, 0, 0,0.5)';
        }
        else if(navPostion<50){
            navbar.style.backgroundColor='unset';
        }
    });
    return (
        <div className='Navbar'>
            
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand"><FontAwesomeIcon icon="fa-solid fa-utensils" /> WASIFATI <FontAwesomeIcon icon="fa-solid fa-utensils" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className="navbar-toggler-icon" icon="fa-solid fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/fooditems?type=meat'>Meat Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/fooditems?type=vegetable'>Vegetable Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/fooditems?type=fruit'>Fruit</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/fooditems?type=sweet'>Seewt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
