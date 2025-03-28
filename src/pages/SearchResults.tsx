import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

export default function SearchResults() {
  const { searchQuery, filteredProducts } = useSearchStore();
  const addItem = useCartStore((state) => state.addItem);

  if (!searchQuery) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Recherchez nos services</h2>
          <p className="mt-4 text-lg text-gray-500">Utilisez la barre de recherche pour trouver nos services</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Résultats pour "{searchQuery}"
        </h2>
        
        {filteredProducts.length === 0 ? (
          <p className="text-lg text-gray-500">Aucun résultat trouvé pour votre recherche</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-500">{product.description}</p>
                  <p className="mt-2 text-2xl font-bold text-red-600">{product.price} DH</p>
                  
                  <div className="mt-4 flex space-x-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300 text-center"
                    >
                      Détails
                    </Link>
                    <button
                      onClick={() => addItem(product)}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}