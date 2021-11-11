import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Accessories from "./pages/Accessories";
import Coffee from "./pages/Coffee";
import DetailedProduct from "./pages/DetailedProduct";
import LostPassword from "./pages/LostPassword";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MyAccount from "./components/MyAccount";
import MyAccountOrder from "./components/MyAccountOrder";
import MyAccountDetail from "./components/MyAccountDetail";
import MyAccountAdress from "./components/MyAccountAdress";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<DetailedProduct />} />
          <Route path="/lost-password" element={<LostPassword />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-account/orders" element={<MyAccountOrder />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
