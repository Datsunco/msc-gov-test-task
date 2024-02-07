import React from 'react';


const CircleComponent = ({ numberOfElements, circleRadius }) => {
  const circleElements = [];

  for (let i = 0; i < numberOfElements; i++) {

    const angleStep = (2 * Math.PI) / numberOfElements;

    const x = circleRadius + circleRadius * Math.cos(i * angleStep + Math.PI*3/2 );
    const y = circleRadius + circleRadius * Math.sin(i * angleStep + Math.PI*3/2 );

    circleElements.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          top: y,
          left: x,
          transform: 'translate(-50%, -50%)',
          width: '30px', 
          height: '30px', 
          borderRadius: '50%',
          backgroundColor: 'blue', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div
      style={{
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: circleRadius * 2,
        height: circleRadius * 2,
        borderRadius: '50%',
        border: '1px solid black',
      }}
    >
      {circleElements}
    </div>
  );
}

export default CircleComponent;