import imageUrlBuilder from "@sanity/image-url";

// The `SanityImageSource` type isn't exported from `@sanity/image-url` in
// some package versions. Use a local alias to avoid type errors.
type SanityImageSource = any;

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
