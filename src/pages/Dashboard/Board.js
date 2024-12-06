import React from "react";
import "./Board.css";
import ComplexityLevel from "./ComplexityLevel";
import Chart from './Chart'
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
      <div className="row">
        <div className="col-lg-7">
          <ComplexityLevel />

        </div>
        <div className="col-lg-5">
        <Accelerator/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <div className="row dashboard-row">
            <div className="col-lg-6" >
          <NumberOfMachines/>
            </div>
            <div className="col-lg-6">
        <NumberOfPars/>
            </div>
          </div>
          <div className="row dashboard-row">
            <div className="col-lg-6">
          <NumberOfStarterProcess/>

            </div>
            <div className="col-lg-6">
        <NumberOfConnections/>

            </div>
          </div>
          <div className="row dashboard-row">
            <div className="col-lg-6">
       <NumberOfVariables/>

            </div>
            <div className="col-lg-6">
        <NumberOfProcesses/>

            </div>
          </div>
          <div className="row dashboard-row">
         
          <div className="col-lg-6">
        <NumberOfFunction/>
          </div>
          
          <div className="col-lg-6">
         <NumberOfConnections/>
          </div>
          </div>
        </div>
        <div className="col-lg-7 pie">
        <Chart />
        </div>
      </div>
     
    </div>
  );
};

export default Board;

