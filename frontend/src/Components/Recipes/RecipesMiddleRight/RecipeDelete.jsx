import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./RecipeDelete.css";
import { faTrashCan as faTrashCanRegular } from "@fortawesome/free-regular-svg-icons";

const RecipeDelete = ({
  singleRecipes,
  handleTrashClicked,
  isTrashClicked,
}) => {
  return (
    <>
      <section className="deleteRecipeContainer">
        <button>
          <FontAwesomeIcon
            icon={faTrashCanRegular}
            className="trashIconRegular"
            onClick={handleTrashClicked}
          />
        </button>
      </section>
    </>
  );
};

export default RecipeDelete;
