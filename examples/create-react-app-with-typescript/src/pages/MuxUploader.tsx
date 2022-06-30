import { Link } from "react-router-dom";
import MuxUploader from "@mux/mux-uploader-react";

function MuxUploaderPage() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <h1>MuxUploader Demo</h1>
      <div style={{ flexGrow: 1, flexShrink: 1, height: "400px" }}>
        <MuxUploader
          url="https://storage.googleapis.com/video-storage-us-east1-uploads/YZbTez00mBRSM9CAiayJNFynGBRddl1bLZocr8SGjsAI?Expires=1656560236&GoogleAccessId=direct-uploads-writer-prod%40mux-cloud.iam.gserviceaccount.com&Signature=ncwWvKYlXIQABWHBfNkdoulbXvzaNpHWrZePfo89Hz6Uhx1hZ4xHAPr9XfQGsZQpeAgHfIyxLDe4cVO3hbNxLIdLchQlm%2BQXTZak9q78y%2F2bXDCUO6gva8cCMOljDWfFSenXby4nQl4FKHAdmCdQI%2BZK7HG2LPKX1qumDmubTxHjMqvirXsWHexrI8S3QbR3ca7y5dpl1V9nnOcVSITFi2kon9%2BZJ3Gnvx%2BCrsha10XhPaSPZIzBumkaJg2PQF8hu1ThIft%2BzxnsFaY90VUdTcKMkb0cIFvyBvnUow%2Fg6FRODL%2F0C%2BSCeiWz32eoQjyfSvpum6IUHWSFMAyGnVXQlw%3D%3D&upload_id=ADPycdtFRqx_WgiVzoLplDexnzxiuFj1JTSgMs2lyzb4HwxFpPprCH7pY0jF_pIJlh3_o8JRTDrRiq68WEBuIF1s67KJbhnr0kvt"
          type="bar"
          status
        />
      </div>
      <h3 className="title">
        <Link to="/">Browse Elements</Link>
      </h3>
    </div>
  );
}

export default MuxUploaderPage;
