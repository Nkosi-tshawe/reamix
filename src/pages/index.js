import React from "react";
import Layout from '../components/layout';
import Section from '../components/section';
import Seo from '../components/seo';
import {graphql} from 'gatsby';


export const query = graphql`query {
  allInternalPosts {
    nodes {
      alternative_id
      title {
        rendered
      }
      slug
      date
      content {
        rendered
      }
    }
  }
}`

export default function Home({data:{allInternalPosts}}) {

  // console.log('Data ->',allInternalPosts);
  return (
      <Layout>
        <Seo title="Home" />
          <Section title="Albums" subtitle="Latest top 10 albums" page="albums" key={1} category="3" posts={allInternalPosts}/>
          {/* <Section title="Singles" subtitle="Latest top 10 singles" page="singles" key={2}/> */}
      </Layout>
  )
}
 