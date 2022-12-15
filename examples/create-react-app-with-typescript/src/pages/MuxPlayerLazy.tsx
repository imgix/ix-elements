/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import IxVideo from "@imgix/ix-video-react/lazy";

function IxVideoPage() {
  return (
    <>
      <style>
        {`ix-video {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 1rem 0 2rem;
        }`}
      </style>

      <IxVideo
        playbackId="23s11nz72DsoN657h4314PjKKjsF2JG33eBQQt6B95I"
        metadata={{
          video_id: "video-id-12345",
          video_title: "Star Wars: Episode 3",
          viewer_user_id: "user-id-6789",
        }}
        streamType="on-demand"
        muted
      />

      <Link to="/">Browse Elements</Link>
    </>
  );
}

export default IxVideoPage;
