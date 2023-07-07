'use client'
import { useContext, useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import Button from '@/app/components/Button/Button'
import Sunmoon from '@/app/components/Sunmoon/Sunmoon'
import { modeContext } from '@/app/context/context'

const signup = () => {
  const darkModeContext = useContext(modeContext)
  const [darkModeState,setDarkModeState] = useState(false)

  const skip = () => {
    console.log('skip this step')
  }

  const nextBtn = () => {
    console.log('We are going to the next page.')
  }
  
  return (
    <div className={darkModeState ? styles.darkModeOn : styles.darkModeOff}>
      <Sunmoon darkModeState={darkModeState}/>
      <div className={styles.text}>
        <h1>Choose your style</h1>
        <p>Are you loud and bright or chilled and dark?</p>
      </div>
      <Button setDarkModeState={setDarkModeState}/>
      <span className={styles.loader}>oOOo</span>
      <div className={styles.footer}>
        <p onClick={() => skip()}>Skip</p>
        <Link className={styles.modal} href='/signup1'>next</Link>
        <div className={darkModeState ? styles.darkBtn : styles.btn} onClick={() => nextBtn()}>&#8594;</div>
      </div>
    </div>
  )
}

export default signup