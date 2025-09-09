import React from "react";
import "./NewRecipeCrossContainer.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewRecipeCrossContainer = ({handleAddRecipeVisible}) => {
  return <>
    <section className="crossContainer">
          <FontAwesomeIcon
            icon={faXmark}
            className="crossIcon"
            onClick={handleAddRecipeVisible}
          />
        </section>
  </>
};

export default NewRecipeCrossContainer;
