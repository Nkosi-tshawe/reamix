// import { graphql,useStaticQuery } from 'gatsby';

// const usePosts =(slug) => {
//     const data = graphql`
//     query  {
//             posts: allInternalPosts (filter: {slug: {eq: $slug}}) {
//                 nodes {
//                     id
//                     alternative_id
//                     title {
//                         rendered
//                     }
//                     slug
//                     featured_media
//                     excerpt {
//                         rendered
//                     }
//                     content {
//                         rendered
//                     }
            
//                 }
//             }
//         }
//     `;

//     return data.posts.nodes.map(post => ({
//         key: post.id,
//         id:post.alternative_id,
//         title: post.title.rendered,
//         slug: post.slug,
//         image: post. featured_media,
//         excerpt: post.excerpt.rendered,
//         content: post.content.rendered
//     }));
// }

// export default usePosts;