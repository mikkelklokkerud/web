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
      <form className="rgb border-2 border-black mx-auto rounded-md max-w-3xl flex flex-col text-center bg-white lg:p-8 p-5 shadow-xl">
        <h4 className="mb-4 lg:text-2xl sm:text-xl text-lg">
          SEO essentials: get my{" "}
          <span className="font-bold">Free Gatsby Guide</span> on optimising for{" "}
          <span className="font-bold">Google Lighthouse!</span>
        </h4>
        <div className="mb-8 flex justify-center">
          <div className="animate-medium bg-black text-white bg-black font-bold text-lg shadow-lg border-2 h-12 w-12 border-black rounded-full flex items-center justify-center ">
            <span className="block mt-1">100</span>
          </div>
          <div className="animate-slow mx-5 font-bold text-lg text-black shadow-lg border-2 border-black w-12 h-12 rounded-full flex items-center justify-center ">
            <span className="block mt-1">100</span>
          </div>
          <div className="animate-fast font-bold bg-black text-lg text-white shadow-lg border-black border-2 w-12 h-12 rounded-full flex items-center justify-center ">
            <span className="block mt-1">100</span>
          </div>
        </div>
        <div
          className="grid gap-x-2 w-4/6 mx-auto"
          style={{ gridTemplateColumns: "75% auto" }}
        >
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
