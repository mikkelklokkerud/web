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
    vertical ? " grid-cols-1 ml-6" : "grid-cols-4 w-56 transform translate-x-3"
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
          ? "absolute translate-y-12 translate-x-6px mt-1"
          : "-mt-4 translate-y-px -ml-3"
      }  -mb-2 bottom-0`}
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
        {/* <ClapButton id="blog" namespace={id} hideCounterIfLessThan={1} /> */}
        <span className="hidden lg:block">
          <ClapButton id="blog" namespace={id} hideCounterIfLessThan={1}>
            {({ handlePress, totalClaps, isLoading }) => {
              return (
                <div className="relative">
                  <div className="relative" style={{ fontSize: "40px" }}>
                    <button
                      onClick={handlePress}
                      className="opacity-80 hover:opacity-100 transition duration-100"
                      disabled={isLoading}
                      style={{ filter: "saturate(120%) contrast(110%)" }}
                    >
                      👏
                    </button>
                    <div className="absolute text-2xl top-0 right-0 transform  lg:text-xl translate-y-12 translate-x-10 w-20">
                      {totalClaps > 0 && (
                        <>
                          {totalClaps} <span className="text-sm">claps!</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            }}
          </ClapButton>
        </span>
        <span
          className="lg:hidden text-xl block transform translate-x-1"
          style={{ fontSize: "28px" }}
        >
          <ClapButton id="blog" namespace={id} hideCounterIfLessThan={1} />
        </span>
      </Provider>
    </div>
  </div>
);

/* <ClapButton id="blog" namespace={id} hideCounterIfLessThan={1}>
          {({ handlePress, totalClaps, userClaps, isLoading }) => {
            return (
              <div className="relative">
                <div className="relative">
                  <button onClick={handlePress} disabled={isLoading}>
                    👏
                  </button>
                  <div className="absolute top-0 right-0 transform xl:translate-x-10 lg:translate-y-4 lg:translate-x-6 xl:text-2xl lg:text-xl xl:translate-y-2">
                    {totalClaps > 0 && totalClaps}
                  </div>
                </div>
                <div className="absolute text-base xl:w-32">
                  {userClaps > 0 && <div>You clapped {userClaps} times!</div>}
                </div>
              </div>
            );
          }}
        </ClapButton> */
