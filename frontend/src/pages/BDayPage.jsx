import Image from "components/Image";
import Footer from "components/Footer";
import BDayForm from "components/forms/BDayForm";
import LinksCard from "components/cards/LinksCard";
import LoginCard from "components/cards/LoginCard";
import SplashScreen from "components/wrappers/SplashScreen";

export default function BDayPage() {
  return (
    <SplashScreen>
      <section className="text-white bg-black scrollbar-dark">
        <main className="overflow-auto h-screen min-w-[320px]">
          <div className="flex items-center justify-center px-8 my-10">
            <div className="flex flex-col gap-4 w-[300px] xs:w-[350px] text-center">
              <div className="w-full flex flex-col items-center xs:border border-[rgb(54,54,54)] p-5">
                <div className="flex flex-col items-center justify-center gap-3 mb-5">
                  <Image src="images/cake_dark.webp" className="h-24 w-36" />

                  <h1>Add Your Birthday</h1>
                  <div className="flex flex-col gap-2 text-sm">
                    <p>This won&apos;t be a part of your public profile.</p>
                    <a className="text-[rgb(0,149,246)] font-semibold">
                      Why do I need to provide my birthday?
                    </a>
                  </div>
                </div>

                <BDayForm />

                <div className="w-full">
                  <a className="text-[rgb(0,149,246)] font-semibold">Go Back</a>
                </div>
              </div>

              <LoginCard />
              <LinksCard />
            </div>
          </div>

          <div className="items-center justify-center hidden px-8 my-10 md:flex">
            <Footer />
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
