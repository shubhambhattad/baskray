import SingleService from "@/components/single-service";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { singleServiceQuery } from "../../../../sanity/lib/queries";

const Page = async ({ params }: { params: any }) => {
  const service = await sanityFetch<SanityDocument>({
    query: singleServiceQuery,
    params,
  });

  return (
    <div>
      <SingleService service={service} />
    </div>
  );
};

export default Page;
