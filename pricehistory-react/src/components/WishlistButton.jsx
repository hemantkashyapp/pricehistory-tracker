import { useWishlist } from "../context/WishlistContext";

/**
 * WishlistButton - a small heart toggle placed on a ProductCard.
 * Reads/writes the shared wishlist context, so its filled/empty
 * state is always in sync with the /wishlist page.
 */
function WishlistButton({ productId }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const active = isWishlisted(productId);

  return (
    <button
      type="button"
      className={`wishlist-btn${active ? " is-active" : ""}`}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(productId);
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path
          d="M12 20.5s-7.5-4.6-10-9.3C.4 8 1.7 4.5 5 3.5c2-.6 4 .1 5.3 1.9L12 7.2l1.7-1.8c1.3-1.8 3.3-2.5 5.3-1.9 3.3 1 4.6 4.5 3 7.7-2.5 4.7-10 9.3-10 9.3z"
          fill={active ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default WishlistButton;
