'use client'
import Link from "next/link"
import { useReducer } from "react"
import { darkModeState,darkModeReducer } from "@/app/context/context"

const Navbar = () => {
  const [state,dispatch] = useReducer(darkModeReducer,darkModeState)
  console.log(state)
  return (
    <div>
      <h1>BuLo</h1>
      <ul>
        <li><Link href='/pages/signup'>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
