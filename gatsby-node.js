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
  }; 
};

//we want to create a page for each post using our blog template
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogTemplatePath = path.resolve('./src/templates/blog.js');
  //query gatsby api to grab each of the slugs for our posts
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  //check for errors when querying 
  if(errors) {
    reporter.error('There was an issue querying markdown posts', new Error(errors))
  }
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      //refers to the path of the component
      component: blogTemplatePath,
      //refers to the path of our page
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug
      }
    })
  });
};