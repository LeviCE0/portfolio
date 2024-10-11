import React from 'react'
import profileepic from '../assets/profile_photo.png';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div id='inicio'>
            <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
                <div className=' flex-col my-auto mx-auto'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'></p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'><TypeAnimation
                        sequence={[
                            "Dev FullStack",
                            1000,
                            "Dev Móvil",
                            1000,
                            "Diseñador Web",
                            1000,

                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>+3 de años de experiencia</p>
                    </div>
                    <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                        <a href="https://www.linkedin.com/in/levi-cespedes/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/LeviCE0" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.instagram.com/lexecees0105/" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram />
                        </a>
                    </div>
                </div>

                <div className='my-auto' >
                    <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profileepic} alt="profile photo" />
                </div>
            </div>
        </div>
    )
}

export default Hero
