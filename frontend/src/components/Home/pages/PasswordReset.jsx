import Footer from "../Footer";
import SplashScreen from "../../SplashScreen";
import PasswordResetForm from "../forms/PasswordResetForm";

export default function PasswordReset() {
  return (
    <SplashScreen>
      <section className="relative flex flex-col text-sm text-white bg-black lg:gap-2 min-h-svh">
        <nav className="fixed bg-black z-10 top-0 left-0 right-0 border-b border-[rgb(54,54,54)] h-14">
          <div className="flex items-center h-full px-6">
            <div className="flex items-center justify-start flex-1 h-full pt-2 xl:justify-center xl:pr-40">
              <img className="h-7" src="icons/instagram.svg" />
            </div>
            <div className="flex-1 h-full"></div>
          </div>
        </nav>
        <main className="flex flex-col items-center justify-center h-screen pt-14">
          <PasswordResetForm />
        </main>
        <div className="p-8 pb-14">
          <Footer />
        </div>
      </section>
    </SplashScreen>
  );
}
