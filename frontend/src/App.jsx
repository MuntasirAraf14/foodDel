import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';        // Import Home component
import Cart from './pages/Cart/Cart';        // Import Cart component
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';  // Import PlaceOrder component

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
