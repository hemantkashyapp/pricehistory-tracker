import { Link } from "react-router-dom";
import { getPriceStats, getProductImage, getProductUrl, formatPrice } from "../data/products";
import WishlistButton from "./WishlistButton";

function ProductCard({ product }) {
  const { highest, lowest } = getPriceStats(product);

  return (
    <article className="product-card">
      <WishlistButton productId={product.id} />
      <span className="store-badge">{product.store.toUpperCase()}</span>

      <Link className="card-image-link" to={`/product/${product.id}`}>
        <img src={getProductImage(product)} alt={product.title} loading="lazy" />
      </Link>

      <div className="price-stats">
        <div className="stat-chip stat-high">
          <span className="stat-value">{formatPrice(highest)}</span>
          <span className="stat-label">Highest</span>
        </div>
        <div className="stat-chip stat-low">
          <span className="stat-value">{formatPrice(lowest)}</span>
          <span className="stat-label">Lowest</span>
        </div>
      </div>

      <h3 className="card-title">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>

      <p className="card-price">
        Price: <strong>{formatPrice(product.currentPrice)}</strong>
      </p>

      <div className="card-actions">
        <a className="btn-primary" href={getProductUrl(product)} target="_blank" rel="noopener noreferrer">
          Get Deal
        </a>
        <Link className="btn-secondary" to={`/product/${product.id}`}>
          Price History
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
