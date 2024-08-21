"use client";

import { SanityDocument } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponent";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="container px-4 mx-auto py-6 md:py-10">
      <div className="mx-auto max-w-4xl">
        <div>
          <h1 className="pt-5 font-body text-3xl font-semibold text-gray-900 sm:text-3xl md:text-4xl xl:text-4xl m-auto">
            {post?.title}
          </h1>
          <br />
          <span className="block pt-1 font-body text-xl  text-grey-30">
            {convertDate(post?._createdAt)}
          </span>
        </div>
        {post?.mainImage ? (
          <Image
            className=" mx-auto object-contain "
            quality={100}
            src={builder.image(post.mainImage).url()}
            alt={post?.mainImage?.alt}
            width={1000}
            height={1000}
          />
        ) : null}
        <div className="prose max-w-none pt-8 m-4">
          {post?.mainImage ? (
            <PortableText value={post.body} components={RichTextComponent} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Post;
