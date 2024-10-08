import type { QueryParams } from "@sanity/client";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment ? undefined : "no-store",
    });
}
