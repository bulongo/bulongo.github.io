'use client'
import React, { useEffect,useRef } from 'react'
import styles from './Sunmoon.module.css'
import { useReducer } from 'react'
import { darkModeReducer,darkModeState } from '@/app/reducer/reducer'

const Sunmoon = ({darkModeState}) => {

  return (
    <div className={styles.sunmoon}>
        {darkModeState ? <div className={styles.moon}></div> : <div className={styles.sun}></div>}      
    </div>
  )
}

export default Sunmoon
