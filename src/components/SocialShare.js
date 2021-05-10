import React from "react"
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"

export const SocialShare = ({ title, url, twitterHandle, tags }) => (
  <div className="grid grid-cols-1 gap-y-2 mx-3">
    <FacebookShareButton url={url}>
      <TiSocialFacebookCircular size={70} round={true} />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TiSocialTwitterCircular size={70} round={true} />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <TiSocialLinkedinCircular size={70} round={true} />
    </LinkedinShareButton>
  </div>
)
