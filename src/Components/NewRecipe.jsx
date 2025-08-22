import React from "react";
import "./NewRecipe.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewRecipe = ({ isAddRecipeVisible, setIsAddRecipeVisible }) => {
  function handleRecipeUpload() {
    console.log("Recipe Upload clicked");
    setIsAddRecipeVisible((prev) => !prev);
  }

  function handleAddRecipeVisible() {
    setIsAddRecipeVisible((prev) => !prev);
  }
  return (
    <section className="newRecipeRequestContainer">
      <section className="newRequestInner">
        <section className="crossContainer">
          <FontAwesomeIcon
            icon={faXmark}
            className="crossIcon"
            onClick={handleAddRecipeVisible}
          />
        </section>
        <section className="middleContainer">
          <section className="middleLeft">
            <section className="head">
              <h1>RECIPE DATA</h1>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Title</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>URL</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Image URL</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Publisher</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Prep </span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Title</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
          </section>
          <section className="middleRight">
            <section className="head">
              <h1>INGREDIENTS</h1>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 1</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 2</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 3</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 4</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 5</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 6</span>
              </section>
              <section className="inputContainer">
                <input type="text" value="" />
              </section>
            </section>
          </section>
        </section>
        <section className="footerContainer">
          <button onClick={handleRecipeUpload}>UPLOAD</button>
        </section>
      </section>
    </section>
  );
};

export default NewRecipe;
