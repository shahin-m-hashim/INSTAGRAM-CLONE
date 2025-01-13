import Button from "components/wrappers/Button";
import AddPhoneNoIcon from "icons/AddPhoneNoIcon";
import SharePhotosIcon from "icons/SharePhotosIcon";
import Carousal from "components/wrappers/Carousal";
import AddProfilePhotoIcon from "icons/AddProfilePhotoIcon";
import CompleteProfileIcon from "icons/CompleteProfileIcon";

const items = [
  {
    icon: SharePhotosIcon,
    heading: "Share Photos",
    caption: "When you share photos, they will appear on your profile.",
    button: "Share your first photo",
  },
  {
    icon: AddPhoneNoIcon,
    heading: "Add Phone Number",
    caption:
      "Add your phone number so you can reset your password, find friends and more.",
    button: "Add Phone Number",
  },
  {
    icon: CompleteProfileIcon,
    heading: "Complete Profile",
    caption: "Add your name and bio so friends can find you.",
    button: "Edit Profile",
  },
  {
    icon: AddProfilePhotoIcon,
    heading: "Add Profile Photo",
    caption: "Add a profile photo so friends can recognize you.",
    button: "Add Profile Photo",
  },
];

export default function PostsPage() {
  return (
    <div className="flex flex-col flex-1 w-full gap-4 px-5">
      <h1>Getting Started</h1>
      <Carousal id="profile-posts-carousal" duration={300} gap="0.5rem">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center flex-shrink-0 w-64 gap-4 p-4 border rounded-md border-tertiary h-60"
            >
              <Icon />
              <p className="text-sm font-semibold">{item.heading}</p>
              <p className="text-xs text-tertiary">{item.caption}</p>
              <div className="flex justify-center w-full mt-auto">
                <Button className="min-w-[152px]">{item.button}</Button>
              </div>
            </div>
          );
        })}
      </Carousal>
    </div>
  );
}
