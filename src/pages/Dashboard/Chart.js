
import React from "react";
import './Board.css'
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Chart = () => {
  const selectedCard = useSelector((state) => state.card.selectedCardData);
  const COLORS = selectedCard.pieData.map((entry) => entry.color);
  console.log('selected',selectedCard)
  return (
    <div style={{ position: "relative", width: 400, height: 400 }}>
      <div>
      <PieChart width={400} height={400}>
        <Pie
          data={selectedCard.pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={80}
          fill="#8884d8"
          labelLine={false}
        >
          {selectedCard.pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Centered Label */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "35px", color: "black" }}>
          {selectedCard.value}
        </h2>
      </div>
     
      </div>
     
    <div className="pie-data">
    {selectedCard.pieData.map((item, index) => (
        <div key={index}>
          {item.value} {item.name}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Chart;




