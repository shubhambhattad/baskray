import Product from "@/components/product";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";

const Page = async ({ params }: { params: { slug: string } }) => {
  interface ProductData {
    _id: string;
    title: string;
    description: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    slug: {
      current: string;
    };
  }

  interface CategoryData extends SanityDocument {
    title: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    products: ProductData[];
  }

  const categoryData = await sanityFetch<CategoryData>({
    query: `*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      image {
        asset-> {
          _id,
          url
        }
      },
      products[]-> {
        _id,
        title,
        description,
        image {
          asset-> {
            _id,
            url
          }
        },
        slug {
          current
        }
      }
    }`,
    params: { slug: params.slug },
  });

  if (!categoryData) {
    return <div>Category not found</div>;
  }
  console.log("Product Data2:", categoryData);

  // Extract products from the fetched category data
  const products = categoryData?.products || [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 mx-auto text-center">
        {categoryData.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
