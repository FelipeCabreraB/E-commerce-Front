import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Website/Home";
import Cart from "./pages/Website/Cart";
import Accessories from "./pages/Website/Accessories";
import Coffee from "./pages/Website/Coffee";
import DetailedProduct from "./pages/Website/DetailedProduct";
import LostPassword from "./pages/Website/LostPassword";
import CheckOut from "./pages/Website/CheckOut";
import CheckOutCardInformation from "./pages/Website/CheckOutCardInformation";
import NavBar from "./components/NavBar-Footer/NavBar";
import Footer from "./components/NavBar-Footer/Footer";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyAccountOrder from "./pages/MyAccount/MyAccountOrder";
import MyAccountDetail from "./pages/MyAccount/MyAccountDetail";
import MyAccountAddress from "./pages/MyAccount/MyAccountAddress";
import PurchaseConfirmation from "./pages/Website/PurchaseConfirmation";
import DetailedProductAcc from "./pages/Website/DetailedProductAcc";
import AboutThisProject from "./pages/Website/AboutThisProject";
import Subscription from "./pages/Website/Subscription";
import NoMatch from "./pages/Website/NoMatch";
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
import ScrollToTop from "./components/ScrollToTop";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import FixedButton from "./components/Home/FixedButton";
import { useState } from "react";

function App() {
  const [hideButton, setHideButton] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div id="main">
          <ScrollToTop />
          <FixedButton hideButton={hideButton} setHideButton={setHideButton} />
          <NavBar setHideButton={setHideButton} />
          <Switch>
            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path="/accessories" component={Accessories} />
            <PublicRoute path="/coffee" component={Coffee} />
            <PublicRoute path="/cart" component={Cart} />
            <PublicRoute
              path="/product/1/:productName"
              component={DetailedProduct}
            />
            <PublicRoute
              path="/product/2/:productName"
              component={DetailedProductAcc}
            />
            <PublicRoute path="/lost-password" component={LostPassword} />
            <PublicRoute
              path="/checkout/billing-information"
              component={CheckOut}
            />
            <PublicRoute
              path="/checkout/card-information"
              component={CheckOutCardInformation}
            />
            <PublicRoute path="/my-account" component={MyAccount} exact />
            <PublicRoute path="/my-account/orders" component={MyAccountOrder} />
            <PublicRoute
              path="/my-account/address"
              component={MyAccountAddress}
            />
            <PublicRoute
              path="/my-account/account-details"
              component={MyAccountDetail}
            />
            <PublicRoute
              path="/purchase-confirmation"
              component={PurchaseConfirmation}
            />
            <PublicRoute
              path="/about-this-project"
              component={AboutThisProject}
            />
            <PublicRoute path="/subscription" component={Subscription} />
            <PrivateRoute path="/admin/dashboard" component={AdminPage} />
            <PrivateRoute
              path="/admin/products/:page"
              component={AdminProduct}
            />
            <PrivateRoute path="/admin/categories" component={AdminCategory} />
            <PrivateRoute path="/admin/orders/:page" component={AdminOrder} />
            <PrivateRoute path="/admin/users/:page" component={AdminUser} />
            <PrivateRoute
              path="/admin/product/edit/:productId"
              component={EditProduct}
            />
            <PrivateRoute
              path="/admin/category/edit/:categoryId"
              component={EditCategory}
            />
            <PrivateRoute
              path="/admin/product/create"
              component={AddNewProduct}
            />
            <PrivateRoute
              path="/admin/user/edit/:userId"
              component={EditUser}
            />

            <PrivateRoute
              path="/admin/category/create"
              component={AddNewCategory}
            />
            <PrivateRoute path="/admin/user/create" component={AddNewUser} />
            <PublicRoute component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
