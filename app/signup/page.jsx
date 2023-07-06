'use client'
import { useContext, useState } from 'react'
import styles from './page.module.css'
import Button from '../components/Button/Button'
import Sunmoon from '../components/Sunmoon/Sunmoon'
import { modeContext } from '../context/context'

const signup = () => {
  const darkModeContext = useContext(modeContext)
  const [darkModeState,setDarkModeState] = useState(false)

  // const changeDarkMode = () => {
  //   console.log('we are changing the dark mode now')
  // }
  
  return (
    <div className={darkModeState ? styles.darkModeOn : styles.darkModeOff}>
      <Sunmoon darkModeState={darkModeState}/>
      <Button setDarkModeState={setDarkModeState}/>
    </div>
  )
}

export default signup
