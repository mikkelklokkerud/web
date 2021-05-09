import React from "react"
import Link from "gatsby-link"

const Post = ({ published, title, slug, shortDescription }) => (
  <Link to={`/blog/${slug}`}>
    <div className="md:max-w-xs px-5 py-5 lg:h-2xs">
      <div className="">
        <div className="">
          <div className="">
            <h2 className="text-xl font-bold leading-tight mb-2">{title}</h2>
            <div className=" mb-2">
              <small className="text-sm text-gray">{published}</small>
            </div>
            <div className="text-base">{shortDescription}</div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default Post
