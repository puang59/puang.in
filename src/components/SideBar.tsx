import { projectList } from "./Projects";

export function SideBar() {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Socials",
      path: "/socials",
      children: [
        { name: "x.com", path: "/socials/twitter" },
        { name: "github", path: "/socials/github" },
        { name: "linkedin", path: "/socials/github" },
      ],
    },
  ];

  const renderTree = (nodes: Array<object>, level = 0) => (
    <ul>
      {nodes.map((node: any, index) => {
        const isLast = index === nodes.length - 1;
        const prefix = level > 0 ? (isLast ? "└─ " : "├─ ") : "";
        const verticalPipe = level > 0 ? (isLast ? " " : "|") : "";

        return (
          <li key={node.name} className="text-gray-400">
            <span className="inline-block text-gray-600">
              {`${" ".repeat(level * 2)}${prefix}`}
            </span>
            <a href={node.path} className="hover:text-white">
              {node.name}
            </a>
            {node.children && (
              <>
                <span className="block text-gray-600">
                  {`${" ".repeat(level * 2)}${verticalPipe}`}
                </span>
                {renderTree(node.children, level + 1)}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="w-full md:w-80 p-4 mt-8 md:mt-0">
      <h1 className="text-2xl font-bold mb-4">
        {" "}
        <span className="text-amber-500">~</span> navigation
      </h1>
      {renderTree(routes)}
    </div>
  );
}
