import HomeIcon from "icons/HomeIcon";
import Footer from "components/Footer";
import ReelsIcon from "icons/ReelsIcon";
import SearchIcon from "icons/SearchIcon";
import CreateIcon from "icons/CreateIcon";
import ExploreIcon from "icons/ExploreIcon";
import SettingsIcon from "icons/SettingsIcon";
import MessengerIcon from "icons/MessengerIcon";
import InstagramTextIcon from "icons/InstagramTextIcon";
import InstagramLogoIcon from "icons/InstagramLogoIcon";
import NotificationsIcon from "icons/NotificationsIcon";

export default function HomePage() {
  return (
    <section className="relative h-screen overflow-hidden text-white bg-black">
      <nav className="absolute z-10 left-0 bottom-0 h-[50px] w-full md:h-full md:w-[73px] xl:w-[250px]">
        <div className="size-full overflow-auto bg-black flex md:flex-col justify-center sm:px-6 md:py-10 md:border-r md:border-r-[rgb(38,38,38)] border-t border-t-[rgb(38,38,38)] text-[rgb(245,245,245)]">
          <div className="hidden md:flex">
            <div className="hidden xl:block size-full">
              <InstagramTextIcon />
            </div>
            <div className="xl:hidden size-full">
              <InstagramLogoIcon />
            </div>
          </div>

          <div className="flex flex-1 md:justify-start md:flex-col md:my-12">
            <div className="flex items-center justify-between w-full md:gap-8 md:flex-col">
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <HomeIcon />
                <span className="hidden font-bold xl:block">Home</span>
              </div>
              <div className="items-center hidden gap-4 md:flex size-full">
                <SearchIcon />
                <span className="hidden xl:block">Search</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <ExploreIcon />
                <span className="hidden xl:block">Explore</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <ReelsIcon />
                <span className="hidden xl:block">Reels</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <MessengerIcon />
                <span className="hidden xl:block">Messages</span>
              </div>
              <div className="items-center hidden gap-4 md:flex size-full">
                <NotificationsIcon />
                <span className="hidden xl:block">Notifications</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <CreateIcon />
                <span className="hidden xl:block">Create</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <img
                  className="size-[24px] rounded-full"
                  src="images/default_dp.webp"
                />
                <span className="hidden xl:block">Profile</span>
              </div>
            </div>
          </div>

          <div className="items-center hidden gap-4 md:flex">
            <SettingsIcon />
            <span className="hidden xl:block">More</span>
          </div>
        </div>
      </nav>
      <main className="overflow-auto flex mb-[50px] md:mb-0 flex-col flex-1 md:ml-[73px] xl:ml-[250px]">
        <div className="my-10 ">
          <Footer />
        </div>
      </main>
    </section>
  );
}
