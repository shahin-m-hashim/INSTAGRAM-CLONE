import Links from "components/Links";
import PostsList from "components/lists/PostsList";
import StoriesList from "components/lists/StoriesList";
import HomeLayout from "components/wrappers/HomeLayout";
import SignupSuggestions from "components/SignupSuggestions";
import SuggestionCards from "components/cards/SuggestionCards";
import SuggestedAccountsList from "components/lists/SuggestedAccountsList";

export default function HomePage() {
  return (
    <HomeLayout>
      {/* <SignupSuggestions /> */}

      <div className="flex sm:px-10 lg:px-24">
        <div className="flex justify-center w-full xl:w-[65%]">
          <div className="flex flex-col size-full">
            <div className="px-4 py-4">
              <StoriesList />
            </div>

            <div className="px-4 py-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-sm">
                  <h1 className="font-semibold">Suggestions for you</h1>
                  <a className="text-[rgb(0,149,246)]">See all</a>
                </div>
                <SuggestionCards />
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-center sm:justify-center">
                <div className="w-full sm:w-3/4">
                  <div className="flex flex-col items-center">
                    <PostsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:flex justify-center hidden w-[35%]">
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
