import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { getAllCategoriesQuery } from "../../sanity/lib/queries";

const Categories = async () => {
  const categories = await sanityFetch<SanityDocument[]>({
    query: getAllCategoriesQuery,
  });

  console.log("categories", categories);

  return (
    <section className="container mx-auto px-4 ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl my-4">
          Our Categories
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        {categories.map((category, index) => (
          <Link
            href={`/products/${category.slug.current}`}
            key={index}
            className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group cursor-pointer"
          >
            <div className="relative h-48 md:h-64 lg:h-80">
              <Image
                src={category.image.asset.url}
                alt={`${category.title} Ice Cream`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-opacity-30 flex items-end p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {flavor.name} Ice Cream
                  </h3>
                </div>
              </div> */}
              {/* <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-xl md:text-2xl text-center">
                  {flavor.name} Ice Cream
                </h3>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
