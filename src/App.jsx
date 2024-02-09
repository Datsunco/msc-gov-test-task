import CircleComponent from './ProfCircle/Circle.jsx'
import SkillCircleComponent from './SkillCircle/SkillCircle.jsx'
import './App.css'
import data from './data/prof.json'
import { useContext, useEffect} from 'react'
import { Context } from './main.jsx'
import { observer } from 'mobx-react-lite'
import Curves from './Curves/Curves.jsx'



function App() {
  const { store } = useContext(Context)

  useEffect(() => {

  }, [store])

  //Развлечения с Set
  let i = 0
  let skillsDataSet = new Set()
  let profDataAxis = {}

  data.forEach(element => {
    element.mainSkills.forEach(skill => {
      skillsDataSet.add(skill)
    })
    element.otherSkills.forEach(skill => {
      skillsDataSet.add(skill)
    })

    //Сохраняем в хранилище профессии с координатами 
    const angleStep = (2 * Math.PI) / data.length;

    const x = 125 + 125 * Math.cos(i * angleStep + Math.PI * 3 / 2);
    const y = 125 + 125 * Math.sin(i * angleStep + Math.PI * 3 / 2);
    profDataAxis[element.name] = { x, y }
    i += 1

  })
  store.setProfData(profDataAxis)
  //end


  let skillsData = []
  let skillsDataAxis = {}
  i = 0
  // Сохраняем в хранилище скилы с координатами 
  skillsDataSet.forEach((value, valueAgain, set) => {
    const angleStep = (2 * Math.PI) / skillsDataSet.size;

    const x = 300 + 300 * Math.cos(i * angleStep + Math.PI * 3 / 2);
    const y = 300 + 300 * Math.sin(i * angleStep + Math.PI * 3 / 2);

    i += 1
    skillsData.push({ name: value })
    skillsDataAxis[value] = { x, y }
  });
  store.setSkillsData(skillsDataAxis)

  return (
    <>
      <CircleComponent elements={data} circleRadius={125} />
      <SkillCircleComponent elements={skillsData} circleRadius={300} />
      <Curves elements={data} />
    </>
  )
}

export default observer(App) 
