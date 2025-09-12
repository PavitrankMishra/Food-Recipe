import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NewIngredientInputButton.css";

const NewIngredientInputButton = ({ inputFields, setInputFields }) => {
  return (
    <>
      <section className="newIngredientButtonContainer">
        <button onClick={() => setInputFields([...inputFields, inputFields.length + 1])}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Ingredient</p>
        </button>
      </section>
    </>
  );
};

export default NewIngredientInputButton;
