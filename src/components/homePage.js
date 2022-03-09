import "../styles/homePage.scss";
import leaderboard from "../images/leaderboard.png";
import reload from "../images/refresh-cw.png";
import storyList from "../images/free-and-premium.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <div className="main-home">
        <div className="leaderboard-container">
          <h3>
            <span>Leader</span>board
          </h3>
          <div className="leaderboard">
            <img src={leaderboard} />
          </div>
        </div>
        <div className="new-feed">
          <div
            className="story-wide story-card"
            onClick={() => navigate("/games/demo")}
          ></div>
          <div className="story-grid">
            <div className="card story-card cover1"></div>
            <div className="card story-card cover2"></div>
            <div className="card story-card cover3"></div>
          </div>
          <div className="story-grid">
            <div className="card story-card cover4"></div>
            <div className="card story-card cover5"></div>
            <div className="card story-card cover6"></div>
          </div>
          <button className="story-card">
            <img src={reload} /> Refresh
          </button>
        </div>
      </div>
      <div className="free-and-premium">
        <img src={storyList} />
      </div>
    </div>
  );
}
export default HomePage;
