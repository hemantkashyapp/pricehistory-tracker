import { Link } from "react-router-dom";
import TravelSearchForm from "../components/TravelSearchForm";

function FlightCompare() {
  return (
    <main className="container product-page">
      <Link className="back-link" to="/">
        &larr; Back to Home
      </Link>

      <div className="section-heading">
        <h2>✈️ Flight Compare</h2>
        <p className="secondary-text">Compare flight fares across airlines. Coming soon.</p>
      </div>

      <TravelSearchForm fromPlaceholder="From (city or airport)" toPlaceholder="To (city or airport)" />
    </main>
  );
}

export default FlightCompare;
