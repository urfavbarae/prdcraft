import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import PaymentForm from '../components/PaymentForm';

export default function Payment() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();

  const handlePaymentSuccess = async (customerData) => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: customerData,
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          totalAmount: total()
        })
      });

      if (response.ok) {
        clearCart();
        navigate('/payment-success');
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('There was an error processing your order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Details</h2>
          <PaymentForm onSuccess={handlePaymentSuccess} />
        </div>
      </div>
    </div>
  );
}