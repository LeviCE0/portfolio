import React from 'react'

const About = () => {
    return (
        <div className='py-10 bg-neutral-950 text-white h-auto' id='sobre'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                <div>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5'>Sobre <span>Mí</span></h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                ¡Hola! Soy Levi Cespedes, un apasionado del desarrollo. Me defino como <strong>Dev FullStack</strong>, <strong>Dev Móvil</strong> y <strong>Diseñador Web</strong>.
                                Desde que me metí en el mundo de la programación, he estado aprendiendo y creciendo constantemente.
                                Tengo habilidades en tecnologías como <strong>React</strong>, <strong>Tailwind</strong>, <strong>Kotlin</strong> y <strong>Flutter</strong>.
                                Siempre estoy buscando nuevos retos y oportunidades para crear soluciones innovadoras y útiles.
                            </p>
                        </div>
                    </div>

                    <div className='flex mt-10 items-center gap-7'>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                                <span>+</span>
                            </h3>
                            <p><span className='md:text-base text-xs'>Proyectos</span></p>
                        </div>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>3
                                <span>+</span>
                            </h3>
                            <p><span className='md:text-base text-xs'>Años de Experiencia</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About