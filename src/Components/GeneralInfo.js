import React from "react";
import Input from "./Input";
import { useRef, useEffect } from "react"

export default function GeneralInfo({ InfoProp }) {

  const inputFunc = useRef(null)

  useEffect(() => {
    InfoProp.current = () => inputFunc.current()
  }, [])



  return (
    <div>
      <Input name={"Firstname:"} InfoPropInput={inputFunc}/>
      <Input name={"Lastname:"} InfoPropInput={inputFunc}/>
    </div>
  );
}
