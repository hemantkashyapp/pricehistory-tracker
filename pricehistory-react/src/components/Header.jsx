import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link className="site-logo" to="/">
          Price<span>History</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <a href="/#trending">Trending</a>
          <a href="/#deals">Deals</a>
          <Link to="/stores">Stores</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/flight-compare">Flights</Link>
          <Link to="/bus-compare">Buses</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
