import Link from "next/link";

function HomePage() {
  return (
    <nav>
      <ul>
        <li><Link href="/MuxVideo"><a className="video">&lt;MuxVideo&gt;</a></Link></li>
        <li><Link href="/IxVideo"><a className="video">&lt;IxVideo&gt;</a></Link></li>
        <li><Link href="/IxVideoLazy"><a className="player">&lt;IxVideo&gt;<br/>(lazy)</a></Link></li>
        <li><Link href="/IxVideoDynamic"><a className="player">&lt;IxVideo&gt;<br/>(Next.js dynamic)</a></Link></li>
        <li><Link href="/IxVideoLazyDynamic"><a className="player">&lt;IxVideo&gt;<br/>(lazy + dynamic)</a></Link></li>
        <li><Link href="/IxVideoIframe"><a className="player">&lt;IxVideo&gt;<br/>(w/o fullscreen)</a></Link></li>
        <li><Link href="/IxVideoLazyIframe"><a className="player">&lt;IxVideo&gt;<br/>(lazy + w/o fullscreen)</a></Link></li>
        <li><Link href="/IxVideoLazyBlurhash"><a className="player">&lt;IxVideo&gt;<br/>(lazy + @mux/blurhash)</a></Link></li>
        <li><Link href="/mux-video"><a className="video">&lt;mux-video&gt;<br/>(Web Component)</a></Link></li>
        <li><Link href="/ix-video"><a className="video">&lt;ix-video&gt;<br/>(Web Component)</a></Link></li>
        {/* <li><Link href="/mux-player"><a className="player">&lt;mux-player&gt;<br/>(Web Component)</a></Link></li> */}
      </ul>
    </nav>
  );
}

export default HomePage;
