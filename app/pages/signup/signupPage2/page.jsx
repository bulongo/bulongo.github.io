"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
import { darkModeState } from "@/app/reducer/reducer";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <div>
       <div>background-top</div> 
      <section>
          <h1>Enter your phone number</h1>
          <input type="text" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
