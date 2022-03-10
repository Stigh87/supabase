import React from "react";
import './Components.css';
import Output from "./Output";

export default function OutputInfo() {
  return (
    <div>
      <div className="Grid">
        <Output firstname="Firstname:" lastname="Lastname:" username="Username:" email="Email:" />
        <Output firstname="hent fra db" lastname="hent fra db" username="hent fra db" email="hent fra db"/>
        <Output firstname="hent fra db" lastname="hent fra db" username="hent fra db" email="hent fra db"/>
        <Output firstname="hent fra db" lastname="hent fra db" username="hent fra db" email="hent fra db"/>
        <Output firstname="hent fra db" lastname="hent fra db" username="hent fra db" email="hent fra db"/>
        <Output firstname="hent fra db" lastname="hent fra db" username="hent fra db" email="hent fra db"/>
        <Output firstname="hent fra db" lastname="hent fra db" username="hent fra db" email="hent fra db"/>
      </div>
    </div>
  );
}
