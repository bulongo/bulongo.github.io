'use client'
import { useState } from "react";
import styles from "./Button.module.css";
// use useReducer for this app because he it has too much going on

const Button = () => {
  const [darkModeChosen,setDarkModeChosen] = useState(false)

  const changeLightAndDarkMode = () => {
    if(darkModeChosen){
      setDarkModeChosen(false)
    }else {
      setDarkModeChosen(true)
    }
  }

  return (
    <div className={styles.button} onClick={() => changeLightAndDarkMode()}>
      {darkModeChosen ? <div className={styles.dark}>Dark</div> : <div className={styles.light}>Light</div>}
    </div>
  );
};

export default Button;
