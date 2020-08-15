// const path = require(`path`)
// const { slash } = require(`gatsby-core-utils`)

// const { graphql } = require("gatsby");

// // Implement the Gatsby API “createPages”. This is
// // called after the Gatsby bootstrap is finished so you have
// // access to any information necessary to programmatically
// // create pages.
// // Will create pages for WordPress pages (route : /{slug})
// // Will create pages for WordPress posts (route : /post/{slug})

// exports.createPages = async ({graphql,actions}) => {
//   const result = await graphql(`{
//     {
//       allInternalPosts {
//         edges {
//           node {
//             title {
//               rendered
//             }
//             categories
//             slug
//             date
//             jetpack_featured_media_url
//             content {
//               rendered
//             }
//             type
//             link
//           }
//         }
//       }
//     }
//   }`)

//   if (result.errors) {
//     throw new Error(result.errors)
//   }

//   const { allInternalPosts } = result.data
// }
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // The “graphql” function allows us to run arbitrary
//   // queries against the local Gatsby GraphQL schema. Think of
//   // it like the site has a built-in database constructed
//   // from the fetched data that you can run queries against.
//   const result = await graphql(`
//     {
//       allWordpressPage {
//         edges {
//           node {
//             id
//             path
//             status
//             template
//           }
//         }
//       }
//       allWordpressPost {
//         edges {
//           node {
//             id
//             path
//             status
//             template
//             format
//           }
//         }
//       }
//     }
//   `)

//   // Check for any errors
//   if (result.errors) {
//     throw new Error(result.errors)
//   }

//   // Access query results via object destructuring
//   const { allWordpressPage, allWordpressPost } = result.data

//   // Create Page pages.
//   const pageTemplate = path.resolve(`./src/templates/page.js`)
//   // We want to create a detailed page for each page node.
//   // The path field contains the relative original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Page ID is prefixed with 'PAGE_'
// //   allWordpressPage.edges.forEach(edge => {
// //     // Gatsby uses Redux to manage its internal state.
// //     // Plugins and sites can use functions like "createPage"
// //     // to interact with Gatsby.
// //     createPage({
// //       // Each page is required to have a `path` as well
// //       // as a template component. The `context` is
// //       // optional but is often necessary so the template
// //       // can query data specific to each page.
// //       path: edge.node.path,
// //       component: slash(pageTemplate),
// //       context: {
// //         id: edge.node.id,
// //       },
// //     })
// //   })

//   const postTemplate = path.resolve(`./src/templates/post.js`)
//   // We want to create a detailed page for each post node.
//   // The path field stems from the original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Post ID is prefixed with 'POST_'
// //   allWordpressPost.edges.forEach(edge => {
// //     createPage({
// //       path: edge.node.path,
// //       component: slash(postTemplate),
// //       context: {
// //         id: edge.node.id,
// //       },
// //     })
// //   })
// }

// exports.createSchemaCustomization  = ({actions,schema}) => {
//     const { createTypes } = actions;
//     const typeDefs = [
//         "type internal__categories implements Node @infer { posts: Posts} ",
     
//         schema.buildObjectType ({
//             name: "Posts",
//             fields: {
//                 post: {
//                     type: ["internal__posts"],
//                     resolve: (source,args,context,info) => {
//                         return context.nodeModel.getAllNodes({type:"internal__posts"})
//                         .filter(post => {
//                             console.log('Source ',source.alternative_id)
//                             console.log('POSt', JSON.stringfy(post,null,4));
//                             return post.categories.includes(source.alternative_id)
//                         })
//                         // .filter(post => post.categories === source.alternative_id)
//                     },
//                 },
//             },
//         }),
//     ]

//     createTypes(typeDefs)
 
// }

// exports.createResolvers = ({ createResolvers }) => {
//     const resolvers = {
//         internal__categories: {
//             allPosts: {
//                 type: ["internal__posts"],
//                 resolve(source,args,context,info) {
//                     return context.nodeModel.runQuery({
//                         query: {
//                             filter: {
//                                 categories: {
//                                     in:  [source.alternative_id] 
//                                 }
//                             }
//                         },
//                         type: "internal__posts",
//                         firstOnly:false,
//                     })
                
//                 },
//             },
//         }
//     }
//     createResolvers(resolvers);
// }

// exports.createResolvers = ({ createResolvers }) => {
//     const resolvers = {
//         internal__categories: {
//             allPosts: {
//                 type: ["S"],
//                 resolve(source,args,context,info) {
//                     return context.nodeModel.runQuery({
//                         query: {
//                             filter: {
//                                 categories: {
//                                     in:  [source.alternative_id] 
//                                 }
//                             }
//                         },
//                         type: "internal__posts",
//                         firstOnly:false,
//                     })
                
//                 },
//             },
//         }
//     }
//     createResolvers(resolvers);
// }