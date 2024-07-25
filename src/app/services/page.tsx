import { sanityFetch } from "../../../sanity/lib/fetch";
import { servicesQuery } from "../../../sanity/lib/queries";
import { Services } from "../../components/services";

interface services {
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  imageURL: string;
  metaDesc: string | null;
}

const ServicesPage = async () => {
  const servicesData = await sanityFetch<services[]>({
    query: servicesQuery,
  });

  return <Services items={servicesData} />;
};

export default ServicesPage;
