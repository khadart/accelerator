import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setComplexityLevel } from '../features/appSlice';

const Meter = () => {
  const complexityLevel = useSelector((state) => state.app.complexityLevel);
  const dispatch = useDispatch();

  const getMeterColor = () => {
    if (complexityLevel.value <= 33) return 'green';
    if (complexityLevel.value <= 66) return 'yellow';
    return 'red';
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    let label = 'Low';
    if (value > 33 && value <= 66) label = 'Medium';
    if (value > 66) label = 'High';

    dispatch(setComplexityLevel({ label, value }));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3>Complexity Level: {complexityLevel.label}</h3>
      <div
        style={{
          width: '100%',
          height: '20px',
          background: '#e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${complexityLevel.value}%`,
            height: '100%',
            background: getMeterColor(),
            transition: 'width 0.5s ease, background 0.5s ease',
          }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={complexityLevel.value}
        onChange={handleSliderChange}
        style={{ marginTop: '10px', width: '100%' }}
      />
    </div>
  );
};

export default Meter;
