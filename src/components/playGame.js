import "../styles/playGame.scss";
import React, { useState } from "react";
import jsxToString from "jsx-to-string";
import progress from "../images/progress.png";
import download from "../images/download.svg";
function PlayGame() {
  const plot = [
    "On a dark and gloomy Tuesday evening, there was a loud thud that echoed throughout the barn.",
    "Donald Duck laid there, dead on the floor. One of them did it, but we don't know who.",
    "Vote Celia, Sivana, Thao, or Sascha. Who is the murderer of Donald Duck? *please use capital letters*",
    "vote",
  ];
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [content, setContent] = useState(plot[0]);
  const [current, setCurrent] = useState(1);
  const [placeholder, setPlaceholder] = useState("Enter to continue…");
  const next = (event) => {
    // if (plot[current] == "vote") {
    // } else {
    //   if (event.key === "Enter") {
    //     setContent(content + "\n\n" + plot[current]);
    //   } else {
    //     setContent(content + "\n\nIt is not time to answer yet!");
    //   }
    //   // things to change before next return
    //   if (plot[current + 1] == "vote") {
    //     setPlaceholder("Please vote…");
    //   }
    // }
    if (event.key === "Enter") {
      setCurrent(current + 1);
      setSubmitted(answer);
      setAnswer("");
      if (submitted == "") {
        setContent(content + "\n\n" + plot[current]);
      }
    }
  };
  return (
    <div className="playGame">
      <div className="chapters">
        <p className="lv0">{"<"} Back to home</p>
        <p className="lv1">Chapter 1</p>
        <p className="lv2">The fireworks</p>
        <p className="lv2">A strange sound</p>
        <p className="lv1">Chapter 2</p>
      </div>
      <div className="story">
        <img src={progress} />
        <p className="summary" style={{ whiteSpace: "pre-line" }}>
          <br />
          <br />
          <br />
          <b>Chapter 1</b> <br />
          <br />
          {content}
        </p>
        <input
          className="input"
          placeholder={placeholder}
          onKeyDown={next}
          value={answer}
        />
      </div>
      <div className="questions">
        <div className="history">
          <h3>History</h3>
          <div className="question-container correct">
            1. What is the gradient of y=x?
          </div>
          <div className="question-container wrong">
            2. What is the gradient of y=4x-6?
          </div>
        </div>
        <div className="wrong-questions">
          <h3>Wrong answers</h3>
          <div className="download-box">
            <img src={download} />
            Download PDF
          </div>
          <div className="question-container wrong">
            2. What is the gradient of y=4x-6?
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayGame;
