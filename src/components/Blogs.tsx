import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowUpRight } from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
};

export function BlogList() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const blogs: BlogPost[] = filenames
    .filter((filename) => {
      const filePath = path.join(postsDirectory, filename);
      return fs.statSync(filePath).isFile();
    })
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: data.title,
        date: data.date,
      };
    });

  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="text-white mt-20">
      <h1 className="text-2xl text-white font-bold">
        <span className="text-amber-500">~</span> blogs{" "}
      </h1>

      <div className="my-10">
        {blogs.slice(0, 4).map((blog) => (
          <div key={blog.title} className="mt-5 group">
            <a
              href={`/blog/${blog.slug}`}
              className="transition-all duration-300 ease-in-out group-hover:text-amber-500"
            >
              <p className="text-lg font-bold">{blog.title}</p>
              <p className="text-gray-500 mt-1">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </a>
          </div>
        ))}
      </div>

      <a href="/blog" className="flex flex-row gap-2 text-sm text-amber-500">
        more blogs
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
