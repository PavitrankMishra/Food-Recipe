import React from "react";
import "./RecipeMiddleLeftButton.css";

const RecipeMiddleLeftButton = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  function handlePageDecrement() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handlePageIncrement() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      <section className="recipeButtonContainer">
        <button
          onClick={handlePageDecrement}
          className={currentPage === 1 ? "disabled" : ""}
        >
          PREV
        </button>
        <button
          onClick={handlePageIncrement}
          className={currentPage === totalPages ? "disabled" : ""}
        >
          NEXT
        </button>
      </section>
    </>
  );
};

export default RecipeMiddleLeftButton;
