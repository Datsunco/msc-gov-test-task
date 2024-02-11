import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import styles from './Curves.module.scss'


const CurrentCurves = ({ mainCurves, otherCurves, prof }) => {
  const { store } = useContext(Context)
  const [linkedSkills, setLinkedSkills] = useState([])
  const [linkedSkillsOther, setLinkedSkillsOther] = useState([])
  const axisProf = store.getAxisProf(prof)


  const handleUpdateCurves = () => {
    const linesArray = mainCurves.map((skill) => store.getAxisSkill(skill));
    const linesArrayOther = otherCurves.map((skill) => store.getAxisSkill(skill));
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
    if (linkedSkills.length > 0) {
      console.log("linkedSkills updated:", linkedSkills, store.isActiveProf(prof));
      // Здесь можно выполнить операции, зависящие от linkedSkills, если это необходимо
    }
  }, [linkedSkills, linkedSkillsOther]);

  return (
    <>
      {store.isActiveProf(prof) ?
        (linkedSkills.map((skill, index) => {
          return (
            <path
              id={index + prof}
              d={`M${axisProf.x + 175},${axisProf.y + 175} C${axisProf.x + 175},${skill?.y} ${skill?.x},${axisProf.y + 175} ${skill?.x},${skill?.y}`}
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
              d={`M${axisProf.x + 175},${axisProf.y + 175} C${axisProf.x + 175},${skill?.y} ${skill?.x},${axisProf.y + 175} ${skill?.x},${skill?.y}`}
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