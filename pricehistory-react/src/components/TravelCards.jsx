import { Link } from "react-router-dom";

function TravelCards() {
  return (
    <div className="travel-card-grid">
      <Link className="travel-card" to="/flight-compare">
        <span className="travel-card-icon">✈️</span>
        <span className="travel-card-body">
          <span className="travel-card-title">Flight Compare</span>
          <span className="travel-card-desc">Compare fares across airlines</span>
        </span>
      </Link>
      <Link className="travel-card" to="/bus-compare">
        <span className="travel-card-icon">🚌</span>
        <span className="travel-card-body">
          <span className="travel-card-title">Bus Compare</span>
          <span className="travel-card-desc">Compare fares across operators</span>
        </span>
      </Link>
    </div>
  );
}

export default TravelCards;
