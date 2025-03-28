import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, PresentationIcon, BookOpen, GraduationCap, Share2 } from 'lucide-react';

const services = [
  {
    icon: <PresentationIcon className="h-8 w-8 text-red-600" />,
    title: 'Présentations Professionnelles',
    description: 'Des présentations impactantes pour vos réunions et conférences.',
    price: 'À partir de 49 DH',
    id: '1'
  },
  {
    icon: <FileText className="h-8 w-8 text-red-600" />,
    title: 'Rapports',
    description: 'Des rapports structurés et professionnels pour vos projets.',
    price: 'À partir de 79 DH',
    id: '2'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-red-600" />,
    title: 'Documentation',
    description: 'Documentation technique et guides utilisateur détaillés.',
    price: 'À partir de 99 DH',
    id: '3'
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-red-600" />,
    title: 'Projets de Fin d\'Études',
    description: 'Accompagnement complet pour votre PFE.',
    price: 'À partir de 199 DH',
    id: '4'
  },
  {
    icon: <Share2 className="h-8 w-8 text-red-600" />,
    title: 'Social Media',
    description: 'Contenu engageant pour vos réseaux sociaux.',
    price: 'À partir de 39 DH',
    id: '5'
  }
];

export default function Services() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Des solutions sur mesure pour tous vos besoins en création de contenu
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-center mb-4">
                {service.description}
              </p>
              <p className="text-red-600 font-semibold text-center">
                {service.price}
              </p>
              <Link 
                to={`/product/${service.id}`}
                className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 block text-center"
              >
                Savoir plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}