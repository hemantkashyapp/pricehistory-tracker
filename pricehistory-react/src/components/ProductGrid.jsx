import ProductCard from "./ProductCard";

function ProductGrid({ products, emptyMessage = "No products found." }) {
  if (!products.length) {
    return <p className="empty-message">{emptyMessage}</p>;
  }

  return (
    <div className="results-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
