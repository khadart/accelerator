import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Board.css";

const Accelerator = () => {
  const selectedCard = useSelector((state) => state.card.timeForAccelerator);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="accelerator-card">
      <div >
      <div className="toggle-bar">
        <h4 className="logo-name">Accelerator</h4>
        <div >
        <div
      className={`toggle-container ${isOn ? "on" : "off"}`}
      onClick={toggleSwitch}
    >
      <div className="toggle-circle"></div>
      <span className="toggle-label">{isOn ? "ON" : "OFF"}</span>
    </div>
        </div>
      </div>

      <div className="accelerator-details">
        <h2 className="logo-name">{selectedCard.title}</h2>
        <h2 className="acc-time">{selectedCard.time}</h2>
      </div>
      </div>
    
    </div>
  );
};

export default Accelerator;
