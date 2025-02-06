"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <div className="animate_top rounded-lg pb-9   hover:cursor-pointer">
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300  xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>{title}</Link>
          </h3>
          <p className="line-clamp-5">{metadata?.slice(0, 50) + "..."} </p>
        </div>

        {/* Read More Button with Gradient, smaller size */}
        <div className="mt-6 ">
          <Link
            href={`/blog/blog-details`}
            className="font-small inline-flex transform items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm text-white shadow-lg transition-all duration-300  hover:shadow-xl"
          >
            <span className="duration-300 group-hover/btn:pr-2">Read More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
