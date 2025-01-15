import useStore from "store/_store";
import EditNewPostsTab from "components/widgets/createNewPost/tabs/EditNewPostsTab";
import CropNewPostsTab from "components/widgets/createNewPost/tabs/CropNewPostsTab";
import SelectNewPostsTab from "components/widgets/createNewPost/tabs/SelectNewPostsTab";
import DiscardNewPostModal from "components/widgets/createNewPost/modals/DiscardNewPostModal";
import EditNewPostDetailsTab from "components/widgets/createNewPost/tabs/EditNewPostDetailsTab";
import CreateNewPostModalHeader from "components/widgets/createNewPost/CreateNewPostModalHeader";
import CloseCreateNewPostWidgetButton from "components/widgets/createNewPost/CloseCreateNewPostWidgetButton";

export default function CreateNewPostWidget() {
  const resetNewPostSlice = useStore((state) => state.resetNewPostSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(useStore.getState().newPost));
    resetNewPostSlice();
  };

  return (
    <div className="absolute inset-0 z-[100] pointer-events-auto backdrop-brightness-50">
      <div className="relative items-center justify-center md:flex text-primary size-full">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col md:h-[480px] shadow-primary bg-widget rounded-lg "
        >
          <CreateNewPostModalHeader />

          <div className="flex flex-col h-[calc(100vh-40px)] md:h-full md:flex-row overflow-y-auto">
            <SelectNewPostsTab />
            <CropNewPostsTab />

            <EditNewPostsTab />
            <EditNewPostDetailsTab />
          </div>
        </form>

        <DiscardNewPostModal />

        <CloseCreateNewPostWidgetButton />
      </div>
    </div>
  );
}
