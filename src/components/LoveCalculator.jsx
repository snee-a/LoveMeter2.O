import React, { useState } from "react";
import "./LoveCalculator.css"; // Add this line for external CSS

function LoveCalculator() {
  const [yourName, setYourName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [result, setResult] = useState(null);

  const getFunnyMessage = (score) => {
    if (score < 10) return "🏃‍♀️ Run away! 💨";
    if (score < 25) return "🤐 Friend-zoned";
    if (score < 40) return "💔 Just friends 😶";
    if (score < 55) return "😅 Opposites attract";
    if (score < 70) return "🧿 Nazar lag gayi!";
    if (score < 85) return "💞 Crush Alert! 💞";
    if (score < 95) return "💘 Secret lovers 💘";
    return "💍 Soulmates";
  };

  const calculateLove = (e) => {
    e.preventDefault();
    if (!yourName || !crushName) return alert("Enter both names properly!");
    const compatibility = Math.floor(Math.random() * 100);
    setResult({
      compatibility,
      message: getFunnyMessage(compatibility),
    });
  };

  return (
    <div className="love-container">
      <h1>💖 Love Calculator 💖</h1>
      <form className="love-form" onSubmit={calculateLove}>
        <input
          type="text"
          placeholder="Your Name 💌"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Crush's Name 💘"
          value={crushName}
          onChange={(e) => setCrushName(e.target.value)}
          required
        />
        <button type="submit">Check Compatibility 💖</button>
      </form>

      {result && (
        <div className="result">
          <h2>{yourName} ❤️ {crushName}</h2>
          <p className="score">{result.compatibility}% Compatible</p>
          <p className="message">{result.message}</p>
        </div>
      )}
    </div>
  );
}

export default LoveCalculator;
