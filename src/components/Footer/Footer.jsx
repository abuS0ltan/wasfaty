import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">

        <div className="row">
          <div className="col-md-4">
          <span className='copyRight'>Copyright &copy; 2024 Ahmad Sultan.</span>

          </div>
          <div className="col-md-4">
          <div className="logo">
              <Link className="navbar-brand"><FontAwesomeIcon icon="fa-solid fa-utensils" /> WASIFATI <FontAwesomeIcon icon="fa-solid fa-utensils" /></Link>
          </div>
          </div>
          <div className="col-md-4">

          <div className="iconDiv">
                  <a href="https://instagram.com/kingahmad2015?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className='icon instagram' target='_blank'>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/ahmad-sultan-7a63a7240" className='icon linkedin' target='_blank'>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                  </a>
                  <a href="mailto:as5049859@gmail.com" className='icon email' target='_blank'>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </a>
            </div>
          </div>
        </div>
      </div>
        
    </footer>
  )
}

export default Footer