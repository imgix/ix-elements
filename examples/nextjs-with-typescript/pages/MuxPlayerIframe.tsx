import dynamic from "next/dynamic";
const IxVideoPageStatic = dynamic(() => import("./IxVideo"));
function IxVideoPage() {
  return <iframe
    src="./IxVideo"
    width="816"
    height="1250"
    allow="fullscreen 'none'"
  />;
}

export default IxVideoPage;
