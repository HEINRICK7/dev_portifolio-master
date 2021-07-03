import React from 'react'

import { Tooltip } from 'antd'

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { AiOutlineRocket } from 'react-icons/ai'


import './style.css'

const Footer = () => {
    return (
        <>
    <footer className="footer">
      <ul className="social-icons">
      <ul className="social-icons hero-icons">
            <li>
              <a href="https://www.facebook.com/heinrick.costa/" target="_blank" rel="noopener noreferrer"  className="social-icon">
              <Tooltip title="Facebook">
                < FaFacebook style={{fontSize: 30}}/>
              </Tooltip>
              </a>  
            </li>
            <li>
              <a href="https://www.linkedin.com/in/heinrickcostta/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Tooltip title="Linkedin">
              < FaLinkedin style={{fontSize: 30}}/>
              </Tooltip>
              </a>
            </li>
            <li>
              <a href="https://github.com/HEINRICK7" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Tooltip title="Github">
              < FaGithub style={{fontSize: 30}}/>
              </Tooltip>
              </a>
            </li>
            <li>
              <a href="https://app.rocketseat.com.br/me/heinrickcostta" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Tooltip title="Rocketseat">   
              < AiOutlineRocket style={{fontSize: 30}}/>
              </Tooltip> 
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/heinrickcostta" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Tooltip title="Instagram">
              < FaInstagram style={{fontSize: 30}}/>
              </Tooltip> 
              </a>
            </li>
          </ul>
      </ul>

      <p>&copy; <span id="date"></span> Carlos Henrique. all rights reserved</p>
    </footer>
        </>
    )
}

export default Footer
