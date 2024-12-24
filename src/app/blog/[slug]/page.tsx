import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/utils/blog";

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
      <p className="text-gray-400 my-6 leading-8" {...props}>
        {children}
      </p>
    );
  },
  a: (props: any) => (
    <Link
      {...props}
      className="text-amber-500 hover:text-amber-600 underline"
    />
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
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`No post found for slug: ${slug}`);
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);
    return { content, frontmatter: data };
  } catch (error) {
    throw new Error(`Error reading post for slug: ${slug}`);
  }
}

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return;
  }

  const publishedTime = formatDate(post.metadata.date);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: "article",
      url: `https://www.puang.in/blog/${post.slug}`,
      images: [
        {
          url: `https://www.puang.in/og/blog?title=${post.metadata.title}`,
        },
      ],
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: "summary_large_image",
      creator: "@puangg59",
      images: [
        `https://www.puang.in/og/blog?title=${post.metadata.title}&top=${publishedTime}`,
      ],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { content, frontmatter } = await getMdxContent(params.slug);

  if (!content || !frontmatter) {
    notFound();
  }

  return (
    <section className="animate-fade-in-up max-w-4xl mx-auto px-6 font-mono text-md">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: frontmatter.title,
            datePublished: frontmatter.date,
            dateModified: frontmatter.date,
            description: frontmatter.description,
            image: `https://www.puang.in/og/blog?title=${
              frontmatter.title
            }&top=${formatDate(frontmatter.date)}`,
            url: `https://www.puang.in/blog/${params.slug}`,
            author: {
              "@type": "Person",
              name: "Karan Kumar",
            },
          }),
        }}
      />
      <BackButton />
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
        <time className="text-gray-500 mt-2 block">
          {formatDate(frontmatter.date)}
        </time>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </article>
    </section>
  );
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
    .map((dirent) => dirent.name);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
