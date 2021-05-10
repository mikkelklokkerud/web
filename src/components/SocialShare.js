import React from "react";
import { Provider, ClapButton } from "@lyket/react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export const SocialShare = ({
  title,
  url,
  twitterHandle,
  tags,
  id,
  vertical,
}) => (
  <div
    className={`grid
  ${
    vertical ? " grid-cols-1" : "grid-cols-4 w-56 transform translate-x-3"
  } grid-cols-1 gap-y-3 mr-5 `}
  >
    <div className="">
      <FacebookShareButton url={url}>
        <div className="hover:opacity-100 opacity-50 transition duration-300 transform translate-x-px">
          <TiSocialFacebook size={50} round={true} />
        </div>
      </FacebookShareButton>
    </div>
    <div>
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
            className="rounded-full hover:bg-black hover:text-white"
          />
        </div>
      </TwitterShareButton>
    </div>
    <div>
      <LinkedinShareButton url={url}>
        <div className="hover:opacity-100 opacity-50 transition duration-300">
          <TiSocialLinkedin size={50} round={true} />
        </div>
      </LinkedinShareButton>
    </div>
    <div
      className={` opacity-60 transform ${
        vertical
          ? "absolute -translate-x-3 translate-y-18"
          : "-mt-4 translate-y-px -ml-3"
      }  -mb-2 bottom-0`}
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
