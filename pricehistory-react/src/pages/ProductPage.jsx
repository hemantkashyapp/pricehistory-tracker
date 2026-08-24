import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import PriceChart from "../components/PriceChart";
import {
  formatPrice,
  getPriceStats,
  getProductById,
  getProductImage,
  getProductUrl,
  getRecommendations
} from "../data/products";

/**
 * Product detail page.
 *
 * - useParams() reads the :id from the URL (/product/:id)
 * - useState() holds the product currently being shown
 * - useEffect() re-loads the product whenever the id in the URL changes
 *   (e.g. clicking a "Recommended for you" card while already on a
 *   product page)
 */
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProductById(id));
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="container product-page">
        <Link className="back-link" to="/">
          &larr; Back to Home
        </Link>
        <h1>Product not found</h1>
        <p className="secondary-text">
          Go back to the home page and pick a product to see its price history.
        </p>
      </main>
    );
  }

  const { highest, lowest } = getPriceStats(product);
  const chartHistory = [
    ...product.history,
    { date: "2026-08-23", price: product.currentPrice }
  ];
  const recommendations = getRecommendations(product, 4);

  return (
    <main className="container product-page">
      <Link className="back-link" to="/">
        &larr; Back to Home
      </Link>

      <section className="product-details">
        <div className="product-details-grid">
          <img src={getProductImage(product)} alt={product.title} />
          <div>
            <span className="store-badge">{product.store.toUpperCase()}</span>
            <h1>{product.title}</h1>
            <p className="secondary-text">{product.category}</p>
            <p className="price">{formatPrice(product.currentPrice)}</p>
            <a className="btn-primary" href={getProductUrl(product)} target="_blank" rel="noopener noreferrer">
              Get Deal
            </a>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Current Price</h3>
            <p>{formatPrice(product.currentPrice)}</p>
          </div>
          <div className="stat-card stat-card-low">
            <h3>Lowest Recorded</h3>
            <p>{formatPrice(lowest)}</p>
          </div>
          <div className="stat-card stat-card-high">
            <h3>Highest Recorded</h3>
            <p>{formatPrice(highest)}</p>
          </div>
        </div>
      </section>

      <section className="chart-section">
        <h2>Price History</h2>
        <p className="secondary-text">Every recorded price for this product.</p>
        <PriceChart history={chartHistory} />
      </section>

      <section className="recommendations-section">
        <div className="section-heading">
          <h2>Recommended for you</h2>
        </div>
        <ProductGrid products={recommendations} />
      </section>
    </main>
  );
}

export default ProductPage;
