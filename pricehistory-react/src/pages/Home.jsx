import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import CategoryChips from "../components/CategoryChips";
import TravelCards from "../components/TravelCards";
import {
  getAllProducts,
  getBiggestDrops,
  getCategories,
  searchProducts
} from "../data/products";

/**
 * Home page.
 *
 * State (useState):
 *   - query: the text currently typed in the search box
 *   - activeFilter: the label shown above the "Search Results" section
 *     (either the typed query or a clicked category name)
 *   - searchResults: the array of products matching query/category
 *
 * Effect (useEffect):
 *   - Logs a message once, on mount, just to demonstrate the hook -
 *     everything else here reacts directly to user events instead.
 */
function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const categories = getCategories();
  const trendingProducts = getAllProducts().slice(0, 6);
  const dealProducts = getBiggestDrops(6);

  useEffect(() => {
    console.log("Home page mounted - loaded", getAllProducts().length, "products");
  }, []);

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (!query.trim()) return;

    setSearchResults(searchProducts(query));
    setActiveFilter(query);
  }

  function handleCategoryClick(category) {
    setSearchResults(getAllProducts().filter((product) => product.category === category));
    setActiveFilter(category);
    setQuery("");
  }

  function clearSearch() {
    setActiveFilter(null);
    setSearchResults([]);
    setQuery("");
  }

  return (
    <main>
      <section className="hero container">
        <p className="eyebrow">Simple price tracking</p>
        <h1>Never buy at the wrong price again</h1>
        <p className="hero-description">
          Search a product below to see its price history, and its highest and lowest
          recorded price.
        </p>

        <form className="search-form" onSubmit={handleSearchSubmit}>
          <label htmlFor="productInput" className="sr-only">
            Search products
          </label>
          <input
            id="productInput"
            type="text"
            autoComplete="off"
            placeholder="Search for a product, e.g. helmet, watch, backpack..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {activeFilter && (
        <section className="container" id="searchResultsSection">
          <div className="section-heading">
            <h2>Results for &quot;{activeFilter}&quot;</h2>
            <button type="button" className="btn-secondary" onClick={clearSearch}>
              Clear
            </button>
          </div>
          <ProductGrid products={searchResults} />
        </section>
      )}

      <section className="container" id="categories">
        <div className="section-heading">
          <h2>Popular Categories</h2>
        </div>
        <CategoryChips categories={categories} onSelect={handleCategoryClick} />
      </section>

      <section className="container" id="travel">
        <div className="section-heading">
          <h2>Travel</h2>
          <p className="secondary-text">Compare fares for your next trip</p>
        </div>
        <TravelCards />
      </section>

      <section className="container" id="trending">
        <div className="section-heading">
          <h2>Trending Products</h2>
        </div>
        <ProductGrid products={trendingProducts} />
      </section>

      <section className="container" id="deals">
        <div className="section-heading">
          <h2>Deals and Drops</h2>
          <p className="secondary-text">Biggest price drops from their all-time high</p>
        </div>
        <ProductGrid products={dealProducts} />
      </section>
    </main>
  );
}

export default Home;
