import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import imageInfo from "./imageInfo";
import project from "./project";
import projectImage from "./projectImage";
import projects from "./projects";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([projects, project, projectImage, imageInfo]),
});
