import CircleComponent from './ProfCircle/Circle.jsx'
import SkillCircleComponent from './SkillCircle/SkillCircle.jsx'
import './App.css'
import data from './data/prof.json'
import { useContext } from 'react'
import { Context } from './main.jsx'
import { observer } from 'mobx-react-lite'



function App() {
  const { store } = useContext(Context)
  //Развлечения с Set
  let i = 0
  let skillsDataSet = new Set()
  data.forEach(element => {
    element.mainSkills.forEach(skill => {
      skillsDataSet.add(skill)
      i += 1
    })
    element.otherSkills.forEach(skill => {
      skillsDataSet.add(skill)
      i += 1
    })
  })
  //end
  let skillsData = []
  let skillsDataAxis = {}
  i = 0
  skillsDataSet.forEach((value, valueAgain, set) => {
    const angleStep = (2 * Math.PI) / 28;

    const x = 300 + 300 * Math.cos(i * angleStep + Math.PI * 3 / 2);
    const y = 300 + 300 * Math.sin(i * angleStep + Math.PI * 3 / 2);
    i += 1
    skillsData.push({ name: value, x: x, y: y})
    skillsDataAxis[value] = {x,y}
  });
  store.setSkillsData(skillsDataAxis)

  // console.log(skillsDataSet.size)
  // console.log(iter)
  return (
    <>
      <CircleComponent elements={data} circleRadius={125} />
      <SkillCircleComponent elements={skillsData} circleRadius={300} />
    </>
  )
}

export default observer(App) 
