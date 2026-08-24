const CATEGORY_ICONS = {
  "Electronics": "\u{1F4BB}",
  "Home & Kitchen": "\u{1F3E0}",
  "Fitness": "\u{1F3CB}\u{FE0F}",
  "Fashion": "\u{1F457}",
  "Grooming": "\u{1F9F4}",
  "Automotive": "\u{1F3CD}\u{FE0F}"
};

function CategoryChips({ categories, onSelect }) {
  return (
    <div className="category-card-grid">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="category-card"
          onClick={() => onSelect(category)}
        >
          <span className="category-card-icon">{CATEGORY_ICONS[category] || "\u{1F6CD}\u{FE0F}"}</span>
          <span className="category-card-name">{category}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryChips;
