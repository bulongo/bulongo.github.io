'use client'
import Link from "next/link"
import styles from './Navbar.module.css'
import { useReducer, useState } from "react"
import { darkModeState,darkModeReducer } from "@/app/context/context"

// if the person is not signed in we just show the name of the app
// and we also show a chimi sign in / sign up button on the right

const Navbar = () => {
  const [state,dispatch] = useReducer(darkModeReducer,darkModeState)
  const session = false

  return (
    <div className={styles.navbar}>
      <h1>Wha-todo</h1>
      {session ? 
     (<h1>bulongo</h1>) :
      (<Link href='/pages/signup'>Setup</Link>)
      }
    </div>
  )
}

export default Navbar
