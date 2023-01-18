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
        controls
        type="hls"
        muted
      />

      <Link to="/">Browse Elements</Link>
    </>
  );
}

export default IxVideoPage;
