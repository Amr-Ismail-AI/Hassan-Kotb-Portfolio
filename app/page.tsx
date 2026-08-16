import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import Banner from "@/components/Bannar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <div className="flex w-full">
        {/* Left Sidebar */}
        <aside className="hidden w-32 shrink-0 lg:block">
          <LeftSide />
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-8 lg:px-10 xl:px-12">
            
            <Banner />

            <About />

            <Experience />

            <Projects />
            
            <Contact />
            
          </div>
        </main>
      </div>
    </div>
  );
}