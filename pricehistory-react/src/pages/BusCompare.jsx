import { Link } from "react-router-dom";
import TravelSearchForm from "../components/TravelSearchForm";

function BusCompare() {
  return (
    <main className="container product-page">
      <Link className="back-link" to="/">
        &larr; Back to Home
      </Link>

      <div className="section-heading">
        <h2>🚌 Bus Compare</h2>
        <p className="secondary-text">Compare bus fares across operators. Coming soon.</p>
      </div>

      <TravelSearchForm fromPlaceholder="From (city)" toPlaceholder="To (city)" />
    </main>
  );
}

export default BusCompare;
