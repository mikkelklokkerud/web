// import React from "react"
// import Post from "../components/Post/Post"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import Hero_Featured from "../components/Hero_featured/Hero_Featured"
// import SEO from "../components/seo";
// import MailChimpForm from "./../components/MailChimpForm/MailChimpForm";

// const TutorialsPage = ({ data }) => {
//   const featuredType = "Tutorial";
//   const featured = data.allContentfulBlogPost.edges.filter(edge => edge.node.featured);
//   const allPosts = data.allContentfulBlogPost.edges;
//   return (
//     <>
//       <Layout>
//         <SEO 
//           title="Blog" 
//           keywords={["web developer"], ["developer"], ["React"], ["gatsby"]}
//         />
//         <Hero_Featured 
//           key={featured[0].node.id}
//           title={featured[0].node.title}
//           slug={featured[0].node.slug}
//           publishedDate={featured[0].node.publishedDate}
//           shortDescription={featured[0].node.shortDescription}
//           featuredType={featuredType}
//           page={"TUTORIALS"}
//         />

//         <MailChimpForm />

//         {allPosts.map(post => (
//           <Post
//             key={post.node.id}
//             title={post.node.title}
//             slug={post.node.slug}
//             published={post.node.publishedDate}
//             shortDescription={post.node.shortDescription}
//             publishedDate={post.node.publishedDate}
//             featuredImage={post.node.featuredImage.resize.src}
//           />
//         ))}
//       </Layout>
//     </>
//   )

//         }

// export const pageQuery = graphql`
//   query TutorialsQuery {
//       allContentfulBlogPost(filter: {category: {elemMatch: {title: {eq: "Tutorial"}}}},
//                             sort: { fields: publishedDate, order: DESC }) {
//         edges {
//           node {
//             id
//             title
//             slug
//             publishedDate(formatString: "MMMM Do, YYYY")
//             featured
//             shortDescription
//             featuredImage {
//               resize (width: 420, height: 420) {
//                 src
//               }
//             }           
//           }
//         }
//       }
//     }
// `




// export default TutorialsPage

import React, { Component } from 'react';

class PlaceholderComponent extends Component {
    state = {  }
    render() { 
        return ( <div>
            
        </div> );
    }
}
 
export default PlaceholderComponent;