import React from "react";
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import CustomCard from '../components/custom-card'import Customcard from "../components/custom-card";
/>

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
      jetpack_featured_media_url
    }
  }
}`


export default function Albums( props) {
  const albums = props;
    if (props.alternative_id) {
        return (
          <Layout>
              <section className="section">
                <SectionHeading title="All Albums" subtitle="showcasing all albums" />
                <div className="row">
                  { props.map(album => (
                   <div className="col col"
                  ))}
                </div>
              </section>
          </Layout>
      )
    } 
    return null;
}
