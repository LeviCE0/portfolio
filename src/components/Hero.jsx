import React from 'react'
import profileepic from '../assets/profile_photo.png';
import { AiFillLinkedin, AiFilklGithub, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
            <div className='bg-white max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
                <div className='bg-blue-300 flex-col my-auto mx-auto'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'></p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'><TypeAnimation
                        sequence={[
                            "Desarrollador FullStack",
                            1000,
                            "Diseñador Web",
                            1000,
                            "Desarrollador Móvil",
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
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiFillInstagram />
                    </div>
                    <div class="relative inline-flex group my-3">
                        <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href='/' title='Descargar CV' role='button'
                            class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            Descargar CV
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
