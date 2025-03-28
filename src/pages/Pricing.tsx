import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Check, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Pricing() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Tarifs
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Des solutions adaptées à tous les budgets
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-2xl font-bold">{product.price} DH</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-4 text-gray-500">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-600">Conception personnalisée</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-600">Révisions illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-600">Support dédié</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-600">Livraison rapide</span>
                  </li>
                </ul>
                <div className="mt-8 space-y-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center bg-gray-100 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    Voir les détails
                  </Link>
                  <button
                    onClick={() => addItem(product)}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin d'une solution sur mesure ?
          </h3>
          <p className="text-gray-500 mb-8">
            Contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques
          </p>
          <Link
            to="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}