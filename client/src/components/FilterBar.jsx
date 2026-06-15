function FilterBar({
  selectedCategory,
  setSelectedCategory,
  setShowFavourites,
}) {
  const categories = [
    "All",
    "Motivation",
    "Life",
    "Humor",
    "Success",
    "Other",
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            setSelectedCategory(category);
            setShowFavourites(false);
          }}
          className={`
            px-8 py-4
            rounded-full
            text-lg
            shadow-md
            transition
            hover:scale-105

            ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;