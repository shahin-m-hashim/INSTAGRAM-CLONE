import Reel from "components/Reel";
import { v4 as uuidv4 } from "uuid";
import reels from "mocks/reels.json";
import Footer from "components/Footer";

export default function ReelsPage() {
  return (
    <main className="bg-primary flex flex-col text-primary h-screen overflow-auto min-w-[320px] pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px]">
      <div className="flex flex-col flex-1 gap-4 md:px-6 xl:px-36">
        <div className="flex flex-col items-center flex-1 w-full gap-2 text-white">
          {reels.map((reel) => (
            <Reel key={uuidv4()} reel={reel} />
          ))}
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
