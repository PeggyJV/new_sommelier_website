// RichTextRenderer.js
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "gatsby-image";
// import { useContentfulImage } from "../../hooks";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
    //   const fluid = useContentfulImage(
    //     node.data.target.fields.file["en-US"].url
    //   );
    //   return (
    //     <Image title={node.data.target.fields.title["en-US"]} fluid={fluid} />
    //   );
    }
  }
};

export default ({ richTextJson }) =>
  documentToReactComponents(richTextJson, options);