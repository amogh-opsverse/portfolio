import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout.js';

/*
export default function PostLayout({ children, ...props }){
  return (
    <Layout>
      {children}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
}
*/

//being used in gatsby-config.js
export default function PostLayout({ children, pageContext }){
  const {title, description} = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
