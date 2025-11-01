import React from "react";
import "./VoiceListen.css";

const VoiceListen = () => {
  return (
    <>
      <section className="voiceContainer">
        <p>Listening to your voice</p>
        <section className="dotContainer">
          <div id="first"></div>
          <div id="second"></div>
          <div id="third"></div>
        </section>
      </section>
    </>
  );
};

export default VoiceListen;
