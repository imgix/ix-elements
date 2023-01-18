import dynamic from "next/dynamic";
const IxPlayerPageStatic = dynamic(() => import("./IxPlayer"));
function IxPlayerPage() {
  return <iframe
    src="./IxPlayer"
    width="816"
    height="1250"
    allow="fullscreen 'none'"
  />;
}

export default IxPlayerPage;
