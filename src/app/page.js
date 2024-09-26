import { Footer } from "./internals/Footer";
import { HomeSection } from "./internals/Home-Section";

export default function Home() {
  return (
    <div className="bg-black-100 min-h-screen">
      <main className="relative   flex justify-center items-center  flex-col overflow-hidden  mx-auto">
        <HomeSection/>
      </main>
 </div>
  );
} 