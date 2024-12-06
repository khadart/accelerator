import React from 'react'
import { useDispatch } from "react-redux";
import { setSelectedCard } from "../../store/CardSlice"

const NumberOfPars = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setSelectedCard(data));
      };
    const data = {
      title: "Number of PARs",
      value: 22,
      pieData: [
        { name: "HTTP Event Source", value: 4, color: "#0052CC" },
        { name: "Timer Event Source", value: 4, color: "#FDC500" },
        { name: "RV Event Source", value: 4, color: "#512DA8" },
        { name: "File Event Source ", value: 5, color: "#FF6F00" },
        { name: "File Event Source ", value: 5, color: "#43A047" },
        { name: "File Event Source ", value: 5, color: "#F48FB1" },
      ],
    };
  return (
   
           <button onClick={handleClick} className='card-btn'>
             <p className='number'>{data.value}</p>
      <h3 className='title'>{data.title}</h3>
     
    </button>
    
  )
}

export default NumberOfPars