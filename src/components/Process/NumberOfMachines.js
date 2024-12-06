import React from 'react'
import { useDispatch } from "react-redux";
import { setSelectedCard } from "../../store/CardSlice"
import './Process.css'
const NumberOfMachines = () => {

  const dispatch = useDispatch();
  const data = {
    title: "Number of Machines",
    value: 36,
    pieData: [
      { name: "HTTP Event Source", value: 6, color: "#0052CC" },
      { name: "Timer Event Source", value: 6, color: "#FDC500" },
      { name: "RV Event Source", value: 6, color: "#512DA8" },
      { name: "File Event Source ", value: 6, color: "#FF6F00" },
      { name: "File Event Source ", value: 6, color: "#43A047" },
      { name: "File Event Source ", value: 6, color: "#F48FB1" },
    ],
  };

  const handleClick = () => {
    dispatch(setSelectedCard(data));
  };

  return (
 
            <button onClick={handleClick} className='card-btn'>
                <p className='number'>{data.value}</p>
                <h3 className='title'>{data.title}</h3>
           
  
  
  </button>
   
    
  )
}

export default NumberOfMachines