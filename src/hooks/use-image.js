// import { graphql,useStaticQuery } from 'gatsby';

// const useImage =(id) => {

//     const data = useStaticQuery(graphql`
//     query ($id:Int) {
//       images: allInternalImages(filter: {alternative_id: {eq: $id}}) {
//         nodes {
//           id
//           alternative_id
//           slug
//           source_url
//         }
//       }
//     }
//   `)
 

//     return data.image.nodes.map(post => ({
//         key: post.id,
//         id:post.alternative_id,
//         slug: post.slug,
//         source: post.source_url,
//     }));
// }

// export default useImage;