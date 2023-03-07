import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
//import { Seo } from '../components/seo.js';
import Layout from '../components/layout.js';
import { Seo } from '../components/seo.js';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true)
        }
      }
    }
      allSanityEpisode(
      sort: {fields: date, order: ASC}
      filter: {youtubeID: {ne: "null"}}
      limit: 20
      ) {
      nodes {
        title
        id
        guest {
          name
        }
        gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
    }
  }
  }

`);

const posts = data.allMdx.nodes;
const episodes = data.allSanityEpisode.nodes;


  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="a sweet corgi"
          placeholder='blurred'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello</h1>
      <Link to="/about">abot page</Link>
      <h2>Check out my recent blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link> {' '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>

      <h2>
          Latest episodes of <em>Learn with narcissus</em>
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            
            <Link to={episode.gatsbyPath}>
              
              {episode.title} (with {episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://learnwithnarcissus.dev">
        Watch all episodes of narcissus
      </a>
    </Layout>
  );
}