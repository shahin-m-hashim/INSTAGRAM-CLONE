import Video from "components/Video";
import LikeIcon from "icons/LikeIcon";
import MoreIcon from "icons/MoreIcon";
import ShareIcon from "icons/ShareIcon";
import CommentsIcon from "icons/CommentsIcon";
import ProfilePicture from "components/ProfilePicture";

const Reel = ({ reel }) => {
  return (
    <div className="relative w-full h-[calc(100vh-50px)] md:h-screen text-xs xs:w-1/2 xl:w-2/5">
      <Video
        src={reel.src}
        videoId={reel.id}
        rootStyles="size-full"
        videoStyles="object-cover object-center size-full"
      />

      <div className="absolute z-10 bg-transparent bottom-4 right-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <LikeIcon className="text-white" />
            <span>{reel.likes}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CommentsIcon className="text-white" />
            <span>{reel.comments}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShareIcon className="text-white" />
            <span>{reel.shares}</span>
          </div>
          <div className="flex flex-col items-center">
            <MoreIcon className="text-white rotate-90" />
          </div>
        </div>
      </div>

      <div className="absolute z-10 bottom-4 left-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {reel.user.profilePic ? (
              <img src={reel.user.profilePic} className="rounded-full size-8" />
            ) : (
              <ProfilePicture storyPadding="0px" className="size-8" />
            )}
            <span className="font-bold">{reel.user.username}</span>
            <button className="px-3 py-[2px] border border-white rounded-md">
              Follow
            </button>
          </div>
          <p className="text-sm">Caption</p>
          <button
            type="button"
            className="px-2 py-1 font-bold border border-white rounded-md"
          >
            <span>Music. Original audio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reel;
