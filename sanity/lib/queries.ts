import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  metaDesc,
  "imageURL": mainImage.asset->url,
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, description, mainImage, body, _createdAt
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const servicesQuery = groq`*[_type == "services"] {
  title,
  slug,

 metaDesc,
}`;

export const singleServiceQuery = groq`*[_type == "services" && slug.current == $slug][0] {
  title,
  slug,
  "imageURL": mainImage.asset->url,
  description

}`;
