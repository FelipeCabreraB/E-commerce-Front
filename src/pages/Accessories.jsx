import ProductList from "../components/ProductList";

function Accessories() {
  return (
    <div>
      <h1 className="mt-5 text-center">ACCESORIES</h1>
      <ProductList categoryId={2} />
    </div>
  );
}

export default Accessories;
