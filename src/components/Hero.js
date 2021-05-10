import React from "react";
import Link from "gatsby-link";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({
  key,
  publishedDate,
  title,
  slug,
  image,
  shortDescription,
  featuredType,
}) => {
  return (
    <div>
      <div className="h-screen max-w-6xl mx-auto lg:grid grid-cols-2 items-center sm:px-10 px-5 flex items-center flex-col justify-center lg:text-left">
        <div className="text-center w-4/6 sm:w-1/2 lg:w-auto relative mb-10 lg:mb-0 mt-5">
          <GatsbyImage
            image={image}
            className="mx-auto lg:w-9/12"
            alt="MikkelCodes logo"
          />
          <h1 className="">Gatsby & Next + Headless CMS</h1>
        </div>
        <div className="lg:block  hidden lg:border-l-2 border-black lg:pl-10 pr-6 py-16 mt-10 lg:mt-0 font-normal lg:max-w-auto max-w-lg sm:text-center lg:text-left">
          <Link key={key} to={`/blog/${slug}`}>
            <div className="">
              <div className="mb-5 block sm:hidden lg:block">
                Featured {featuredType}
              </div>
              <h2 className="text-2xl font-bold leading-tight mb-1">{title}</h2>
              <small className="mt-3 mb-3 block">{publishedDate}</small>
              <p>{shortDescription}</p>
            </div>
          </Link>
        </div>
        <div className="border-2 border-black rgb rounded-md bg-white p-4 shadow-xl hover:bg-black hover:text-white rgb lg:hidden py-8">
          <Link key={key} to={`/blog/${slug}`}>
            <div className="">
              <div className="mb-5 block sm:hidden lg:block">
                Featured {featuredType}
              </div>
              <h2 className="text-2xl font-bold leading-tight mb-1">{title}</h2>
              <small className="mt-3 mb-3 block">{publishedDate}</small>
              <p>{shortDescription}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
