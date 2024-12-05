import React from "react";
import "./Board.css";
import ComplexityLevel from "./ComplexityLevel";
import Card from "./Card";
import Piechart from "./PieChart";


const Board = () => {
  return (
    <div className="container text-center dashboard-con">
      <div className="row">
        <div className="col-lg-7">
          <ComplexityLevel />
        </div>
        <div className="col-lg-5">
          <Card
            title="Time Takes For Migration"
            value="36hr"
            className="bg-danger text-white"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-6" >
            <Card title="Number of Machines" value="36" />
            </div>
            <div className="col-lg-6">
          <Card title="Number of PARs" value="22" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
          <Card title="Starter Processes" value="16" />

            </div>
            <div className="col-lg-6">
          <Card title="Connections" value="12" />

            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
          <Card title="Variables" value="28" />

            </div>
            <div className="col-lg-6">
          <Card title="Processes" value="48" />

            </div>
          </div>
          <div className="row">
         
          <div className="col-lg-6">
          <Card title="Processes" value="48" />
          </div>
          
          <div className="col-lg-6">
          <Card title="Processes" value="48" />
          </div>
          </div>
        </div>
        <div className="col-lg-7">
        <Piechart />
        </div>
      </div>
     
    </div>
  );
};

export default Board;
