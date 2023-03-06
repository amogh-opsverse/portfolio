import * as React from 'react';
import { Link } from 'gatsby';
//import { Seo } from '../components/seo.js';
import Layout from '../components/layout.js';
import { Seo } from '../components/seo.js';
export default function IndexPage() {
  
  return (
    <Layout>
      <h1>Hello</h1>
      <Link to="/about">abot page</Link>
    </Layout>
  )
}