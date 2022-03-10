import React from "react";
import GeneralInfo from "./GeneralInfo";
import LoginInfo from "./LoginInfo";
import "../index.css";
import { useRef } from "react";

export default function Inputform() {

  const InfoFunc = useRef(null);


/*
    <Input name={"Firstname:"} fieldname={"Firstname:"} InfoPropInput={inputFunc}/>
    <Input name={"Lastname:"} fieldname={"Lastname:"} InfoPropInput={inputFunc}/>

    
async function submitHandler(e) {

  console.log("Subhandler kjører")
  e.preventDefault();
  setInput("");
  console.log("Subhandler pakker objektet")
  const { data, error } = await supabase
    .from("table_name")
    .insert({
      Firstname: input,
    });
    console.log("Supadupa base?")
}
*/

  return (
    <div className="InputContainer">
      <GeneralInfo InfoProp={InfoFunc} />
      <button onClick={() => InfoFunc.current()}>Submit</button>
    </div>
  );
}
