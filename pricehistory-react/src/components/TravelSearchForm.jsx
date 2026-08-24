import { useState } from "react";

/**
 * TravelSearchForm - a From / To / Date search bar reused by the
 * Flight Compare and Bus Compare pages. There is no backend or
 * travel API here, so submitting just reveals a "coming soon" note
 * instead of faking results.
 */
function TravelSearchForm({ fromPlaceholder = "From", toPlaceholder = "To" }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ from: "", to: "", date: "" });

  function handleChange(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="travel-search">
      <form className="travel-search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={fromPlaceholder}
          value={form.from}
          onChange={handleChange("from")}
        />
        <input
          type="text"
          placeholder={toPlaceholder}
          value={form.to}
          onChange={handleChange("to")}
        />
        <input type="date" value={form.date} onChange={handleChange("date")} />
        <button type="submit">Search</button>
      </form>

      {submitted && (
        <p className="coming-soon-note">
          Live results aren&apos;t connected yet — this is a front-end placeholder. Search
          results will appear here once a travel API is integrated.
        </p>
      )}
    </div>
  );
}

export default TravelSearchForm;
