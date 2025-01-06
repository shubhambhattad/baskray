import React from "react";
import BlogSlider from "./ui/blog-slider";
import { blogsQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/fetch";
import { BlogPost } from "@/types";

export async function Blogs() {
  const blogs = await sanityFetch({ query: blogsQuery });
  return (
    <div className="w-full h-full ">
      <BlogSlider blogs={blogs as BlogPost[]} />
    </div>
  );
}
