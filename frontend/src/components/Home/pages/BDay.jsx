import SplashScreen from "../../SplashScreen";
import LinksCard from "../cards/LinksCard";
import LoginCard from "../cards/LoginCard";
import Footer from "../Footer";
import BDayForm from "../forms/BDayForm";

export default function BDay() {
  return (
    <SplashScreen>
      <section className="flex flex-col text-white bg-black lg:gap-2">
        <main className="flex items-center justify-center min-h-screen">
          <div className="w-[300px] md:w-[350px] text-center">
            <div className="w-full flex flex-col items-center md:border md:border-[rgb(54,54,54)] p-5">
              <div className="flex flex-col items-center justify-center gap-3 mb-5">
                <img
                  style={{
                    width: "145px",
                    height: "98x",
                  }}
                  src="images/cake_white.webp"
                />
                <h1>Add Your Birthday</h1>
                <div className="text-sm">
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
            <div className="my-3">
              <LoginCard />
            </div>
            <LinksCard />
          </div>
        </main>
        <div className="my-10">
          <Footer />
        </div>
      </section>
    </SplashScreen>
  );
}
