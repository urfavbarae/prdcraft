import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Facebook className="h-6 w-6" />, url: '#', name: 'Facebook' },
  { icon: <Twitter className="h-6 w-6" />, url: '#', name: 'Twitter' },
  { icon: <Instagram className="h-6 w-6" />, url: '#', name: 'Instagram' },
  { icon: <Linkedin className="h-6 w-6" />, url: '#', name: 'LinkedIn' }
];

export default function About() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            À Propos de PRDcraft
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Votre partenaire de confiance pour la création de contenu professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              alt="Notre équipe"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 mb-6">
              Chez PRDcraft, nous nous engageons à transformer vos idées en contenus professionnels exceptionnels. Notre équipe d'experts combine créativité et expertise technique pour vous offrir des solutions sur mesure qui dépassent vos attentes.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Excellence et qualité dans chaque projet</li>
              <li>Innovation et créativité</li>
              <li>Respect des délais</li>
              <li>Service client personnalisé</li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}