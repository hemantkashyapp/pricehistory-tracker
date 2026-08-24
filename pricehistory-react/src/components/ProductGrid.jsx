import ProductCard from "./ProductCard";

/**
 * ProductGrid - renders a list of ProductCard components.
 * Props:
 *   - products: array of product objects
 *   - emptyMessage: text shown when the list is empty
 */
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
