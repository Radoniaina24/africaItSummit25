import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Africa It Summit",
  description: "",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <SectionHeader
          headerInfo={{
            title: "News & Blog",
            subtitle: "News Feed",
            description: "",
          }}
        />
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
