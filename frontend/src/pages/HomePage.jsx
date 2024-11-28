import HomeLayout from "components/wrappers/HomeLayout";
import SignupSuggestions from "components/SignupSuggestions";
import SuggestedAccountsList from "components/lists/SuggestedAccountsList";
import Links from "components/Links";

export default function HomePage() {
  return (
    <HomeLayout>
      {/* <SignupSuggestions /> */}
      <div className="flex min-h-screen md:px-20 xl:px-32">
        <div className="flex justify-center flex-1">
          <div></div>
        </div>
        <div className="flex justify-center w-1/3">
          <div className="flex flex-col justify-start flex-1 py-6">
            <div className="flex items-center justify-between m-5">
              <div className="flex items-center flex-1 gap-4">
                <img
                  className="rounded-full size-12"
                  src="images/default_dp.webp"
                />
                <span>username</span>
              </div>
              <div className="text-sm">
                <a className="text-[rgb(0,149,246)] font-semibold">Switch</a>
              </div>
            </div>

            <div className="m-5 text-sm">
              <div className="flex items-center justify-between mb-4 font-semibold">
                <h1 className="text-[rgb(168,168,168)]">Suggested for you</h1>
                <a>See all</a>
              </div>
              <SuggestedAccountsList limit={5} />
            </div>

            <div className="m-5">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
