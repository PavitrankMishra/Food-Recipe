import React from "react";
import "./RecipeDeleteFailMessage.css";

const RecipeDeleteFailMessage = () => {
  return (
    <>
      <section className="recipeDeleteFailMessageContainer">
        <p>Oops! You can only delete your own recipes.</p>
      </section>
    </>
  );
};

export default RecipeDeleteFailMessage;
