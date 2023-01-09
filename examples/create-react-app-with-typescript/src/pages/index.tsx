import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <ul>
        <li><Link to="./MuxVideo" className="video">&lt;MuxVideo&gt;</Link></li>
        <li><Link to="./IxVideo" className="video">&lt;IxVideo&gt;</Link></li>
      </ul>
    </nav>
  );
}

export default Home;
