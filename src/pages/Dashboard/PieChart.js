// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// // Register required elements
// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = () => {
//   const data = {
//     labels: ['HTTP Event', 'Timer Event', 'RV Event', 'File Event 1', 'File Event 2', 'File Event 3'],
//     datasets: [
//       {
//         data: [6, 6, 6, 6, 6, 6],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
//       },
//     ],
//   };

//   return (
//     <div className="card p-3">
//       <h5 className="card-title text-center">Event Sources</h5>
//       <Pie data={data} />
//     </div>
//   );
// };

//  export default PieChart;

// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
// import "./styles.css";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = () => {
//   const data = {
//     labels: [
//       "HTTP Event Source",
//       "Timer Event Source",
//       "RV Event Source",
//       "File Event Source 1",
//       "File Event Source 2",
//       "File Event Source 3",
//     ],
//     datasets: [
//       {
//         data: [6, 6, 6, 6, 6, 6],
//         backgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#4BC0C0",
//           "#9966FF",
//           "#FF9F40",
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="card pie-chart-card">
//       <h5>Event Sources</h5>
//       <Pie data={data} />
//     </div>
//   );
// };

// export default PieChart;

import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "HTTP Event Source", value: 6, color: "#0052CC" }, // Blue
  { name: "Timer Event Source", value: 6, color: "#FDC500" }, // Yellow
  { name: "RV Event Source", value: 6, color: "#512DA8" }, // Purple
  { name: "File Event Source 1", value: 6, color: "#FF6F00" }, // Orange
  { name: "File Event Source 2", value: 6, color: "#43A047" }, // Green
  { name: "File Event Source 3", value: 6, color: "#F48FB1" }, // Pink
];

const COLORS = data.map((entry) => entry.color);

const Piechart = () => {
  return (
    <div style={{ position: "relative", width: 400, height: 400 }}>
      {/* Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={80}
          fill="#8884d8"
          labelLine={false}
        >
          {data.map((entry, index) => (
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
          backgroundColor: "#000000",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "24px", color: "#fff" }}>36</h2>
      </div>
    </div>
  );
};

export default Piechart;


