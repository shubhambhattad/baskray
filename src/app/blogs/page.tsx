import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { postsQuery } from "../../../sanity/lib/queries";

const Posts = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="">
      {posts?.map((post, index) => (
        <Link
          href={`/blogs/${post.slug.current}`}
          key={index}
          className="flex flex-col justify-center antialiased  text-gray-800  gap-4"
        >
          <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full my-8">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <div className="relative block group">
                <Image
                  className="w-full object-fill rounded-lg"
                  src={post.imageURL}
                  alt={post.mainImage.alt}
                  width={350}
                  height={350}
                  priority
                />
              </div>
              <div>
                <header>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                    <div className="transition duration-150 ease-in-out">
                      {post.title}
                    </div>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">
                  {post.metaDesc}
                </p>
                <footer className="flex items-center mt-4">
                  <span className="text-gray-500">
                    {convertDate(post._createdAt)}
                  </span>
                </footer>
              </div>
            </article>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
