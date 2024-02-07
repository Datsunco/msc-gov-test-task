import React from 'react';
import CircleComponent from './Circle.jsx'

export function App(props) {
  return (
    <>
    <CircleComponent numberOfElements={6} circleRadius={125} />
    <CircleComponent numberOfElements={18} circleRadius={250} />
    </>
  );
}
