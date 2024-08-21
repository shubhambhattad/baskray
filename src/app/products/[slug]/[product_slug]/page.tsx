import { PortableText, SanityDocument } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { sanityFetch } from "../../../../../sanity/lib/fetch";
import {
  productPathsQuery,
  singleProduct,
} from "../../../../../sanity/lib/queries";
import { Card } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { SelectSeparator } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/product-carousel";
import { RichTextComponent } from "@/components/RichTextComponent";

interface Product {
  title: string;
  description: string;
  images: { asset: { url: string } }[];
  price: number;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await client.fetch(productPathsQuery);
  return products;
}

const Page = async ({ params }: { params: { product_slug: string } }) => {
  const product = await sanityFetch<SanityDocument>({
    query: singleProduct,
    params,
  });

  return (
    <div className="container mx-auto my-10 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <ProductCarousel
          images={product.images}
          title={product.title}
          description={product.description}
          price={99.99} // Replace with the actual product price
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="p-6">
          <h1 className="mb-4 text-primary text-3xl font-extrabold">
            {product.title}
          </h1>
          <PortableText
            value={product.description}
            components={RichTextComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
