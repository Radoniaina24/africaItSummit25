"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  blog: Blog;
  titleColor?: string;
  textColor?: string;
  buttonColors?: {
    from: string;
    to: string;
  };
}

const BlogItem = ({
  blog,
  titleColor = "#000",
  textColor = "#333",
  buttonColors = { from: "#562196", to: "#D34FAC" },
}: BlogProps) => {
  const { mainImage, title, metadata } = blog;

  return (
    <div className="animate_top rounded-lg pb-9 hover:cursor-pointer">
      {/* Blog Image */}
      <Link href={`/blog/`} className="relative block aspect-[368/239]">
        <Image src={mainImage} alt={title} fill />
      </Link>

      {/* Blog Title and Metadata */}
      <div>
        <h3
          className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium duration-300 xl:text-itemtitle2"
          style={{ color: titleColor }}
        >
          <Link href={`/blog/blog-details`}>{title}</Link>
        </h3>
        <p className="line-clamp-5" style={{ color: textColor }}>
          {metadata?.slice(0, 50) + "..."}
        </p>
      </div>

      {/* Read More Button with Gradient */}
      <div className="mt-6">
        <Link
          href={`/blog/blog-details`}
          className="font-small inline-flex transform items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            background: `linear-gradient(to bottom right, ${buttonColors.from}, ${buttonColors.to})`,
          }}
        >
          <span className="duration-300 group-hover/btn:pr-2">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
