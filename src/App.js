import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import BrowseProduct from "./Pages/Browsing/BrowseProduct";
import HomePage from "./Pages/HomePage/HomePage";
import Test from "./Pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<BrowseProduct/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
