import { Link } from "react-router-dom";
import IxPlayer from "@imgix/ix-player-react";

function IxPlayerPage() {
  return (
    <>
      <style>
        {`
        ix-player {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 1rem 0 2rem;
          --media-object-fit: cover;
          --media-object-position: center;
        }`}
      </style>

      <IxPlayer
        src="https://assets.imgix.video/skeleton_halloween_candle.mp4"
        posterParams="mark-x=1600&mark-y=25&mark-fit=crop&mark-w=300&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj93PTE2MCZmbT1wbmcmcGFnZT00"
        title="Happy Halloween"
        type="hls"
        muted
      />

      <Link to="/">Browse Elements</Link>
    </>
  );
}

export default IxPlayerPage;