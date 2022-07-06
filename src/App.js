import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import BrowseProduct from "./Pages/Browsing/BrowseProduct";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import {useSelector} from 'react-redux';
import NotFound from "./Pages/NotFoundPage/NotFound";
import { DecodeToken } from "./Pages/DecodeToken";
import {loadStripe} from '@stripe/stripe-js';

function App() {
  const {_id} = useSelector((store)=>store?.userReducer?.user);

  // check if user already login or signup
  function UserLogin({childern}){
    return _id ? <Navigate to='/'/> : childern;
  }

  //Prevent guest from enter to profile page
  function AuthLogin ({childern}){
      return _id ? childern : <Navigate to='/'/>
  }

  const stripe = loadStripe('pk_test_51LEyhkFXidM3zNk5QBClUHhH2akvsSNCt5HwaTjHfolKzqRgrF5GR4Oqmgqfz8PQPe1vAyIf1c3tkr0JsqDoErcM00NomsxiMS');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<BrowseProduct/>}/>

        <Route path="/SignUp" element={<UserLogin childern={<SignUp/>}/>}/>
        <Route path="/login" element={<UserLogin childern={<Login/>}/>}/>

        <Route path="/profile" element={<AuthLogin childern={<ProfilePage/>}/>}/>
        <Route path="/payment" element={<AuthLogin childern={<PaymentPage/>}/>}/>
        <Route path="/cart" element={<AuthLogin childern={<Cart/>}/>}/>
        
        <Route path="/d" element={<DecodeToken/>}/>
        <Route path="*" element={<NotFound/>}/>

        {/* <Route path="/test" element={<Test/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
