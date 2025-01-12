import Post from "components/Post";
import Links from "components/Links";
import posts from "mocks/posts.json";
import Footer from "components/Footer";
import Stories from "components/lists/Stories";
import Accounts from "components/lists/Accounts";
import ProfilePicture from "components/ProfilePicture";
import AccountSuggestions from "components/AccountSuggestions";
import SuggestionCards from "components/cards/SuggestionCards";

export default function HomePage() {
  const following = 52;

  return (
    <main className="h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      {following <= 5 ? (
        <AccountSuggestions />
      ) : (
        <div className="flex gap-14 sm:px-10 lg:px-24">
          <div className="flex justify-center w-full xl:w-[65%]">
            <div className="flex flex-col size-full">
              <div className="p-4">
                <Stories />
              </div>

              <div className="px-4 py-4">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <h1>Suggestions for you</h1>
                    <a className="text-link-primary">See all</a>
                  </div>
                  <SuggestionCards />
                </div>
              </div>

              <div className="py-4">
                <div className="flex items-center sm:justify-center">
                  <div className="w-full">
                    <div className="flex flex-col items-center">
                      {posts.map((post) => (
                        <Post post={post} key={post.id} />
                      ))}
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
                  <ProfilePicture
                    storyPadding="2px"
                    className="size-12"
                    id="home-profile-pic"
                  />
                  <span>username</span>
                </div>
                <div className="text-sm">
                  <a className="font-semibold text-link-primary hover:text-link-primary-hover">
                    Switch
                  </a>
                </div>
              </div>

              <div className="m-5 text-sm">
                <div className="flex items-center justify-between mb-4 font-semibold">
                  <h1 className=" text-tertiary">Suggested for you</h1>
                  <a>See all</a>
                </div>
                <Accounts limit={5} />
              </div>

              <div className="m-5">
                <Links />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
