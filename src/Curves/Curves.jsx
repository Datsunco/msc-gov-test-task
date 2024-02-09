import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import styles from './Curves.module.scss'
import CurrentCurves from './CurrentCurve';

const Curves = ({elements}) => {
    const { store } = useContext(Context)

    useEffect(() => {

    }, [store])
    
    return (
        <div>
            <svg
                style={{
                    transform: 'translate(-50%, -50%)',
                    position: 'absolute',
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    zIndex: '99'
                }}
            >
                {elements.map(proffesion => 
                    <CurrentCurves curves={proffesion.mainSkills} prof={proffesion.name}/>
                )}
            </svg>
        </div>
    );
};


export default observer(Curves);
