import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { codeToHtml } from "shiki";

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold my-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold my-5" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold my-4" {...props} />,
  p: ({ children, ...props }: any) => {
    if (children && typeof children === "object" && children.type === "img") {
      return (
        <Image
          src={children.props.src}
          alt={children.props.alt || ""}
          width={800}
          height={400}
          className="my-8 rounded-lg"
        />
      );
    }
    return (
      <p className="text-gray-400 my-6" {...props}>
        {children}
      </p>
    );
  },
  a: (props: any) => (
    <Link {...props} className="text-blue-500 hover:text-blue-600 underline" />
  ),
  pre: (props: any) => (
    <pre className="bg-zinc-900 text-white p-4 rounded-lg my-6 overflow-x-auto">
      {props.children}
    </pre>
  ),
  code: (props: any) => (
    <code className="bg-zinc-800 px-1 rounded" {...props} />
  ),
};

async function getMdxContent(slug: string) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);
    return { content, frontmatter: data };
  } catch (error) {
    throw new Error(`No post found for slug: ${slug}`);
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getMdxContent(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 font-mono text-md">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
        <time className="text-gray-500 mt-2 block">
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}
