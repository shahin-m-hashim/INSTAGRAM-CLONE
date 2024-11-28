/* eslint-disable react/prop-types */
import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <section className="min-h-screen flex flex-col text-white bg-black pt-[60px] md:pt-0 pb-[50px] md:pb-0 md:pl-[73px] xl:pl-[250px]">
      <Navbar />
      <main className="size-full">
        {children}
        <div className="hidden py-10 md:block">
          <Footer />
        </div>
      </main>
    </section>
  );
}
