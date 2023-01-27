import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import Shipping from './components/ShippingPages/Shipping';
import PaymentMethod from './components/ShippingPages/PaymentMethod';
import ConfirmOrder from './components/ShippingPages/ConfirmOrder';
import MakePayment from './components/ShippingPages/MakePayment';
import OrderHistory from './components/OrderHistory/OrderHistory';

function App(){
  return (

    <Router>
    <Header />
    
      <div className="main container py-3">
        
          <Routes>
          <Route path="/item/:id" element={ <ItemDetails/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="Shipping" element={ <Shipping/> }/>
          <Route path="/payment" element={ <PaymentMethod/> }/>
          <Route path="/Confirm" element={ <ConfirmOrder/> }/>
          <Route path="/order/:id" element={ <MakePayment/> }/>
          <Route path="/orderhistory" element={ <OrderHistory/> }/>
          <Route path="/CartPage" element={ <CartPage/> }/>
          <Route path="/Privat</Routes>eRoute" element={ <PrivateRoute/> }/>
          <Route path="/" element={ <Home/> }/>
          </Routes>
        
      </div>

    <Footer />
    </Router>

    
  );
}

export default App;
