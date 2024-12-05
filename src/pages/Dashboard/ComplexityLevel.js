import React from 'react';
import './styles.css';
import Avatar from '../../components/Process/Avatar';

const ComplexityLevel = () => {
  return (
    <>
        <div className="card complexity-card text-center p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="complexity-bar">
          <div className="complexity-indicator"></div>
        </div>
        <div>
          <h5 className="card-title">Complexity Level</h5>
          <h3 className="card-text text-danger">High</h3>
        </div>
        <div>
        <Avatar/>
        </div>
  
      </div>
    </div></>

  );
};

export default ComplexityLevel;

// import React from "react";
// import "./styles.css";

// const ComplexityLevel = () => {
//   return (
//     <div className="card complexity-card">
//       <div className="d-flex align-items-center">
//         <div className="complexity-bar"></div>
//         <div className="complexity-info">
//           <h5>Complexity Level</h5>
//           <h3 className="text-danger">High</h3>
//         </div>
//         <img
//           src="https://via.placeholder.com/50"
//           alt="User Icon"
//           className="complexity-icon"
//         />
//       </div>
//     </div>
//   );
// };

// export default ComplexityLevel;

