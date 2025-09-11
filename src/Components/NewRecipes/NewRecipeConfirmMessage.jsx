import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "./NewRecipeConfirmMessage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewRecipeConfirmMessage = ({ isRecipeAdded }) => {
  return (
    <>
      {isRecipeAdded && (
        <section className="confirmMessageContainer">
          <FontAwesomeIcon icon={faFaceSmileBeam} className="smileIcon" />
          <p className="message">Recipe Added Successfully</p>
        </section>
      )}
    </>
  );
};

export default NewRecipeConfirmMessage;
