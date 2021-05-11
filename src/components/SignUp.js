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
        <h2 className="mb-3 lg:text-2xl sm:text-xl text-lg">
          <span className="font-bold">SEO essentials:</span> get my free Gatsby
          Guideon optimising for{" "}
          <span className="font-bold">Google Lighthouse!</span>
        </h2>
        <img
          src="https://cdn.shopify.com/s/files/1/0533/2089/files/rocketloop_86a71a9a-8dc3-49b1-8102-232ff41bfe30.gif?598"
          className="h-20 w-20 mx-auto mb-5"
        />
        <div className="grid gap-x-2 sm:w-4/6 mx-auto xs:grid-cols-signup grid-cols-1 gap-y-2 w-full">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="px-2 py-2 w-full border-2 bg-white border-black"
            onChange={onChange}
          />
          <button
            className="py-2 px-4 border-2 bg-white border-black font-bold focus:outline-none transition duration-100 hover:bg-black hover:text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Continue
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
