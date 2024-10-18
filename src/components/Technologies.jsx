import { useState } from 'react';
import TechCard from "./TechCard";
import cssIcon from '../assets/icon_css.svg';
import dartIcon from '../assets/icon_dart.svg';
import firebaseIcon from '../assets/icon_firebase.svg';
import flutterIcon from '../assets/icon_flutter.svg';
import htmlIcon from '../assets/icon_html.svg';
import javaIcon from '../assets/icon_java.svg';
import jsIcon from '../assets/icon_js.svg';
import kotlinIcon from '../assets/icon_kotlin.svg';
import mysqlIcon from '../assets/icon_mysql.svg';
import phpIcon from '../assets/icon_php.png';
import reactIcon from '../assets/icon_react.svg';
import sqlServerIcon from '../assets/icon_sqlserver.svg';
import tailwindIcon from '../assets/icon_tailwind.svg';

export default function Technologies() {
    const [filter, setFilter] = useState('Front-End');

    const techList = [
        { name: "CSS", description: "Estilos Animados", type: "Front-End", image: cssIcon },
        { name: "Dart", description: "Programación Móvil", type: "Front-End", image: dartIcon },
        { name: "Firebase", description: "Base de Datos", type: "Back-End", image: firebaseIcon },
        { name: "Flutter", description: "Framework Móvil", type: "Front-End", image: flutterIcon },
        { name: "HTML", description: "Páginas Webs", type: "Front-End", image: htmlIcon },
        { name: "Java", description: "Apps móviles y web", type: "Front-End", image: javaIcon },
        { name: "JavaScript", description: "Lógica de Programación", type: "Front-End", image: jsIcon },
        { name: "Kotlin", description: "Programación Móvil", type: "Front-End", image: kotlinIcon },
        { name: "MySQL", description: "Base de Datos", type: "Back-End", image: mysqlIcon },
        { name: "PHP", description: "Conexión de Servidores", type: "Back-End", image: phpIcon },
        { name: "React", description: "Framework Web", type: "Front-End", image: reactIcon },
        { name: "SQL Server", description: "Base de Datos", type: "Back-End", image: sqlServerIcon },
        { name: "Tailwind CSS", description: "Diseños Responsivos", type: "Front-End", image: tailwindIcon },
    ];

    const filteredTechList = techList.filter((tech) => tech.type === filter);

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl"><span>Tecnologías</span></h1>

            {/* Navbar para el filtro */}
            <div className="flex justify-center mb-10">
                <button 
                    onClick={() => setFilter('Front-End')} 
                    className="px-4 py-2 m-2 text-white bg-gray-500 bg-opacity-50 hover:bg-opacity-75 rounded">
                    Front-End
                </button>
                <button 
                    onClick={() => setFilter('Back-End')} 
                    className="px-4 py-2 m-2 text-white bg-gray-500 bg-opacity-50 hover:bg-opacity-75 rounded">
                    Back-End
                </button>
            </div>

            {/* Contenedor de tarjetas */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                {filteredTechList.map((tech) => (
                    <TechCard 
                        key={tech.name} 
                        name={tech.name} 
                        description={tech.description} 
                        image={tech.image} 
                    />
                ))}
            </div>
        </div>
    );
}
