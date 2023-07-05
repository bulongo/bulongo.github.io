import { useReducer } from "react";


export const darkModeState = {
  darkMode:'off' ,
}

const [state,dispatch] = useReducer(reducer,darkModeState)
