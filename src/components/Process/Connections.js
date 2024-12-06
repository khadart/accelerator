import React from 'react'
import { useDispatch } from "react-redux";
import { setSelectedCard } from "../store/cardSlice";

const Connections = () => {
    const dispatch = useDispatch();

    const data = {
      title: "Connections",
      value: 1,
      pieData: [
        { name: "HTTP Event Source", value: 5, color: "#0052CC" },
        { name: "Timer Event Source", value: 8, color: "#FDC500" },
        { name: "RV Event Source", value: 2, color: "#512DA8" },
        { name: "File Event Source 1", value: 0, color: "#FF6F00" },
        { name: "File Event Source 2", value: 4, color: "#43A047" },
        { name: "File Event Source 3", value: 8, color: "#F48FB1" },
      ],
    };
    const handleClick = () => {
        dispatch(setSelectedCard(data));
      };
  return (

         <button onClick={handleClick} >
      <h3>{data.title}</h3>
      <p>{data.value}</p>
    </button>
    
  )
}

export default Connections