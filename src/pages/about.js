import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSlack, faGoodreads, faGoodreadsG, faBlogger, faBloggerB, faMicroblog, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import '../styles/about.module.css';
import { anchor, divSocials } from '../styles/about.module.css';

export const query = graphql`
  query GetImage {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG)
    }
  }
}
`;

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amoghprak',
    icon: faLinkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/amogh-opsverse',
    icon: faGithubAlt
  },
  {
    name: 'Slack',
    url: 'https://join.slack.com/t/opsversecommunity/shared_invite/zt-1r69m76xd-UYGdLouOU00I2sY6xOcFXA',
    icon: faSlack
  },
  // {
  //   name: 'Zeneca',
  //   url: '',
  //   icon: '',
  // }
];

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

      {/* <div className={divIframe}>
        <iframe src="https://archive.org/embed/paideiaidealsofg0001jaeg" width="560" height="560" frameborder="1" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
      </div> */}

      <div className={divSocials}>
        {socials.map((social, index) => (
          <ul className={anchor}>
          <a href={social.url} target="_blank">
            <FontAwesomeIcon icon={social.icon} />
          </a>
          </ul>
        ))}
      </div>
    </Layout>
  )
}