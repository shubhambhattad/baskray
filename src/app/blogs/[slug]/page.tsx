import { SanityDocument } from "@sanity/client";
import { client } from "../../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import Post from "@/components/post";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

const PostPage = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  return <Post post={post} />;
};

export default PostPage;
