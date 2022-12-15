import { Link } from "react-router-dom";
import IxVideo from "@imgix/ix-video-react";

function IxVideoPage() {
  return (
    <>
      <style>
        {`video {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 1rem 0 2rem;
        }`}
      </style>

      <IxVideo
        src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
        type="hls"
        gifPreview
        thumbnailParams="video-thumbnail-time=2&mark-align=top,right&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj93PTE2MCZmbT1wbmcmcGFnZT00"
        muted
      />

      <Link to="/">Browse Elements</Link>
    </>
  );
}

export default IxVideoPage;