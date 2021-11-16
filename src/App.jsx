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
import MyAccountAddress from "./components/MyAccountAddress";
import PurchaseConfirmation from "./pages/PurchaseConfirmation";
import DetailedProductAcc from "./pages/DetailedProductAcc";
import AboutThisProject from "./pages/AboutThisProject";
import AdminPage from "./pages/AdminPage";
import AdminProduct from "./components/AdminProduct";
import AdminCategory from "./components/AdminCategory";
import AdminOrder from "./components/AdminOrder";
import AdminUser from "./components/AdminUser";
import AddNewProduct from "./pages/AddNewProduct";

import EditProduct from "./pages/EditProduct";
import EditCategory from "./pages/EditCategory";
import AddNewCategory from "./pages/AddNewCategory";

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
          <Route path="/product/1/:productName" element={<DetailedProduct />} />
          <Route
            path="/product/2/:productName"
            element={<DetailedProductAcc />}
          />
          <Route path="/lost-password" element={<LostPassword />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-account/orders" element={<MyAccountOrder />} />
          <Route path="/my-account/address" element={<MyAccountAddress />} />
          <Route
            path="/my-account/account-details"
            element={<MyAccountDetail />}
          />
          <Route
            path="/purchase-confirmation"
            element={<PurchaseConfirmation />}
          />
          <Route path="/about-this-project" element={<AboutThisProject />} />
          <Route path="/admin/dashboard" element={<AdminPage />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/categories" element={<AdminCategory />} />
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/admin/users" element={<AdminUser />} />
          <Route
            path="/admin/product/edit/:productId"
            element={<EditProduct />}
          />
          <Route
            path="/admin/category/edit/:categoryId"
            element={<EditCategory />}
          />
          <Route path="/admin/product/create" element={<AddNewProduct />} />

          <Route path="/admin/category/create" element={<AddNewCategory />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
