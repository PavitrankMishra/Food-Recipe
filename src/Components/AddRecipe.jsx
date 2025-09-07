import React from "react";
import "./AddRecipe.css";
// import "./Bookmark.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddRecipe = ({ isRecipeVisible, setIsRecipeVisible }) => {
  const handleCross = () => {
    setIsRecipeVisible((prev) => !prev);
  };
  return (
    <>
      <section
        className={`addMainContainer ${
          isRecipeVisible ? "visibility" : "novisibility"
        }`}
      >
        <section className="one">
          <section className="addRecipeContainer">
            <section className="addRecipe1">
              <section className="addRecipeLeft">
                <h1>Recipe Data</h1>
                <section className="elements">
                  <p>Title:</p>
                  <input type="text" placeholder="Enter Title" />
                </section>
                <section className="elements">
                  <p>URL:</p>
                  <input type="text" placeholder="Enter SourceURL" />
                </section>
                <section className="elements">
                  <p>ImageURL:</p>
                  <input type="text" placeholder="Enter ImageURL" />
                </section>
                <section className="elements">
                  <p>Publisher:</p>
                  <input type="text" placeholder="Enter Publisher" />
                </section>
                <section className="elements">
                  <p>Prep Time:</p>
                  <input type="text" placeholder="Enter Prep Time" />
                </section>
                <section className="elements">
                  <p>Servings:</p>
                  <input type="text" placeholder="Enter Servings" />
                </section>
              </section>
              <section className="addRecipeRight">
                <h1>Ingredients</h1>
                <section className="elements">
                  <p>Ingredient 1:</p>
                  <input type="text" placeholder="Enter Ingredient 1" />
                </section>
                <section className="elements">
                  <p>Ingredient 2:</p>
                  <input type="text" placeholder="Enter Ingredient 2" />
                </section>
                <section className="elements">
                  <p>Ingredient 3:</p>
                  <input type="text" placeholder="Enter Ingredient 3" />
                </section>
                <section className="elements">
                  <p>Ingredient 4:</p>
                  <input type="text" placeholder="Enter Ingredient 4" />
                </section>
                <section className="elements">
                  <p>Ingredient 5:</p>
                  <input type="text" placeholder="Enter Ingredient 5" />
                </section>
                <section className="elements">
                  <p>Ingredient 6:</p>
                  <input type="text" placeholder="Enter Ingredient 6" />
                </section>
              </section>
            </section>
            <section className="addRecipe2">
              <button>Upload</button>
            </section>
          </section>
          <section className="addRecipeCrossContainer">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleCross}
              className="crossicon"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default AddRecipe;
