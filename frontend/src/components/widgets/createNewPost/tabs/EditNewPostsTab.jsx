import { cn } from "utils/cn";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import NewPostFiltersTab from "components/widgets/createNewPost/tabs/NewPostFiltersTab";
import NewPostAdjustmentsTab from "components/widgets/createNewPost/tabs/NewPostAdjustmentsTab";

export default function EditNewPostsTab() {
  const [status, activeEditMenu, setNewPostActiveEditMenu] = useStore(
    useShallow((store) => [
      store.newPost.status,
      store.newPost.activeEditMenu,
      store.setNewPostActiveEditMenu,
    ])
  );

  return (
    <>
      {status === "editing" && (
        <div className="w-full md:w-[320px] flex flex-col h-1/2 md:h-[440px] rounded-r-lg border-l border-l-primary">
          <div className="flex items-center gap-4 text-sm font-semibold border-b-2 border-b-tertiary">
            <button
              type="button"
              onClick={() => setNewPostActiveEditMenu("filter")}
              className={cn(
                "flex-1 text-center p-3",
                activeEditMenu === "filter"
                  ? "text-primary border-b border-b-secondary"
                  : "text-tertiary"
              )}
            >
              <span>Filters</span>
            </button>
            <button
              type="button"
              onClick={() => setNewPostActiveEditMenu("adjustments")}
              className={cn(
                "flex-1 text-center p-3",
                activeEditMenu === "adjustments"
                  ? "text-primary border-b border-b-secondary"
                  : "text-tertiary"
              )}
            >
              <span>Adjustments</span>
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {activeEditMenu === "filter" ? (
              <NewPostFiltersTab />
            ) : (
              <NewPostAdjustmentsTab />
            )}
          </div>
        </div>
      )}
    </>
  );
}
