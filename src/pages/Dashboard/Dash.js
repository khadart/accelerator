


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCard } from "../../store/CardSlice";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Dashboard = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const selectedCardId = useSelector((state) => state.cards.selectedCardId);
  const selectedCard = cards.find((card) => card.id === selectedCardId);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "20px" }}>
      {/* Cards Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "30%" }}>
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => dispatch(setSelectedCard(card.id))}
            style={{
              padding: "10px",
              backgroundColor: selectedCardId === card.id ? "#0052CC" : "#f0f0f0",
              color: selectedCardId === card.id ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <h3>{card.title}</h3>
            <p style={{ margin: 0 }}>Value: {card.value}</p>
          </button>
        ))}
      </div>

      {/* Pie Chart Section */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: 400, height: 400 }}>
          {/* Pie Chart */}
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
                <Cell key={`cell-${index}`} fill={entry.color} />
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
              backgroundColor: "#000000",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "24px", color: "#fff" }}>
              {selectedCard.value}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

