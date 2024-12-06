import React from "react";
import "./Board.css";
import ComplexityLevel from "./ComplexityLevel";
import Chart from "./Chart";
import Accelerator from "./Accelerator";
import NumberOfMachines from "../../components/Process/NumberOfMachines";
import NumberOfPars from "../../components/Process/NumberOfPars";
import NumberOfStarterProcess from "../../components/Process/NumberOfStarterProcess";
import NumberOfConnections from "../../components/Process/NumberOfConnections";
import NumberOfVariables from "../../components/Process/NumberOfVariables";
import NumberOfProcesses from "../../components/Process/NumberOfProcesses";
import NumberOfFunction from "../../components/Process/NumberOfFunction";

const Board = () => {
  return (
    <div className="container text-center dashboard-con">
      <div style={{display:'flex',flexDirection:'row-reverse',marginBottom:'8px'}}>
      <button className="acc-btn">Add New files</button>
      </div>
     
      <div className="row g-0">
        <div className="col-lg-7 p-1">
          <ComplexityLevel />
        </div>
        <div className="col-lg-5 p-1">
          <Accelerator />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-5 p-0">
          <div className="row dashboard-row g-0">
            <div className="col-lg-6 p-0">
              <NumberOfMachines />
            </div>
            <div className="col-lg-6 p-0">
              <NumberOfPars />
            </div>
          </div>
          <div className="row dashboard-row g-0">
            <div className="col-lg-6 p-1">
              <NumberOfStarterProcess />
            </div>
            <div className="col-lg-6 p-1">
              <NumberOfConnections />
            </div>
          </div>
          <div className="row dashboard-row g-0">
            <div className="col-lg-6 p-1">
              <NumberOfVariables />
            </div>
            <div className="col-lg-6 p-1">
              <NumberOfProcesses />
            </div>
          </div>
          <div className="row dashboard-row g-0">
            <div className="col-lg-6 p-1">
              <NumberOfFunction />
            </div>

            <div className="col-lg-6 p-1">
              <NumberOfConnections />
            </div>
          </div>
        </div>
        <div className="col-lg-7 pie p-0">
          <Chart />
        </div>
      </div>
      <div>
        <button className="acc-btn">Design Info</button>
        <button className="download-btn">Download a file</button>
      </div>
    </div>
  );
};

export default Board;
