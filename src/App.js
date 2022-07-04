import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import BrowseProduct from "./Pages/Browsing/BrowseProduct";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Test from "./Pages/Test";
import {useSelector} from 'react-redux';

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
        
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
