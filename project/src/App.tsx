import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import CartDrawer from './components/Cart/CartDrawer';
import CheckoutModal from './components/Checkout/CheckoutModal';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <main className="flex-grow">
            <Hero />
            <ProductSection />
          </main>
          <Footer />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;