import React from "react";
import Layout from '../components/layout';
import Section from '../components/section';
import Seo from '../components/seo';
import {graphql, useStaticQuery } from 'gatsby';

export default function Home({data}) {

  const {albums,singles} = useStaticQuery(graphql`
      query {
        singles: allWordpressPost (limit: 10, filter: {categories: {elemMatch: {slug: {eq: "song-downloads"}}}})  {
          nodes {
            id
            title
            content
            slug
            categories {
              slug
            }
            wordpress_id
          }
      
        }
    
      albums: allWordpressPost(limit: 10, filter: {categories: {elemMatch: {slug: {eq: "album-download"}}}})  {
        nodes {
          id
          title
          content
          slug
          categories {
            slug
          }
          wordpress_id
        }
    
      }
    }
  `);

  console.log('Data ->',singles);
  return (
      <Layout>
        <Seo title="Home" />
          <Section title="Albums" subtitle="Latest top 10 albums" page="albums" posts={albums} />
          <Section title="Singles" subtitle="Latest top 10 singles" page="singles" posts={singles}/>
      </Layout>
  )
}
 