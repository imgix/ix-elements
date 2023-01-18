import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <ul>
        <li><Link to="./IxVideo" className="video">&lt;IxVideo&gt;</Link></li>
        <li><Link to="./IxPlayer" className="video">&lt;IxPlayer&gt;</Link></li>
      </ul>
    </nav>
  );
}

export default Home;
