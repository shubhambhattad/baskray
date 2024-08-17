import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import post from "./schemaTypes/post";
import product from "./schemaTypes/product";
import category from "./schemaTypes/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, post, blockContent],
};
