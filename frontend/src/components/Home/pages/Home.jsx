import Links from "../Links";
import Footer from "../Footer";
import PhoneFrame from "../PhoneFrame";
import LoginForm from "../forms/LoginForm";
import SplashScreen from "../../SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <section className="flex flex-col min-h-screen gap-12 p-8 text-white bg-black lg:gap-2">
        <main className="flex items-center justify-center">
          <PhoneFrame />

          <div className="flex  flex-col gap-14 md:gap-3 w-[300px] md:w-[350px]">
            <div className="w-full md:p-10 md:border flex flex-col justify-center md:border-[rgb(54,54,54)]">
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  alt="logo"
                  width={170}
                  className="mb-10"
                  src="images/logo.svg"
                />
              </div>

              <LoginForm />
            </div>

            <div className="w-full md:p-5 md:border justify-center flex gap-1 md:border-[rgb(54,54,54)]">
              <p>Don&apos;t have an account?</p>
              <a className="text-[rgb(0,149,246)] font-semibold">Sign up</a>
            </div>

            <Links />
          </div>
        </main>
        <Footer />
      </section>
    </SplashScreen>
  );
}
