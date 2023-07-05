'use client'
import { useState } from 'react'
import styles from './Sunmoon.module.css'

export const Sunmoon = () => {
  const [dayTime,setDayTime] = useState(true)
  return (
    <div className={styles.sunmoon}>
      {dayTime ? 
        <div className={styles.sun}></div> :
        <div className={styles['sun' + 'moon']}></div>}
    </div>
  )
}
