import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

export const query = graphql`
  query GetImage {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG)
    }
  }
}
`;

//data here is the props.data and the file image is being returned from the above graphql query
export default function AboutPage({ data }) {
  return (
    <Layout
      title="about this page"
      description="more info"
    >
      {/* <GatsbyImage
        image={getImage(data.file)}
        alt="image of a fancy drink"
      />
      <h1>About this site</h1>
      <Link to="/">Back to home</Link> */}
    </Layout>
  )
}