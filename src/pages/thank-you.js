import React from "react";
import { SeoComponent } from "../components/SeoComponent";
import Link from "gatsby-link";

const thankYou = () => {
  return (
    <div>
      <SeoComponent title="Message sent - thank you" />
      <div className="h-screen flex flex-col justify-center items-center px-5 text-center">
        <h1 className="lg:text-3xl text-2xl font-bold lg:mb-2 transform lg:scale-110">
          Message sent.
        </h1>
        <h2 className="lg:text-lg">Thanks. I will get back to you asap.</h2>
        <Link
          to="/"
          className="px-5 py-2 bg-black text-white font-bold mt-10 rounded-md border-2 border-black "
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default thankYou;
