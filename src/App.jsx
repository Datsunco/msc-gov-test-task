import CircleComponent from './ProfCircle/Circle.jsx'
import SkillCircleComponent from './SkillCircle/SkillCircle.jsx'
import './App.css'
import data from './data/prof.json'



function App() {
  // data.forEach(element => {

  // });

  console.log(data)
  return (
    <>
      <CircleComponent elements={data} circleRadius={125} />
      {/* <SkillCircleComponent numberOfElements={18} circleRadius={250} /> */}
    </>
  )
}

export default App
