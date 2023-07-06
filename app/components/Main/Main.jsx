'use client'
import Navbar from "../Navbar/Navbar"
import { useContext,useReducer } from 'react'
import { modeContext } from "@/app/context/context"
import { darkModeState,darkModeReducer } from "@/app/reducer/reducer"

//ignore main for a while

const Main = () => {
  const darkModeContext = useContext(modeContext)
  const [state,dispatch] = useReducer(darkModeReducer,darkModeState)
  return (
      <Navbar />
  )
}

export default Main
