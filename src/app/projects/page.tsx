import { ProjectCards } from "@/components/ProjectCards";
import { SideBar } from "@/components/SideBar";
import { Metadata } from "next";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">
          <span className="text-amber-500">~</span> projects{" "}
        </h1>
        <ProjectCards />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "These are some projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.puang.in/og/home?title=projects",
      },
    ],
  },
};
