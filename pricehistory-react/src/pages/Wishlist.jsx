import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlistProducts } = useWishlist();

  return (
    <main className="container product-page">
      <Link className="back-link" to="/">
        &larr; Back to Home
      </Link>

      <div className="section-heading">
        <h2>Your Wishlist</h2>
        <p className="secondary-text">Saved on this device, using your browser&apos;s storage.</p>
      </div>

      <ProductGrid
        products={wishlistProducts}
        emptyMessage="Nothing saved yet — tap the heart on any product to add it here."
      />
    </main>
  );
}

export default Wishlist;
