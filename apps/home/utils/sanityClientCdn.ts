import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClientCdn = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: true,
});

export const imageBuilder = imageUrlBuilder(sanityClientCdn);
