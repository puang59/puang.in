import { ProjectCards } from "@/components/ProjectCards";
import { projectList } from "@/components/Projects";
import { SideBar } from "@/components/SideBar";

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
