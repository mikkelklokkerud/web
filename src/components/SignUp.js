import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export const SignUp = ({ path }) => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState({});

  const onChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, { PATHNAME: path })
      .then(data => {
        setResponse(data);
      })
      .catch(() => {});
  };
  return (
    <div className="my-8">
      <form className="rgb xs:border-2 border-black mx-auto rounded-md max-w-3xl flex flex-col text-center bg-white lg:px-8 px-5 py-8 shadow-xl">
        <h2 className="font-bold mb-2 lg:text-2xl sm:text-xl text-lg mx-5">
          SEO + Gatsby.js
        </h2>
        <h2 className="mb-6 lg:text-xl sm:text-xl text-lg md:5/6 lg:w-4/6 mx-auto underline mx-5">
          Get my free Gatsby Guide for a Perfect Google Lighthouse score in 5
          steps!
        </h2>
        <div className="sm:grid gap-x-2 sm:w-5/6 md:w-4/6 mx-auto xs:grid-cols-signup grid-cols-1 gap-y-2 w-full">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="px-2 py-2 w-full border-2 bg-white border-black"
            onChange={onChange}
          />
          <button
            className="py-2 px-4 mt-3 sm:mt-0 w-full border-2 bg-white border-black font-bold focus:outline-none transition duration-100 hover:bg-black hover:text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-3 italic text-sm">
          Currently in the making as of May 2021 :-)
        </div>
        {response && (
          <div
            className={`mx-auto font-bold mt-1 ${
              response.result === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {response.msg}
          </div>
        )}
      </form>
    </div>
  );
};
