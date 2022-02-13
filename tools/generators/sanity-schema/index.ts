import {
  applyChangesToString,
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from "@nrwl/devkit";
import { addImport } from "@nrwl/react/src/utils/ast-utils";
import * as ts from "typescript";

import { NxSanitySchema } from "./schema";

function addExport(tree: Tree, schema: NxSanitySchema, schemaRoot: string) {
  const schemaFilePath = joinPathFragments(`${schemaRoot}/schema.js`, "");
  const schemaSource = tree.read(schemaFilePath, "utf-8");
  if (schemaSource !== null) {
    const schemaSourceFile = ts.createSourceFile(schemaFilePath, schemaSource, ts.ScriptTarget.Latest, true);

    const changes = applyChangesToString(
      schemaSource,
      addImport(schemaSourceFile, `import ${schema.name} from "./${schema.name}";`)
    );

    tree.write(schemaFilePath, changes);
    // TODO: Figure out how to add to the concat array
  }
}

export default async function (tree: Tree, schema: NxSanitySchema) {
  const sourceRoot = readProjectConfiguration(tree, "sanity").sourceRoot || "";
  const schemaRoot = `${sourceRoot}/schemas`;

  if (schema.export) {
    addExport(tree, schema, schemaRoot);
  }

  generateFiles(tree, joinPathFragments(__dirname, "./files"), schemaRoot, { ...schema, tmpl: "" });
  await formatFiles(tree);
}
