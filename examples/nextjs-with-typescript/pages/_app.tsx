import '../styles.css'
import Head from 'next/head';
import Link from "next/link";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Mux Elements</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
    </Head>
    <header>
      <div className="left-header">
        <a className="imgix-logo" href="https://imgix.com/solutions/video-api?gad=1" target="_blank">
          <img width="81" height="26" src="https://assets.imgix.net/imgix-logo.png?fm=auto&w=281&h=226" alt="imgix logo" decoding="async" />
        </a>
        <h1><Link href="/">ix-elements</Link></h1>
      </div>
      <div className="right-header">
        <a className="github-logo" href="https://github.com/imgix/ix-elements" target="_blank">
          <img width="32" height="32" src="https://avatars.githubusercontent.com/u/2793044?s=200&v=4" alt="Github logo" />
        </a>
      </div>
    </header>
    <Component {...pageProps} />
  </>
}
