import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/accessories" component={Accessories} />
          <Route path="/coffee" component={Coffee} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/1/:productName" component={DetailedProduct} />
          <Route
            path="/product/2/:productName"
            component={DetailedProductAcc}
          />
          <Route path="/lost-password" component={LostPassword} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/my-account" component={MyAccount} exact />
          <Route path="/my-account/orders" component={MyAccountOrder} />
          <Route path="/my-account/address" component={MyAccountAddress} />
          <Route
            path="/my-account/account-details"
            component={MyAccountDetail}
          />
          <Route
            path="/purchase-confirmation"
            component={PurchaseConfirmation}
          />
          <Route path="/about-this-project" component={AboutThisProject} />
          <Route path="/admin/dashboard" component={AdminPage} />
          <Route path="/admin/products/:page" component={AdminProduct} />
          <Route path="/admin/categories" component={AdminCategory} />
          <Route path="/admin/orders" component={AdminOrder} />
          <Route path="/admin/users/:page" component={AdminUser} />
          <Route
            path="/admin/product/edit/:productId"
            component={EditProduct}
          />
          <Route
            path="/admin/category/edit/:categoryId"
            component={EditCategory}
          />
          <Route path="/admin/product/create" component={AddNewProduct} />
          <Route path="/admin/users/edit/:userId" component={EditUser} />

          <Route path="/admin/category/create" component={AddNewCategory} />
          <Route path="/admin/user/create" component={AddNewUser} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
