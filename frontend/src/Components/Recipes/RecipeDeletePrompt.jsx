import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./RecipeDeletePrompt.css";
import { useDispatch } from "react-redux";
import { fetchAllRecipe } from "../../app/slice/allRecipes";

const RecipeDeletePrompt = ({
  singleRecipes,
  isTrashClicked,
  setTrashClicked,
  handleRecipeDelete,
  inputValue,
}) => {
  const dispatch = useDispatch();
  const handleClosePrompt = () => {
    setTrashClicked(false);
  };

  return (
    <>
      <section className="recipeDeleteContainer">
        <section className="recipeDeleteInner">
          <section className="crossIconContainer">
            <FontAwesomeIcon
              icon={faXmark}
              className="crossIcon"
              onClick={handleClosePrompt}
            />
          </section>
          <section className="messageContainer">
            <p>
              Do you really want to delete this recipe? This action is
              irreversible.
            </p>
          </section>
          <section className="confirmActionContainer">
            <button onClick={() => handleRecipeDelete(singleRecipes.id)}>
              YES
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default RecipeDeletePrompt;
