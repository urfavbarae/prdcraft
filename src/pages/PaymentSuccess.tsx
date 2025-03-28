import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Paiement réussi !
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Merci pour votre achat. Votre commande a été traitée avec succès.
          </p>
          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="block w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Retour à l'accueil
            </Link>
            <Link
              to="/services"
              className="block w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              Découvrir d'autres services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}