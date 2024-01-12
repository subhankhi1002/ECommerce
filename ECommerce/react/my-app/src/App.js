import logo from './logo.svg';
import './App.css';
import Home from './home';
import Cart from './cart';
import ProdMenu from './ProdMenu';

import SimilarProd from './similarProd';
import ProdDet2 from './ProdDet2';

import Account from './account';
import Footer from './footer';
import { Link, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div class="header">
    <div class="container">
    <div class="navbar">
        <div class="logo">
            <img src={require("./resources/images/logo.png")} alt="logo-image" width="125px"/>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/prodMenu">Products</Link></li>
                <li><Link to="/account">Login</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </div>
    <div class = 'App'>
    <Routes>
      <Route path="/" element={<Home/>}/>
     
      <Route path="/ProdDet2/:id" element={<ProdDet2/>}/>
     
      <Route path="/ProdMenu" element={<ProdMenu/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/account" element={<Account/>}/>
      
    </Routes>
    </div>
    <SimilarProd/>
    <Footer/>
    
    </div>

</div>
  );
}

export default App;
