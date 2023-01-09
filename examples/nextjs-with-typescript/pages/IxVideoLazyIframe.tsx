import dynamic from "next/dynamic";
const IxVideoPageStatic = dynamic(() => import("./IxVideoLazy"));
function IxVideoPage() {
  return <iframe
    src="./IxVideoLazy"
    width="816"
    height="1250"
    allow="fullscreen 'none'"
  />;
}

export default IxVideoPage;
