import LikeIcon from "icons/LikeIcon";
import MoreIcon from "icons/MoreIcon";
import Footer from "components/Footer";
import ShareIcon from "icons/ShareIcon";
import CommentsIcon from "icons/CommentsIcon";
import ProfilePicture from "components/ProfilePicture";

export default function ReelsPage() {
  return (
    <main className="bg-primary flex flex-col text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex flex-col flex-1 gap-4 md:my-10 md:px-6 xl:px-36">
        <div className="flex flex-col items-center flex-1 w-full gap-2 text-white">
          <div className="relative w-full h-[calc(100vh-110px)] md:h-[calc(100vh-2.5rem)] text-xs xs:w-1/2 xl:w-2/5">
            <div className="absolute inset-0 z-0">
              <video
                loop
                muted
                autoPlay
                src="public/videos/1.mp4"
                className="object-cover object-center size-full"
              />
            </div>

            <div className="absolute z-10 bg-transparent bottom-4 right-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-2">
                  <LikeIcon className="text-white" />
                  <span>120K</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <CommentsIcon className="text-white" />
                  <span>120K</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <ShareIcon className="text-white" />
                  <span>120K</span>
                </div>

                <div className="flex flex-col items-center">
                  <MoreIcon className="text-white rotate-90" />
                </div>
              </div>
            </div>

            <div className="absolute z-10 bottom-4 left-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ProfilePicture storyPadding="0px" className="size-8" />
                  <span className="font-bold">Username</span>
                  <button className="px-3 py-[2px] border border-white rounded-md">
                    Follow
                  </button>
                </div>

                <p className="text-sm">Best uk drill?? link in bio!!!</p>

                <button
                  type="button"
                  className="px-2 py-1 font-bold border border-white rounded-md "
                >
                  <span>Music. Original audio</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[calc(100vh-110px)] md:h-[calc(100vh-2.5rem)] text-xs xs:w-1/2 xl:w-2/5">
            <div className="absolute inset-0 z-0">
              <video
                loop
                muted
                autoPlay
                src="public/videos/2.mp4"
                className="object-cover object-center size-full"
              />
            </div>

            <div className="absolute z-10 bg-transparent bottom-4 right-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-2">
                  <LikeIcon className="text-white" />
                  <span>120K</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <CommentsIcon className="text-white" />
                  <span>120K</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <ShareIcon className="text-white" />
                  <span>120K</span>
                </div>

                <div className="flex flex-col items-center">
                  <MoreIcon className="text-white rotate-90" />
                </div>
              </div>
            </div>

            <div className="absolute z-10 bottom-4 left-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ProfilePicture storyPadding="0px" className="size-8" />
                  <span className="font-bold">Username</span>
                  <button className="px-3 py-[2px] border border-white rounded-md">
                    Follow
                  </button>
                </div>

                <p className="text-sm">Best uk drill?? link in bio!!!</p>

                <button
                  type="button"
                  className="px-2 py-1 font-bold border border-white rounded-md "
                >
                  <span>Music. Original audio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
