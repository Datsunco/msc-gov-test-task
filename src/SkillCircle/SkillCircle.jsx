import React, { useContext, useEffect } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import styles from './SkillCircle.module.scss'

const SkillCircleComponent = ({ circleRadius }) => {
    const { store } = useContext(Context)
    const elements = store.skillsDataArray
    const numberOfElements = elements.length
    const circleElements = [];

    useEffect(() => {

    }, [store])


    const correctionXOffset = (angle) => {
        if (angle < Math.PI && angle > 0) return +40
        else if (angle > Math.PI && angle < Math.PI * 2) return -40
        else return 0
    }

    for (let i = 0; i < numberOfElements; i++) {

        const angleStep = (2 * Math.PI) / numberOfElements;

        const x = circleRadius + circleRadius * Math.cos(i * angleStep + Math.PI * 3 / 2);
        const y = circleRadius + circleRadius * Math.sin(i * angleStep + Math.PI * 3 / 2);
        const activeState = store.isActiveSkill(elements[i].name)

        circleElements.push(
            <>
                <div
                    key={i}
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
                        zIndex: '1000'
                    }}
                >
                </div>
                <div
                    className={activeState ? styles.text_circle_active : styles.text_circle}
                    style={{
                        position: 'absolute',
                        top: y + 30 * Math.sin(i * angleStep + Math.PI * 3 / 2),
                        left: x + 30 * Math.cos(i * angleStep + Math.PI * 3 / 2) + correctionXOffset(i * angleStep),
                        transform: 'translate(-50%, -50%)',
                        width: '90px',
                        minHeight: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // color: '#3A3A3A',
                        fontWeight: '700',
                        fontSize: '12px',
                        lineHeight: '13.28px',
                        verticalAlign: 'middle',
                    }}
                >
                    {elements[i].name}
                </div>
            </>
        );
    }
    return (
        <div
            style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                width: circleRadius * 2,
                height: circleRadius * 2,
                borderRadius: '50%',
                border: '2.35px solid #ADADAD',
            }}
        >
            {circleElements}
        </div>
    );
}

export default observer(SkillCircleComponent);