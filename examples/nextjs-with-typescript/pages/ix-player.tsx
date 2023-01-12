// @ts-nocheck
import Link from "next/link";
import Head from "next/head";
import "@imgix/ix-player";
import { useState } from "react";

const INITIAL_DEBUG = false;
const INITIAL_MUTED = false;
const INITIAL_AUTOPLAY = false;
const INITIAL_SRC = "https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls";
const INITIAL_TYPE = "hls";

function IxVideoWCPage() {
  // const mediaElRef = useRef(null);
  const [playbackSrc, setSrc] = useState(INITIAL_SRC);
  const [playbackType, setType] = useState(INITIAL_TYPE);
  const [muted, setMuted] = useState(INITIAL_MUTED);
  const [debug, setDebug] = useState(INITIAL_DEBUG);
  const [autoplay, setAutoplay] = useState(INITIAL_AUTOPLAY);
  const debugObj = debug ? { debug: "" } : {};
  const mutedObj = muted ? { muted: "" } : {};
  const autoplayObj = autoplay ? { autoplay } : {};
  return (
    <>
      <Head>
        <title>&lt;ix-player&gt; Demo</title>
      </Head>

      <div>
        <script defer src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
        <ix-player
          // style={{ aspectRatio: "16 / 9" }}
          src={playbackSrc}
          type={playbackType}
          forward-seek-offset={10}
          backward-seek-offset={10}
          // onPlayerReady={() => console.log("ready!")}
          {...debugObj}
          {...mutedObj}
          {...autoplayObj}
          // stream-type="live"
          // primary-color="#ec407a"
          // secondary-color="#64b5f6"
          // tertiary-color="#b4004e"
          // startTime={12}
        ></ix-player>
      </div>
      <div className="options">
        <div>
          <label htmlFor="autoplay-control">Muted Autoplay</label>
          <input
            id="autoplay-control"
            type="checkbox"
            onChange={() => setAutoplay(!autoplay ? "muted" : false)}
            checked={autoplay}
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
        <div>
          <label htmlFor="debug-control">Debug</label>
          <input
            id="debug-control"
            type="checkbox"
            onChange={() => setDebug(!debug)}
            checked={debug}
          />
        </div>
        <div>
          <label htmlFor="playback-src-control">Playback Src</label>
          <input
            id="playback-src-control"
            onBlur={({ currentTarget }) => setSrc(currentTarget.value)}
            defaultValue={playbackSrc}
          />
        </div>
        <div>
          <label htmlFor="playback-type-control">Playback Type</label>
          <input
            id="playback-type-control"
            onBlur={({ currentTarget }) => setType(currentTarget.value)}
            defaultValue={playbackType}
          />
        </div>
      </div>

      <br/>
      <Link href="/">Browse Elements</Link>
    </>
  );
}

export default IxVideoWCPage;
