"use client";
import { useContext, useState,useRef, useReducer } from "react";
import Link from "next/link"; 
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import Sunmoon from "@/app/components/Sunmoon/Sunmoon";
import { modeContext } from "@/app/context/context";

const signup = () => {
  const darkModeContext = useContext(modeContext);
  const [darkModeState, setDarkModeState] = useState(false);

  const skip = () => {
    console.log("skip this step");
  };

  const nextBtn = () => {
    console.log("We are going to the next page.");
  };

  return (
    <div className={darkModeState ? styles.darkModeOn : styles.darkModeOff}>
      <Sunmoon darkModeState={darkModeState} />
      <div className={styles.text}>
        <h1>Choose your style</h1>
        <p>Are you loud and bright or chilled and dark?</p>
      </div>
      <Button setDarkModeState={setDarkModeState} />
      <div className={styles.loader}>
        <span className={styles.one}></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.footer}>
        <p
          onClick={() => skip()}
        >
          Skip
        </p>
        <p className={styles.modal}>next</p>
        <Link
          className={darkModeState ? styles.darkBtn : styles.btn}
          onClick={() => nextBtn()}
          href='/pages/signup/signupPage2/'
        >
          &#8594;
        </Link>
      </div>
    </div>
  );
};

export default signup;
