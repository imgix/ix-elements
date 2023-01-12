import Link from "next/link";

function HomePage() {
  return (
    <nav>
      <ul>
        <li><Link href="/IxVideo"><a className="video">&lt;IxVideo&gt;</a></Link></li>
        <li><Link href="/IxPlayer"><a className="video">&lt;IxPlayer&gt;</a></Link></li>
        <li><Link href="/IxPlayerLazy"><a className="player">&lt;IxPlayer&gt;<br/>(lazy)</a></Link></li>
        <li><Link href="/IxPlayerDynamic"><a className="player">&lt;IxPlayer&gt;<br/>(Next.js dynamic)</a></Link></li>
        <li><Link href="/IxPlayerLazyDynamic"><a className="player">&lt;IxPlayer&gt;<br/>(lazy + dynamic)</a></Link></li>
        <li><Link href="/IxPlayerIframe"><a className="player">&lt;IxPlayer&gt;<br/>(w/o fullscreen)</a></Link></li>
        <li><Link href="/IxPlayerLazyIframe"><a className="player">&lt;IxPlayer&gt;<br/>(lazy + w/o fullscreen)</a></Link></li>
        <li><Link href="/IxPlayerLazyBlurhash"><a className="player">&lt;IxPlayer&gt;<br/>(lazy + @mux/blurhash)</a></Link></li>
        <li><Link href="/ix-video"><a className="video">&lt;ix-video&gt;<br/>(Web Component)</a></Link></li>
        <li><Link href="/ix-player"><a className="video">&lt;ix-player&gt;<br/>(Web Component)</a></Link></li>
        {/* <li><Link href="/mux-player"><a className="player">&lt;mux-player&gt;<br/>(Web Component)</a></Link></li> */}
      </ul>
    </nav>
  );
}

export default HomePage;
