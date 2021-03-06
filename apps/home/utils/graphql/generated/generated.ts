import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import { print } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Boolean"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Boolean"]>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Date"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Date"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Float"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Float"]>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["ID"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["ID"]>;
  nin?: InputMaybe<Array<Scalars["ID"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageInfo = {
  __typename?: "ImageInfo";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  caption?: Maybe<Scalars["String"]>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageInfoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  caption?: InputMaybe<StringFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageInfoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Int"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Int"]>;
};

export type Project = Document & {
  __typename?: "Project";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  descriptionRaw?: Maybe<Scalars["JSON"]>;
  featuredDescription?: Maybe<Scalars["String"]>;
  featuredImage?: Maybe<ImageInfo>;
  projectImages?: Maybe<Array<Maybe<ProjectImage>>>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]>;
};

export type ProjectFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  featuredDescription?: InputMaybe<StringFilter>;
  featuredImage?: InputMaybe<ImageInfoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectImage = Document & {
  __typename?: "ProjectImage";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  alt?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  image?: Maybe<Image>;
};

export type ProjectImageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  alt?: InputMaybe<StringFilter>;
  caption?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type ProjectImageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
};

export type ProjectSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  featuredDescription?: InputMaybe<SortOrder>;
  featuredImage?: InputMaybe<ImageInfoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Projects = Document & {
  __typename?: "Projects";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type ProjectsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type ProjectsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  Document?: Maybe<Document>;
  Project?: Maybe<Project>;
  ProjectImage?: Maybe<ProjectImage>;
  Projects?: Maybe<Projects>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  allDocument: Array<Document>;
  allProject: Array<Project>;
  allProjectImage: Array<ProjectImage>;
  allProjects: Array<Projects>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"];
};

export type RootQueryProjectArgs = {
  id: Scalars["ID"];
};

export type RootQueryProjectImageArgs = {
  id: Scalars["ID"];
};

export type RootQueryProjectsArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"];
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllProjectArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<ProjectSorting>>;
  where?: InputMaybe<ProjectFilter>;
};

export type RootQueryAllProjectImageArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<ProjectImageSorting>>;
  where?: InputMaybe<ProjectImageFilter>;
};

export type RootQueryAllProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<ProjectsSorting>>;
  where?: InputMaybe<ProjectsFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  altText?: Maybe<Scalars["String"]>;
  assetId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  altText?: Maybe<Scalars["String"]>;
  assetId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]>;
  uploadId?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  bottom?: Maybe<Scalars["Float"]>;
  left?: Maybe<Scalars["Float"]>;
  right?: Maybe<Scalars["Float"]>;
  top?: Maybe<Scalars["Float"]>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  blurHash?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]>;
  isOpaque?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars["String"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  foreground?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars["Boolean"]>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars["ID"]>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  current?: Maybe<Scalars["String"]>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text?: Maybe<Scalars["String"]>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["String"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["String"]>;
  nin?: InputMaybe<Array<Scalars["String"]>>;
};

export type GetProjectBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type GetProjectBySlugQuery = {
  __typename?: "RootQuery";
  allProject: Array<{
    __typename?: "Project";
    _id?: string | null;
    title?: string | null;
    descriptionRaw?: any | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
    projectImages?: Array<{
      __typename?: "ProjectImage";
      _id?: string | null;
      alt?: string | null;
      caption?: string | null;
      image?: { __typename?: "Image"; asset?: { __typename?: "SanityImageAsset"; url?: string | null } | null } | null;
    } | null> | null;
  }>;
};

export type GetProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProjectsQuery = {
  __typename?: "RootQuery";
  Projects?: {
    __typename?: "Projects";
    projects?: Array<{
      __typename?: "Project";
      _id?: string | null;
      featuredDescription?: string | null;
      title?: string | null;
      featuredImage?: {
        __typename?: "ImageInfo";
        alt?: string | null;
        asset?: { __typename?: "SanityImageAsset"; url?: string | null } | null;
      } | null;
      slug?: { __typename?: "Slug"; current?: string | null } | null;
    } | null> | null;
  } | null;
};

export type ProjectsFragmentFragment = {
  __typename?: "Projects";
  projects?: Array<{
    __typename?: "Project";
    _id?: string | null;
    featuredDescription?: string | null;
    title?: string | null;
    featuredImage?: {
      __typename?: "ImageInfo";
      alt?: string | null;
      asset?: { __typename?: "SanityImageAsset"; url?: string | null } | null;
    } | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
  } | null> | null;
};

export type GetProjectsSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProjectsSlugsQuery = {
  __typename?: "RootQuery";
  allProject: Array<{
    __typename?: "Project";
    _id?: string | null;
    slug?: { __typename?: "Slug"; current?: string | null } | null;
  }>;
};

export const ProjectsFragmentFragmentDoc = gql`
  fragment ProjectsFragment on Projects {
    projects {
      _id
      featuredImage {
        asset {
          url
        }
        alt
      }
      featuredDescription
      title
      slug {
        current
      }
    }
  }
`;
export const GetProjectBySlugDocument = gql`
  query getProjectBySlug($slug: String!) {
    allProject(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      descriptionRaw
      slug {
        current
      }
      projectImages {
        _id
        alt
        caption
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;
export const GetProjectsDocument = gql`
  query getProjects {
    Projects(id: "b56396f8-93ad-42d9-9c6a-0c9d7431b5e5") {
      ...ProjectsFragment
    }
  }
  ${ProjectsFragmentFragmentDoc}
`;
export const GetProjectsSlugsDocument = gql`
  query getProjectsSlugs {
    allProject {
      _id
      slug {
        current
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetProjectBySlugDocumentString = print(GetProjectBySlugDocument);
const GetProjectsDocumentString = print(GetProjectsDocument);
const GetProjectsSlugsDocumentString = print(GetProjectsSlugsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProjectBySlug(
      variables: GetProjectBySlugQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<{ data: GetProjectBySlugQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetProjectBySlugQuery>(GetProjectBySlugDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getProjectBySlug",
        "query"
      );
    },
    getProjects(
      variables?: GetProjectsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<{ data: GetProjectsQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetProjectsQuery>(GetProjectsDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getProjects",
        "query"
      );
    },
    getProjectsSlugs(
      variables?: GetProjectsSlugsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<{ data: GetProjectsSlugsQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetProjectsSlugsQuery>(GetProjectsSlugsDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getProjectsSlugs",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
