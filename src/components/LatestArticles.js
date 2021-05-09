import React from "react"

export const LatestArticles = ({ posts }) => (
  <>
    <h2
      className="text-2xl underline lg:text-3xl mt-12 lg:mt-20"
      style={{ textAlign: "center" }}
    >
      Latest articles
    </h2>
    <div className="max-w-twelve mx-auto flex flex-wrap justify-center mt-10 mb-20">
      {posts.slice(0, 3).map(post => (
        <Post
          key={post.node.id}
          title={post.node.title}
          slug={post.node.slug}
          published={post.node.publishedDate}
          shortDescription={post.node.shortDescription}
          publishedDate={post.node.publishedDate}
        />
      ))}
    </div>
  </>
)
