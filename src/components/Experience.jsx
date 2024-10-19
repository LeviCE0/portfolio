import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className="py-10 bg-transparent" id='experiencia'>
            <h2 className='mb-8 text-3xl text-white text-center'> Mis <span>Experiencias</span></h2>
            
            <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[400px] sm:max-w-[600px] mx-auto">
                <p>Polleria Kevin</p>
                <p className='text-gray-400'>(Abril - Julio 2024)</p>
                <p className='text-gray-500'>
                    Desarrollo de una aplicación móvil para la gestión de pedidos y ventas de la pollería.
                    Se le desarrolló e implementó unos gráficos para poder visualizar de mejor manera las estadísticas de ventas.
                    Creación de APIs con Firebase para poder extraer y guardar datos.
                </p>
            </div>

            <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

            <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[400px] sm:max-w-[600px] mx-auto">
                <p>Restaurante Torigallo</p>
                <p className='text-gray-400'>(Septiembre - Octubre 2024)</p>
                <p className='text-gray-500'>
                    Se desarrolló un sistema web de gestión de mesas, pedidos, ventas, inventario, etc.
                    Se le incluyeron gráficos para poder tener una mejor visualización de los datos.
                </p>
                <div className="mt-2">
                    <a 
                        href="https://github.com/LeviCE0/demo-sistema-torigallo/tree/main" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block text-blue-500 mr-4"
                    >
                        <FaGithub className="inline-block mr-1" /> Ver Código en GitHub
                    </a>
                    <a 
                        href="https://levice0.github.io/demo-sistema-torigallo/"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block text-blue-500"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Experience;
