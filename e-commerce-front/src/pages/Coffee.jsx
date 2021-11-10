import Navbar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function Coffee() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-5 text-center">COFFEE</h1>
      <ProductList />
      <Footer />
    </div>
  );
}

export default Coffee;
