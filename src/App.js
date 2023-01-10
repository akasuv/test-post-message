import "./styles.css";
import React from "react";

export default function App() {
  const handleMsg = () => {
    const popup = window.open("https://x6u90q.csb.app");
    // popup.postMessage("test", "https://x6u90q.csb.app");
    console.log(popup);
  };
  return (
    <div className="App">
      <button onClick={handleMsg}>Post Message</button>
    </div>
  );
}
