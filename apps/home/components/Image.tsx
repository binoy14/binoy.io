import NextImage from "next/image";

import { imageBuilder } from "../utils/sanityClientCdn";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ImageLoaderProps, ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "src"> {
  src?: SanityImageSource | null;
}

const sanityLoader = (sanitySrc: SanityImageSource, { width, quality = 75 }: ImageLoaderProps) => {
  return imageBuilder.image(sanitySrc).width(width).quality(quality).auto("format").url();
};

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const baseUrl = "https://cdn.sanity.io/images/";

  if (!src) return null;

  return (
    <NextImage
      loader={(p) => sanityLoader(src, p)}
      {...props}
      src={imageBuilder.image(src).url().toString().replace(baseUrl, "")}
    />
  );
};
