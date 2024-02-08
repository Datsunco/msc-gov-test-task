import CircleComponent from './ProfCircle/Circle.jsx'
import SkillCircleComponent from './SkillCircle/SkillCircle.jsx'
import './App.css'
import data from './data/prof.json'



function App() {
  //Развлечения с Set
  let iter = 0
  let skillsDataSet = new Set()
  data.forEach(element => {
    element.mainSkills.forEach(skill => {
      skillsDataSet.add(skill)
      iter+=1
    })
  }) 
  //end
  let skillsData = []
  skillsDataSet.forEach((value, valueAgain, set) => {
    skillsData.push({name: value})
  });

  // console.log(skillsDataSet.size)
  // console.log(iter)
  return (
    <>
      <CircleComponent elements={data} circleRadius={125} />
      <SkillCircleComponent elements={skillsData} circleRadius={300} />
    </>
  )
}

export default App
