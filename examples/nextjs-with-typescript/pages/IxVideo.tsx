import Link from "next/link";
import Head from 'next/head';
import { useRef, useState } from "react";
import IxVideo from "@imgix/ix-video-react";

const INITIAL_AUTOPLAY = false;
const INITIAL_MUTED = false;
const INITIAL_PLAYBACK_SRC = "https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls";
const INITIAL_PLAYBACK_TYPE = "hls";

function IxVideoPage() {
  const mediaElRef = useRef(null);
  const [playbackSrc, setPlaybackSrc] = useState(INITIAL_PLAYBACK_SRC);
  const [type, setType] = useState(INITIAL_PLAYBACK_TYPE);
  const [autoplay, setAutoplay] = useState<"muted" | boolean>(INITIAL_AUTOPLAY);
  const [muted, setMuted] = useState(INITIAL_MUTED);
  const [paused, setPaused] = useState<boolean | undefined>(true);

  return (
    <>
      <Head>
        <title>&lt;IxVideo/&gt; Demo</title>
      </Head>

      <IxVideo
        ref={mediaElRef}
        src={playbackSrc}
        // @ts-ignore - TODO: remove this ts ignore
        type={type}
        // metadata={{
        //   video_id: "video-id-12345",
        //   video_title: "Mad Max: Fury Road Trailer",
        //   viewer_user_id: "user-id-6789",
        // }}
        // envKey="mux-data-env-key"
        // streamType="on-demand"
        controls
        autoPlay={autoplay}
        muted={muted}
        onPlay={() => {
          setPaused(false);
        }}
        onPause={() => {
          setPaused(true);
        }}
      />

      <div className="options">
        <div>
          <label htmlFor="paused-control">Paused</label>
          <input
            id="paused-control"
            type="checkbox"
            onChange={() => setPaused(!paused)}
            checked={paused}
          />
        </div>
        <div>
          <label htmlFor="autoplay-control">Muted Autoplay</label>
          <input
            id="autoplay-control"
            type="checkbox"
            onChange={() => setAutoplay(!autoplay ? "muted" : false)}
            checked={!!autoplay}
          />
        </div>
        <div>
          <label htmlFor="muted-control">Muted</label>
          <input
            id="muted-control"
            type="checkbox"
            onChange={() => setMuted(!muted)}
            checked={muted}
          />
        </div>
      </div>

      <br/>
      <Link href="/"><a>Browse Elements</a></Link>
    </>
  );
}

export default IxVideoPage;
