const filters = [
  "aden",
  "clarendon",
  "crema",
  "gingham",
  "juno",
  "lark",
  "ludwik",
  "moon",
  "original",
  "perpetua",
  "reyes",
  "slumber",
];

export default function NewPostFiltersTab() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className="flex flex-col items-center gap-2"
        >
          <img
            alt="filter_example"
            className={`filter-${filter}`}
            src="images/filter_example.jpg"
          />

          <span>{filter}</span>
        </button>
      ))}
    </div>
  );
}
