import NextImage from "next/image";
import { useMemo } from "react";

import { imageBuilder } from "../utils/sanityClientCdn";

import type { SanityAsset, SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ImageLoaderProps, ImageProps as NextImageProps } from "next/image";
interface ImageProps extends Omit<NextImageProps, "src"> {
  src?: SanityImageSource | null;
}

const sanityLoader = (sanitySrc: SanityImageSource, { width, quality = 75 }: ImageLoaderProps) => {
  return imageBuilder.image(sanitySrc).width(width).quality(quality).auto("format").url();
};

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const baseUrl = "https://cdn.sanity.io/images/";

  const blurDataUrl = useMemo(() => {
    if (typeof src === "string") return null;

    return (src as SanityAsset)?.asset?.metadata?.lqip;
  }, [src]);

  if (!src) return null;

  return (
    <NextImage
      loader={(p) => sanityLoader(src, p)}
      {...props}
      src={imageBuilder.image(src).url().toString().replace(baseUrl, "")}
      blurDataURL={blurDataUrl}
    />
  );
};
