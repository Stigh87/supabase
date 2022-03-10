import React from "react";
import { useState } from "react";
import "./Components.css";
import { supabase } from "../Utils/Supabase";
import { useEffect} from "react"

export default function Input(props) {
  const [input, setInput] = useState(''); // '' is the initial state value

  useEffect(() => {
    props.InfoPropInput.current = PassValues
  }, [])

  function PassValues() {
    console.log("value", )
    console.log("name", props.name )
  }


  return (
    <div className="InputContainer">
      <label>{props.fieldname}</label>
      <input name={props.name} value={input} onInput={(e) => setInput(e.target.value)} />
    </div>
  );
}


/*

*/