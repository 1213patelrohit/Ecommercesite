import {  Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Product from './Product';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
// import RegisterForm from './RegisterForm';
import Checkout from './Checkout';
import ProfilePage from './ProfilePage';
import LoginForm1 from './LoginForm1';
import RegisterForm1 from './RegisterForm1'
import About from './About';


function App() {
  return (
   <>
  

    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/LoginForm1' element={<LoginForm1/>}/>
      <Route  path='/product' element={<Product/>}/>
      <Route path='/product/ProductDetails' element={<ProductDetails/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path= "/RegisterForm1" element={<RegisterForm1/>}/>
      {/* <Route path= "/RegisterForm" element={<RegisterForm/>}/> */}
      <Route path= "/Checkout" element={<Checkout/>}/>
      <Route path= "/ProfilePage" element={<ProfilePage/>}/>
      <Route path= "/about" element={<About/>}/>
   
      
    </Routes>
   
   </>
  );
}

export default App;
