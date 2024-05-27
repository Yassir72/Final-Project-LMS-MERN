// src/App.jsx
import React from 'react';
import Navbar from './nav.jsx'
import Landing from './landing-page/landingPage.jsx';
import Checkout from './payment/checkout.jsx';
import ShoppingCart from './shopping/shoppingCart.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Landing/>
      {/* <Checkout/> */}
      {/* <ShoppingCart/> */}
    </div>
    <Footer/>
    </>
  );
}

export default App;
