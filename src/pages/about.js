import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout
      title="about this page"
      description="more info"
    >
      <h1>About this site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}