import Footer from "components/Footer";
import GroupedOptions from "components/GroupedOptions";

export default function ContentPreferencesSettingsPage() {
  return (
    <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
      <div className="flex flex-col w-full gap-6">
        <div className="hidden mt-14 md:block">
          <h1 className="text-xl font-bold">Content preferences</h1>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Sensitive content control</h2>

          <p className="text-xs text-[rgb(168,168,168)]">
            Sensitive content doesn&apos;t go against our Community Guidelines,
            but refers to topics some people may not want to see.{" "}
            <a className="text-white hover:underline">Learn more.</a>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1>Choose how much sensitive content to see:</h1>

            <p className="text-xs text-[rgb(168,168,168)]">
              This affects search results as well as recommended content in
              Explore, Reels, feed and hashtag pages. This also affects comments
              you see on other people&apos;s posts.
            </p>
          </div>

          <GroupedOptions
            options={[
              {
                title: "Less",
                description: "You might see less sensitive content",
              },
              {
                title: "Standard",
                description: "You might see some sensitive content",
              },
              {
                title: "More",
                description: "You might see more sensitive content",
              },
            ]}
          />
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
