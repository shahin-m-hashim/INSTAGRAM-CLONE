import useStore from "store/_store";
import { firstCharToUpperCase } from "utils/casing";
import { cn } from "utils/cn";
import { useShallow } from "zustand/shallow";

const filters = [
  "aden",
  "clarendon",
  "crema",
  "gingham",
  "juno",
  "lark",
  "ludwig",
  "moon",
  "original",
  "perpetua",
  "reyes",
  "slumber",
];

export default function NewPostFiltersTab() {
  const [files, currentlyInView, setNewPostFilter] = useStore(
    useShallow((state) => [
      state.newPost.files,
      state.newPost.currentlyInView,
      state.setNewPostFilter,
    ])
  );

  const currentFilter = files.find((f) => f.id === currentlyInView).filter;

  return (
    <div className="grid grid-cols-3 gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => setNewPostFilter(filter)}
          className="flex flex-col items-center gap-2"
        >
          <img
            alt="filter_example"
            className={cn(
              `filter-${filter} size-[85px]`,
              currentFilter === filter && "border-2 border-link-primary"
            )}
            src="images/filter_example.jpg"
          />

          <span
            className={cn(
              "text-xs font-semibold",
              currentFilter === filter ? "text-link-primary" : "text-tertiary"
            )}
          >
            {firstCharToUpperCase(filter)}
          </span>
        </button>
      ))}
    </div>
  );
}
