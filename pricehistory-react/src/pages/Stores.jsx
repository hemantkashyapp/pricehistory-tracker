import { Link } from "react-router-dom";
import { STORES } from "../data/stores";

function Stores() {
  return (
    <main className="container product-page">
      <Link className="back-link" to="/">
        &larr; Back to Home
      </Link>

      <div className="section-heading">
        <h2>Stores</h2>
        <p className="secondary-text">Jump straight to the stores we track prices from.</p>
      </div>

      <div className="store-grid">
        {STORES.map((store) => (
          <a
            key={store.name}
            className="store-card"
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="store-card-icon">{store.initial}</span>
            <span className="store-card-name">{store.name}</span>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Stores;
