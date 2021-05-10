import React from "react";
import { Provider, ClapButton } from "@lyket/react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export const SocialShare = ({ title, url, twitterHandle, tags, id }) => (
  <div className="grid grid-cols-1 gap-y-3 mx-3 justify-center mr-5">
    <FacebookShareButton url={url}>
      <div className="hover:opacity-100 opacity-50 transition duration-300 transform translate-x-px">
        <TiSocialFacebook size={50} round={true} />
      </div>
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <div className="hover:opacity-100 opacity-50 transition duration-300">
        <TiSocialTwitter
          size={50}
          round={true}
          className=" rounded-full hover:bg-black hover:text-white"
        />
      </div>
    </TwitterShareButton>
    <LinkedinShareButton url={url}>
      <div className="hover:opacity-100 opacity-50 transition duration-300">
        <TiSocialLinkedin size={50} round={true} />
      </div>
    </LinkedinShareButton>
    <div className="border w-full h-px bg-black opacity-20" />
    <div
      className="absolute transform hover:opacity-100 opacity-60 -translate-x-3 translate-y-18 -mb-2 bottom-0"
      style={{ fontSize: "27px" }}
    >
      <Provider
        apiKey="da3ce43d8ad2ff45f887396f0684f9"
        theme={{
          colors: {
            text: "black",
            primary: "rgba(255,255,255,0)",
          },
        }}
      >
        <ClapButton id="blog" namespace={id} hideCounterIfLessThan={1} />
      </Provider>
    </div>
  </div>
);
