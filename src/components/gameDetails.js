import "../styles/gameDetails.scss";
import rating from "../images/rating.png";
import leaderboard from "../images/game-leaderboard.png";
import cover from "../images/whodidit.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function GameDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="details-page">
      <div className="details">
        <div className="cover-container">
          <img src={cover} />
        </div>
        <div className="game-details">
          <h3>Jack the Smacking Guy</h3>
          <div classname="info">
            <p className="author">By @ameowdog</p>
            <div className="rating">
              <img src={rating} />
            </div>
          </div>
          <p className="played">Played by: 432 players</p>
        </div>
        <button
          className="start-btn"
          onClick={() => navigate("/games/demo/play")}
        >
          Start Game
        </button>
        <br />
        <div className="tabs">
          <ul>
            <li className="active">Summary</li>
            <li>Comments (4)</li>
            <li>Related (3)</li>
          </ul>
        </div>
        <p className="summary">
          The fire crackles.
          <br />
          <br />
          Thao is reading on her Kindle, Celia is coding, Sascha is watching a
          video. Sivana is writing something on her notebook. <br />
          <br /> The police comes. Is Sivana the murderer? (yes/no)
        </p>
      </div>
      <div className="leaderboard">
        <img src={leaderboard} />
      </div>
    </div>
  );
}
export default GameDetails;
