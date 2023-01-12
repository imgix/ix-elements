import dynamic from "next/dynamic";
const IxPlayerPageStatic = dynamic(() => import("./IxPlayerLazy"));
function IxPlayerPage() {
  return <iframe
    src="./IxVideoLazy"
    width="816"
    height="1250"
    allow="fullscreen 'none'"
  />;
}

export default IxPlayerPage;
