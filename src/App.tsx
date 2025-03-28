import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import SearchResults from './pages/SearchResults';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/prdcraft" element={
              <>
                <Hero />
                <Services />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;