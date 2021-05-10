import React, { useState, useEffect } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export const SignUp = ({ path }) => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState({});

  const onChange = e => {
    setEmail(e.target.value);
  };

  useEffect(() => console.log(response.msg), [response]);

  const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, { PATHNAME: path }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        setResponse(data);
      })
      .catch(() => {});
  };
  return (
    <div className="my-8">
      <form className="border-2 border-black rounded-md max-w-3xl flex flex-col text-center bg-white p-8">
        <h4 className="mb-8 text-2xl">
          Sign up to get my <span className="font-bold">Free Gatsby Guide</span>{" "}
          on Google Lighthouse optimisation!
        </h4>
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
            className="py-2 px-4 border-2 bg-white border-black font-bold focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
        <div className="mt-3">
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
