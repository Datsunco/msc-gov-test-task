import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import styles from './Curves.module.scss'


const CurrentCurves = ({ mainCurves, otherCurves, prof }) => {
  const { store } = useContext(Context)
  const [linkedSkills, setLinkedSkills] = useState([])
  const [linkedSkillsOther, setLinkedSkillsOther] = useState([])
  const axisProf = store.getAxisProf(prof)

  const createCurvePath = (coords) => {
    const newX = axisProf.x + 175 + Math.abs(axisProf.x + 175 - coords.x) / 2
    const newX2 = axisProf.x + 175 - Math.abs(axisProf.x + 175 - coords.x) / 2
    if (coords.x >= axisProf.x+170){
      return `M${axisProf.x + 175},${axisProf.y + 175} C${newX},${axisProf.y + 175} ${newX},${coords?.y} ${coords?.x},${coords?.y}`
    }else{
      return `M${axisProf.x + 175},${axisProf.y + 175} C${newX2},${axisProf.y + 175} ${newX2},${coords?.y} ${coords?.x},${coords?.y}`
    }

  }


  const handleUpdateCurves = () => {
    const linesArray = mainCurves.map((skill) => createCurvePath(store.getAxisSkill(skill)));
    const linesArrayOther = otherCurves.map((skill) => createCurvePath(store.getAxisSkill(skill)));
    setLinkedSkills(linesArray)
    setLinkedSkillsOther(linesArrayOther)
  }

  useEffect(() => {
    if (store.isActiveProf(prof)) {

      // console.log("changed")
      handleUpdateCurves()
      // console.log("linkedSkills", linkedSkills, curves, store.isActiveProf(prof))
    }

  }, [store.skillsData])

  useEffect(() => {
    // Этот useEffect будет вызван каждый раз, когда linkedSkills изменится
    // if (linkedSkills.length > 0) {
    //   console.log("linkedSkills updated:", linkedSkills, store.isActiveProf(prof));
    //   // Здесь можно выполнить операции, зависящие от linkedSkills, если это необходимо
    // }
  }, [linkedSkills, linkedSkillsOther]);

  return (
    <>
      {store.isActiveProf(prof) ?
        (linkedSkills.map((skill, index) => {
          return (
            <path
              id={index + prof}
              d={skill}
              className={styles.bezier_curve}
            />
          )
        }))
        :
        null
      }
      {store.isActiveProf(prof) ?
        (linkedSkillsOther.map((skill, index) => {
          return (
            <path
              id={index + prof}
              d={skill}
              className={styles.bezier_curve_other}
            />
          )
        }))
        :
        null
      }
    </>
  );
};

export default observer(CurrentCurves);