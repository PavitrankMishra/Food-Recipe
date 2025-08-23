import React, { useState } from "react";
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

  const [formData, setFormData] = useState({
    title: "",
    source_url: "",
    image_url: "",
    publisher: "",
    servings: "",
    cooking_time: "",
    ingredients: "",
  });

  const demoUpload = async () => {
    console.log("The uploaded data is: ", formData);
  };

  const uploadRecipe = async () => {
    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Recipe uploaded successfully", data);
    } catch (error) {
      console.log("Error uploading recipe: ", error);
    }
  };

  console.log(formData);
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
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>URL</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.source_url}
                  onChange={(e) =>
                    setFormData({ ...formData, source_url: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Image URL</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Publisher</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.publisher}
                  onChange={(e) =>
                    setFormData({ ...formData, publisher: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Prep Time</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.cooking_time}
                  onChange={(e) =>
                    setFormData({ ...formData, cooking_time: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Servings</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.servings}
                  onChange={(e) =>
                    setFormData({ ...formData, servings: e.target.value })
                  }
                />
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
          <button onClick={() => demoUpload()}>UPLOAD</button>
        </section>
      </section>
    </section>
  );
};

export default NewRecipe;
