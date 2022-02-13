import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import featuredImage from "./featuredImage";
import project from "./project";
import projectImage from "./projectImage";
import projectImageDocument from "./projectImageDocument";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([project, projectImageDocument, projectImage, featuredImage]),
});
