import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import BrowseProduct from "./Pages/Browsing/BrowseProduct";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signin" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={<BrowseProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
