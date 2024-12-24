import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SideBar } from "@/components/SideBar";
import { Metadata } from "next";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
};

export default function Blogs() {
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
    <div className="font-mono min-h-screen flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-10">
          <span className="text-amber-500">~</span> blogs
        </h1>
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.slug} className="pb-4 group">
              <a
                href={`/blog/${blog.slug}`}
                className="group-hover:text-amber-500 transition-all duration-300"
              >
                <span className="text-xl font-semibold">{blog.title}</span>

                <p className="text-gray-500 mt-1">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Blogs",
  description: "Some of my writings about stuffs",
  openGraph: {
    images: [
      {
        url: "https://www.puang.in/og/home?title=blogs",
      },
    ],
  },
};
