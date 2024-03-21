import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import ReservationConfirmation from './components/ReservationConfirmation';
import Admin from './components/Admin';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NewHeader from './components/NewHeader';

function App() {
  return (
<<<<<<< HEAD
    <Router>      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/confirm-reservation" element={<ReservationConfirmation/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
=======
    <div>
      <NewHeader />
      <Search />
      <Body/>
      <Footer />
      
      <Router>      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/confirm-reservation" element={<ReservationConfirmation/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </div>
>>>>>>> feature_fe_newhome
  );
}

export default App;
