import React from 'react'

const Experience = () => {
    return (
        <div class="py-10 bg-[#232325]" id='experiencia'>
            <h2 className='mb-8 text-3xl text-white text-center'> Mis <span>Experiencias</span></h2>
            <div class="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[400px] sm:max-w-[600px] mx-auto">
                <p>Polleria Kevin</p>
                <p className='text-gray-400'>(Abril - Julio 2024)</p>
                <p className='text-gray-500'>
                    Desarrollo de una aplicación móvil para la gestión de pedidos y ventas de la pollería.
                    Se le desarrollo e implementó unos gráficos para poder visualizar de mejor manear las estadísticas de ventas.
                    Creación de APIS con Firebase para poder extraer y guardar datos.
                </p>
            </div>

            <div class="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

            <div class="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[400px] sm:max-w-[600px] mx-auto">
                <p>Restaurante Torigallo</p>
                <p className='text-gray-400'>(Septiembre - Octubre 2024)</p>
                <p className='text-gray-500'>
                    Se desarrolló un sistema web de gestión de mesas, pedidos, ventas, inventario, etc.
                    Se le incluyeron gráficos para poder tener una mejor visualización de los datos.
                </p>
            </div>
        </div>
    )
}

export default Experience