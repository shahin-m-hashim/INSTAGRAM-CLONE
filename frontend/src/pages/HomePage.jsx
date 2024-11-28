import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import SearchField from "components/fields/SearchField";
import SuggestedAccountsList from "components/lists/SuggestedAccountsList";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col text-white bg-black pt-[60px] md:pt-0 pb-[50px] md:pb-0 md:pl-[73px] xl:pl-[250px]">
      <Navbar />
      <main className="size-full">
        <div className="flex justify-center">
          <div className="xs:p-5 lg:w-1/2">
            <div className="flex items-center w-full pt-4 xs:pt-0">
              <div className="hidden xs:block">
                <img src="images/friend_suggestions.webp" />
              </div>
              <div className="flex-1 px-5">
                <p className="text-sm font-semibold xs:text-base">
                  Find friends and accounts you like
                </p>
                <p className="text-xs xs:text-sm">
                  Try following 5 or more accounts for a personalized
                  experience.
                </p>
              </div>
              <div className="pr-4 w-14 xs:p-0">
                <Button>Next</Button>
              </div>
            </div>

            <div className="my-4">
              <Separator straight={true} />
            </div>

            <div className="flex flex-col w-full gap-5 px-5">
              <div className="h-10">
                <SearchField />
              </div>

              <SuggestedAccountsList />
            </div>
          </div>
        </div>
        <div className="hidden py-10 md:block">
          <Footer />
        </div>
      </main>
    </section>
  );
}
