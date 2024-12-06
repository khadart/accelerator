import React from 'react'
import { useDispatch } from "react-redux";
import { setSelectedCard } from '../../store/CardSlice'

const NumberOfVariables = () => {
    const dispatch = useDispatch();

    const data = {
      title: "Number Of Variables",
      value: 98,
      pieData: [
        { name: "HTTP Event Source", value: 1, color: "#0052CC" },
        { name: "Timer Event Source", value: 2, color: "#FDC500" },
        { name: "RV Event Source", value: 4, color: "#512DA8" },
        { name: "File Event Source ", value: 6, color: "#FF6F00" },
        { name: "File Event Source ", value: 2, color: "#43A047" },
        { name: "File Event Source ", value: 0, color: "#F48FB1" },
      ],
    };
    const handleClick = () => {
        dispatch(setSelectedCard(data));
      };
    
  return (
    
         <button onClick={handleClick} className='card-btn2'>
            <p className='card-number'>{data.value}</p>
      <h3 className='card-title'>{data.title}</h3>
      
    </button>
   
  )
}

export default NumberOfVariables