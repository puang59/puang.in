// src/app/blog/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <main className="dark:text-gray-100 leading-8">{children}</main>
    </div>
  );
}
