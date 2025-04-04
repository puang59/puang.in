import { ArrowUpRight } from "lucide-react";

export const projectList = [
  {
    title: "gooseboard",
    description:
      "a minimal whiteboard application for quick sketching and collaboration",
    technologies: ["typescript"],
    link: "https://gooseboard.puang.in",
  },
  {
    title: "xtoxic",
    description:
      "a tool that analyzes your tweets to determine your toxicity level",
    technologies: ["typescript"],
    link: "https://xtoxic.puang.in",
  },
  {
    title: "nekotv",
    description: "an anime streaming platform with a modern interface",
    technologies: ["typescript"],
    link: "https://nekotv.live",
  },
  {
    title: "hearmeout",
    description: "a platform for anonymous sharing and communication",
    technologies: ["typescript"],
    link: "https://vent.lol",
  },
  {
    title: "devknit-landing",
    description:
      "a community platform for developers to connect and share knowledge",
    technologies: ["typescript"],
    link: "https://devknit.com",
  },
  {
    title: "fileease",
    description:
      "a cli tool to sort files by keywords and extensions, keeping your workspace tidy",
    technologies: ["python"],
    link: "https://github.com/puang59/FileEase",
  },
  {
    title: "wallgrab",
    description:
      "a shell script to download high quality wallpapers directly from your terminal",
    technologies: ["shell"],
    link: "https://github.com/puang59/wallgrab",
  },
  {
    title: "roboart",
    description:
      "a basic random avatar generator which generates avatar in 4 different sets when hash is provided",
    technologies: ["python"],
    link: "https://github.com/puang59/roboart",
  },
  {
    title: "ventbot",
    description:
      "a discord bot designed to facilitate anonymous communication between members",
    technologies: ["python"],
    link: "https://github.com/puang59/VentBot-Host",
  },
];

export function Projects() {
  return (
    <div className="text-white mt-20">
      <h1 className="text-2xl font-bold">
        <span className="text-amber-500">~</span> projects{" "}
      </h1>
      <div className="my-10">
        {projectList.slice(0, 3).map((project) => (
          <div key={project.title} className="mt-10 group">
            <a
              href={project.link}
              className="transition-all duration-300 ease-in-out group-hover:text-amber-500"
            >
              <p className="text-xl font-bold">{project.title}</p>

              <p className="text-gray-400 mt-5">{project.description}</p>

              <p className="text-sm text-gray-500 mt-2">
                {project.technologies.map((tech) => (
                  <span key={tech}>* {tech}</span>
                ))}
              </p>
            </a>
          </div>
        ))}
      </div>

      <a
        href="/projects"
        className="flex flex-row gap-2 text-sm text-amber-500"
      >
        more projects
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
