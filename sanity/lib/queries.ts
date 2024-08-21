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

export const productPathsQuery = groq`*[_type == "product" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const singleProduct = groq`*[_type == "product" && slug.current == $product_slug][0]`;

//Get all category
export const getAllCategoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  slug,
  image {
    asset-> {
      _id,
      url
    }
  }
}`;
