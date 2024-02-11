import React, { useContext } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import styles from './ProfCircle.module.scss'


const CircleComponent = ({circleRadius }) => {
  const { store } = useContext(Context)
  const elements = store.data
  const numberOfElements = elements.length
  const circleElements = [];
  const linkedSkillsAxis = []

  // console.log(store.getData())


  const checkTextAlign = (angle) => {
    if (angle < Math.PI && angle > 0) return 'left'
    else if (angle > Math.PI && angle < Math.PI * 2) return 'right'
    else return 'center'
  }

  const checkXOffset = (angle) => {
    if (angle < Math.PI && angle > 0) return +40
    else if (angle > Math.PI && angle < Math.PI * 2) return -40
    else return 0
  }

  const onClickProfCircle = (element) => {
    // store.setSkillsDataDefault()
    store.setActiveProf(element.name)
    store.setActiveSkills([...element.mainSkills, ...element.otherSkills])
    store.swapSkills(element.name, [...element.mainSkills, ...element.otherSkills])
  }

  for (let i = 0; i < numberOfElements; i++) {

    const angleStep = (2 * Math.PI) / numberOfElements;

    const x = circleRadius + circleRadius * Math.cos(i * angleStep + Math.PI * 3 / 2);
    const y = circleRadius + circleRadius * Math.sin(i * angleStep + Math.PI * 3 / 2);


    const activeState = store.isActiveProf(elements[i].name)

    circleElements.push(
      <div onClick={() => onClickProfCircle(elements[i])}>
        <div
          key={i + 'profcircle'}
          className={activeState ? styles.circle_active : styles.circle}
          style={{
            position: 'absolute',
            top: y,
            left: x,
            transform: 'translate(-50%, -50%)',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {/* {i + 1} */}
        </div>
        <div
          key={i + 'proftxt'}
          className={activeState ? styles.block_text_active : null}
          style={{
            position: 'absolute',
            top: y + 50 * Math.sin(i * angleStep + Math.PI * 3 / 2),
            left: x + 40 * Math.cos(i * angleStep + Math.PI * 3 / 2) + checkXOffset(i * angleStep),
            transform: 'translate(-50%, -50%)',
            maxWidth: '110px',
            minWidth: '90px',
            // minHeight: '60px',
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
          <b className={activeState ? styles.text_active: null}>
          {elements[i].name}
          </b>
        </div>

      </div>
    );

  }
  return (
    <>
      <div
        style={{
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          width: circleRadius * 2,
          height: circleRadius * 2,
          borderRadius: '50%',
          border: '2.35px solid #ADADAD',
          zIndex: '100'
        }}
      >
        {circleElements}
      </div>
    </>
  );
}

export default observer(CircleComponent);