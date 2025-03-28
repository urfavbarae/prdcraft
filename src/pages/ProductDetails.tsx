import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Produit non trouvé</h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-red-600 font-semibold mb-6">{product.price} DH</p>
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Ce qui est inclus :</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Conception personnalisée</li>
                  <li>Révisions illimitées</li>
                  <li>Support dédié</li>
                  <li>Livraison rapide</li>
                  <li>Format source inclus</li>
                </ul>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-8 w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}