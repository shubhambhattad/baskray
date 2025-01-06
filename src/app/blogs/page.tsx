import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { blogsQuery, postsQuery } from "../../../sanity/lib/queries";
import { Card, CardContent } from "@/components/ui/card";

const Posts = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!posts || posts.length === 0) {
    return <div className="text-center py-8">No blog posts found.</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-8 text-center">
        Latest Blog Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-4">
              <Link
                href={`/blogs/${post.slug.current}`}
                className="block h-full"
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.imageURL}
                    alt={post.mainImage.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                    priority={index < 3}
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {convertDate(post._createdAt)}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.metaDesc}
                </p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;
