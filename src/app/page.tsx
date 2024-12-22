import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div className="flex-1">
        <Header />
        <Experience />
        <Projects />
        <Footer />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
}
