import React,{useContext} from 'react';
import SectionHeading from './section-heading';
import Carousel from './carousel';
import {graphql, useStaticQuery} from 'gatsby';




export default function Section({title,subtitle,page,posts}){
  // const newContext = React.createContext({category:category});
  // const pageContext = useContext(newContext);

//   const {post} = graphql`query($category:[Int]) {
//     post: internalPosts(categories: {in: $category}) {
//       alternative_id
//       title {
//         rendered
//       }
//       slug
//       date
//       content {
//         rendered
//       }
//       categories
//     }
// }`;

     
    
    // console.log('Section Data ->',post)
    return(
        <section className="section">
            <SectionHeading title={title} subtitle={subtitle} page={page}/>
            <Carousel  posts={posts}/>
        </section>
    )
}