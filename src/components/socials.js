// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const SocialLinks = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allSocialsYaml {
//         edges {
//           node {
//             name
//             url
//             icon
//           }
//         }
//       }
//     }
//   `)

//   const socials = data.allSocialsYaml.edges

//   return (
//     <ul>
//       {socials.map(({ node }) => (
//         <li key={node.name}>
//           <a href={node.url}>
//             <i className={`fa fa-${node.icon}`} />
//             <span>{node.name}</span>
//           </a>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default SocialLinks
