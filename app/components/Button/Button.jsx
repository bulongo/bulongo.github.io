"use client";
import { useState } from "react";
import styles from "./Button.module.css";
import { useReducer } from "react";
import { darkModeReducer, darkModeState } from "@/app/reducer/reducer";
// use useReducer for this app because he it has too much going on

const Button = ({ setDarkModeState }) => {
  const [state, dispatch] = useReducer(darkModeReducer, darkModeState);
  const [darkModeChosen, setDarkModeChosen] = useState(false);

  const changeLightAndDarkMode = () => {
    if (state.darkMode === "off") {
      dispatch({ type: "turnOnDarkMode" });
      setDarkModeState(true);
      // setDarkModeChosen(true)
    } else if (state.darkMode === "on") {
      dispatch({ type: "turnOffDarkMode" });
      setDarkModeState(false);
      // setDarkModeChosen(false)
    }
  };

  return (
    <div
      className={styles.button}
      onClick={() => changeLightAndDarkMode()}
    >
      {state.darkMode === "on"
        ? <div className={styles.dark}>Dark</div>
        : <div className={styles.light}>Light</div>}
    </div>
  );
};

export default Button;
