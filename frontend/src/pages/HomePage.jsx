import Links from "components/Links";
import users from "mocks/users.json";
import posts from "mocks/posts.json";
import MoreIcon from "icons/MoreIcon";
import SaveIcon from "icons/SaveIcon";
import LikeIcon from "icons/LikeIcon";
import ShareIcon from "icons/ShareIcon";
import Separator from "components/Separator";
import CommentsIcon from "icons/CommentsIcon";
import HomeLayout from "components/wrappers/HomeLayout";
import SignupSuggestions from "components/SignupSuggestions";
import SuggestedAccountsList from "components/lists/SuggestedAccountsList";

export default function HomePage() {
  return (
    <HomeLayout>
      {/* <SignupSuggestions /> */}
      <div className="flex min-h-screen sm:px-10 lg:px-24">
        <div className="flex justify-center w-full xl:w-[65%] py-5 sm:py-10 px-5">
          <div className="flex flex-col w-full h-full">
            {/* STORIES */}
            <ul className="flex items-center h-full gap-4 overflow-x-auto overflow-y-hidden">
              {users.map((user) => (
                <li key={user.id}>
                  <div
                    className="rounded-full p-[2px]"
                    style={{
                      background: `conic-gradient(#FFD600, #FF7A00, #FF0069, #D300C5, #7638FA, #FFD600)`,
                    }}
                  >
                    <img
                      alt={`${user.username}`}
                      src={user.profilePic || "images/default_dp.webp"}
                      className="border-2 border-black rounded-full min-w-14"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center my-8 sm:justify-center size-full fex-col">
              <div className="w-full sm:w-3/4">
                <div className="flex flex-col justify-center size-full">
                  {/* SUGGESTIONS */}
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold">Suggestions for you</h1>
                      <a className="text-[rgb(0,149,246)]">See all</a>
                    </div>
                    <div className="flex gap-4 my-4 overflow-x-auto">
                      {users.map((user) => (
                        <div
                          key={user.id}
                          className="flex min-w-[170px] flex-col border border-[rgb(54,54,54)]"
                        >
                          <div className="flex flex-col items-center justify-center flex-1 gap-2 my-4">
                            <img
                              alt={`${user.username}`}
                              src={user.profilePic || "images/default_dp.webp"}
                              className="w-3/5 border-2 border-black rounded-full"
                            />
                            <div className="flex gap-2">
                              <span className="text-sm font-semibold">
                                {user.fullName}
                              </span>
                              {user.isVerified && (
                                <img src="icons/verified.svg" alt="verified" />
                              )}
                            </div>
                            <span className="text-sm">{user.tag}</span>
                          </div>

                          <div className="text-center border-t border-t-[rgb(54,54,54)] py-2">
                            <a className="text-[rgb(0,149,246)] font-semibold">
                              Follow
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* POSTS */}
                  <div>
                    <Separator straight={true} />
                    {posts.map((post) => (
                      <div key={post.id} className="flex flex-col my-4">
                        <div className="flex items-center justify-between pb-4">
                          <div className="flex items-center gap-2">
                            <img
                              alt={`${post.username}`}
                              className="w-10 rounded-full"
                              src={post.profilePic || "images/default_dp.webp"}
                            />
                            <div className="flex flex-col">
                              <span className="font-semibold">
                                {post.username}
                              </span>
                              <span className="text-sm">{post.tag}</span>
                            </div>
                          </div>
                          <MoreIcon />
                        </div>
                        <img src={post.url} alt="post" />

                        <div className="flex flex-col gap-2 p-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <LikeIcon />
                              <CommentsIcon />
                              <ShareIcon />
                            </div>
                            <SaveIcon />
                          </div>

                          <p>{post.noOfLikes} likes</p>
                          <div>
                            <span className="text-sm font-semibold">
                              {post.username}&nbsp;
                            </span>
                            <span>{post.caption}</span>
                          </div>
                          <a className="text-[rgb(170,170,170)] text-sm font-semibold">
                            View all {post.noOfComments} comments
                          </a>
                          <p className="text-sm text-[rgb(168,168,168)]">
                            {post.postedAt}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Separator straight={true} />
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
