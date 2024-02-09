import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import styles from './Curves.module.scss'

const CurrentCurves = ({curves, prof}) => {
    const { store } = useContext(Context)
    const axisProf = store.getAxisProf(prof)
    const linkedSkills = []
    const [isActive, setIsActive] = useState(store.isActiveProf(prof))

    useEffect(() => {
        setIsActive(store.isActiveProf(prof))
        console.log('changed')
    }, [store])

    curves.forEach(skill => {
        const axisSkill = store.getAxisSkill(skill)
        const d = `M${axisProf.x+175},${axisProf.y+175} C${axisProf.x},${axisSkill.y} ${axisSkill.x},${axisProf.y} ${axisSkill.x},${axisSkill.y}`;
        linkedSkills.push(
          <path
            id={axisProf.x + prof}
            d={d}
            className={ styles.bezier_curve}
          />)
      })
    
    return (
        <> 
        {store.isActiveProf(prof) ?
            (linkedSkills)
            :
            null
        }
        {/* {linkedSkills} */}
        </>
    );
};

export default observer(CurrentCurves);