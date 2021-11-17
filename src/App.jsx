import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Website/Home";
import Cart from "./pages/Website/Cart";
import Accessories from "./pages/Website/Accessories";
import Coffee from "./pages/Website/Coffee";
import DetailedProduct from "./pages/Website/DetailedProduct";
import LostPassword from "./pages/Website/LostPassword";
import CheckOut from "./pages/Website/CheckOut";
import NavBar from "./components/NavBar-Footer/NavBar";
import Footer from "./components/NavBar-Footer/Footer";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyAccountOrder from "./pages/MyAccount/MyAccountOrder";
import MyAccountDetail from "./pages/MyAccount/MyAccountDetail";
import MyAccountAddress from "./pages/MyAccount/MyAccountAddress";
import PurchaseConfirmation from "./pages/Website/PurchaseConfirmation";
import DetailedProductAcc from "./pages/Website/DetailedProductAcc";
import AboutThisProject from "./pages/Website/AboutThisProject";
import AdminPage from "./pages/Admin/AdminPage";
import AdminProduct from "./pages/Admin/AdminProduct";
import AdminCategory from "./pages/Admin/AdminCategory";
import AdminOrder from "./pages/Admin/AdminOrder";
import AdminUser from "./pages/Admin/AdminUser";
import AddNewProduct from "./pages/Admin/AddNewProduct";
import EditProduct from "./pages/Admin/EditProduct";
import EditUser from "./pages/Admin/EditUser";
import EditCategory from "./pages/Admin/EditCategory";
import AddNewCategory from "./pages/Admin/AddNewCategory";
import AddNewUser from "./pages/Admin/AddNewUser";

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
          <Route path="/admin/users/edit/:userId" element={<EditUser />} />

          <Route path="/admin/category/create" element={<AddNewCategory />} />
          <Route path="/admin/user/create" element={<AddNewUser />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
