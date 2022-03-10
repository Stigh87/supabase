import React from "react";
import Input from "./Input";
import { forwardRef, useRef, useImperativeHandle } from "react"

export default function LoginInfo() {
  const InputComponent = useRef()
  const childCompRef = useRef()

  function submit() {
    childCompRef.current.submitHandler()
  }
  
  return (
    <div>
      <Input name="Username:" ref={InputComponent}/>
      <Input name="Email:" ref={InputComponent}/>
      <Input name="Password:" ref={InputComponent}/>
      <Input name="Confime Password:"ref={InputComponent}/>
    </div>
  );
}
