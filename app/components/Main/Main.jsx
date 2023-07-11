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
    <div>
      <Navbar />
      <div>
        Hello world, we are happy to welcome you to whatodo
      </div>
    </div>
  )
}

export default Main
