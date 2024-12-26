import Footer from "components/Footer";

export default function ExplorePage() {
  return (
    <main className="bg-primary flex flex-col text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="text-red-500 font-semibold flex flex-col gap-[2px] md:gap-1 md:my-10 md:px-6 xl:px-36">
        <div className="relative grid flex-1 w-full grid-cols-3 grid-rows-2 gap-[2px] md:gap-1">
          <div className="bg-gray-300 aspect-square">Box 1</div>
          <div className="bg-gray-300 aspect-square">Box 2</div>
          <div className="bg-gray-300 aspect-square">Box dummy</div>
          <div className="bg-gray-300 aspect-square">Box 3</div>
          <div className="bg-gray-300 aspect-square">Box 4</div>
          <div className="bg-gray-300 aspect-square">Box dummy</div>
          <div className="absolute z-10 right-0 w-[calc((100%/3)-2px)] inset-y-0 bg-slate-300">
            full Height Video
          </div>
        </div>

        <div className="relative grid flex-1 w-full grid-cols-3 grid-rows-2 gap-[2px] md:gap-1">
          <div className="bg-gray-300 aspect-square">Box dummy</div>
          <div className="bg-gray-300 aspect-square">Box 1</div>
          <div className="bg-gray-300 aspect-square">Box 2</div>
          <div className="bg-gray-300 aspect-square">Box dummy</div>
          <div className="bg-gray-300 aspect-square">Box 3</div>
          <div className="bg-gray-300 aspect-square">Box 4</div>
          <div className="absolute z-10 left-0 w-[calc((100%/3)-2px)] inset-y-0 bg-slate-300">
            full Height Video
          </div>
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
