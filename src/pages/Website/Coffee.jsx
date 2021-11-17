import ProductList from "../../components/ProductComponents/ProductList";

function Coffee() {
  return (
    <div>
      <h1 className="mt-5 text-center">COFFEE</h1>
      <ProductList categoryId={1} />
    </div>
  );
}

export default Coffee;
