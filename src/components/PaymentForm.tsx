import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { CreditCard, Lock, User } from 'lucide-react';

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export default function PaymentForm({ onSuccess }: { onSuccess: (customerData: CustomerData) => void }) {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'personal' | 'payment'>('personal');

  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const handleCustomerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCustomerData = (): boolean => {
    if (!customerData.name.trim()) {
      setError('Le nom est requis');
      return false;
    }
    if (!customerData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Email invalide');
      return false;
    }
    if (!customerData.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)) {
      setError('Numéro de téléphone invalide');
      return false;
    }
    return true;
  };

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (validateCustomerData()) {
      setStep('payment');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      formattedValue = formattedValue.substring(0, 19);
    }

    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '$1/$2');
      formattedValue = formattedValue.substring(0, 5);
    }

    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      setError('Numéro de carte invalide');
      return false;
    }
    if (!formData.cardHolder) {
      setError('Nom du titulaire requis');
      return false;
    }
    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      setError('Date d\'expiration invalide');
      return false;
    }
    if (!formData.cvv.match(/^\d{3,4}$/)) {
      setError('CVV invalide');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Validate payment data before proceeding
      if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
        throw new Error('Veuillez remplir tous les champs de paiement');
      }

      // Process payment and call onSuccess with customer data
      //await onSuccess(customerData);
      
      // Clear any existing errors and navigate to success page
      setError('');
      navigate('/payment-success');
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du paiement. Veuillez réessayer.');
      return;
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 'personal') {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Informations personnelles</h2>
          <User className="h-6 w-6 text-gray-500" />
        </div>

        <form onSubmit={handleCustomerSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom complet*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerData.name}
              onChange={handleCustomerInputChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerData.email}
              onChange={handleCustomerInputChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Téléphone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerData.phone}
              onChange={handleCustomerInputChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Entreprise (optionnel)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={customerData.company}
              onChange={handleCustomerInputChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            Continuer vers le paiement
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Paiement sécurisé</h2>
        <Lock className="h-6 w-6 text-gray-500" />
      </div>

      <div className="mb-6">
        <p className="text-lg font-medium text-gray-900">Total à payer: {total()} DH</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Numéro de carte
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
            <CreditCard className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
            Titulaire de la carte
          </label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleInputChange}
            placeholder="JOHN DOE"
            className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Date d'expiration
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setStep('personal')}
            className="w-1/3 bg-gray-200 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            Retour
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className="w-2/3 bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center disabled:bg-gray-400"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Traitement en cours...
              </>
            ) : (
              'Payer maintenant'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}