import React from "react"
import Layout from "../components/layout"
import PostList from "./../components/PostList/PostList";
import Hero_Featured from "./../components/Hero_featured/Hero_Featured";



class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Layout>

          <Hero_Featured />

          <PostList />

        </Layout>
        
      </>
    )
  }
}

export default IndexPage



