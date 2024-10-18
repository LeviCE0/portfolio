export default function TechCard({ name, description, image }) {
    return (
        <div className="border-4 border-gray-300 rounded-lg p-4 w-60 text-center shadow-lg transition-transform hover:scale-105">
            <figure className="mb-4">
                <img src={image} alt={`Icono de ${name}`} className="w-20 h-20 mx-auto" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
