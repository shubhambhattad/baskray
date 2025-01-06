import { SanityDocument } from "@sanity/client";
import { postQuery } from "../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import Post from "@/components/post";

const PostPage = async ({ params }: { params: any }) => {
  console.log(params);
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  return <Post post={post} />;
};

export default PostPage;
