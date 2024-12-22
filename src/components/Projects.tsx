import { ArrowUpRight } from "lucide-react";

export const projectList = [
  {
    title: "fileease",
    description:
      "a cli tool to effortlessly sort your files based on keywords and extensions, ensuring your digital workspace is tidy and efficient.",
    technologies: ["python"],
    link: "https://github.com/puang59/FileEase",
  },
  {
    title: "wallgrab",
    description:
      "a cli tool to effortlessly sort your files based on keywords and extensions, ensuring your digital workspace is tidy and efficient.",
    technologies: ["shell"],
    link: "https://github.com/puang59/wallgrab",
  },
];

export function Projects() {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold">
        <span className="text-amber-500">~</span> projects{" "}
      </h1>
      <div className="my-10">
        {projectList.map((project) => (
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
