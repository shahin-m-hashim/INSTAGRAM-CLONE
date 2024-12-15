import Footer from "components/Footer";
import NotFoundNavbar from "components/navbars/NotFoundNavbar";
import NotFoundContent from "components/contents/NotFoundContent";

const isAuthenticated = true;

export default function NotFoundPage() {
  return (
    <section className="text-white bg-black scrollbar-dark">
      <main className="min-w-[320px] h-screen overflow-auto">
        {!isAuthenticated && <NotFoundNavbar />}

        <div className="flex flex-col items-center px-4 size-full">
          <div className="flex items-center justify-center size-full">
            <NotFoundContent />
          </div>

          <div className="flex justify-center w-full my-10">
            <div className="md:w-[600px] lg:w-[800px]">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
