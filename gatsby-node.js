const path = require("path");
//we want to add an easily accessible field for the slug onto each of our md post nodes
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  //check if this node is a markdown post
  if (node.internal.type === "MarkdownRemark") {
    //extract only the base name of the file without the path or extension
    const slug = path.basename(node.fileAbsolutePath, ".md");
    // add the new field onto our node
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
