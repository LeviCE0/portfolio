import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {

    return (
        <nav className='mb-20 flex bg-transparentitems-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <h1>Levi Cespedes</h1>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/levi-cespedes/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/LeviCE0" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/lexecees0105/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar