import React from 'react';


const CircleComponent = ({ elements, circleRadius }) => {
  const numberOfElements = elements.length
  const circleElements = [];


  const checkTextAlign = (angle) => {
    if (angle < Math.PI && angle > 0) return 'left'
    else if (angle > Math.PI && angle < Math.PI*2) return 'right'
    else return 'center'
  }

  for (let i = 0; i < numberOfElements; i++) {

    const angleStep = (2 * Math.PI) / numberOfElements;

    const x = circleRadius + circleRadius * Math.cos(i * angleStep + Math.PI * 3 / 2);
    const y = circleRadius + circleRadius * Math.sin(i * angleStep + Math.PI * 3 / 2);

    circleElements.push(
      <>
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
        <div
          key={i}
          style={{
            position: 'absolute',
            top: y + 30 * Math.sin(i * angleStep + Math.PI * 3 / 2),
            left: x + 30 * Math.cos(i * angleStep + Math.PI * 3 / 2) ,
            transform: 'translate(-50%, -50%)',
            width: '90px',
            minHeight: '60px',
            // height: '30px',
            // borderRadius: '50%',
            // backgroundColor: 'blue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3A3A3A',
            fontWeight: '700',
            fontSize: '12px',
            lineHeight: '13.28px',
            verticalAlign: 'middle',
            textAlign: checkTextAlign(i * angleStep)
          }}
          >
          {elements[i].name}
        </div>
      </>
    );
  }
  // {checkTextAlign(i * angleStep)}
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