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
    ingredients: [
      {
        quantity: 1,
        unit: "KG",
        description: "Wheat",
      },
      {
        quantity: 2,
        unit: "",
        description: "Carrot",
      },
    ],
  });

  const demoUpload = async () => {
    console.log("The uploaded data is: ", formData);
  };

  const [numberOfComma, setNumberOfComma] = useState(0);
  const [ingredient, setIngredient] = useState([]);
  const handleChange = (index, value) => {
    const commaCount = (value.match(/,/g) || []).length;

    if (commaCount == 0) {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    if (commaCount == 1) {
      const parts = value.split(",");
      const unit = parts[1];

      if (!/^[a-zA-Z\s]*$/.test(unit)) {
        return;
      }
    }

    if (commaCount > 2) {
      return;
    }

    const updated = [...ingredient];
    updated[index] = value;
    setIngredient(updated);
    console.log("Updated: ", updated);
  };
  console.log(formData);

  const uploadRecipe = async () => {
    const ingredientObject = ingredient
      .map((ing) => {
        const parts = ing.split(",").map((el) => el.trim());
        if (parts.length !== 3) {
          console.log("Length must be 3");
          return null; 
        }

        const [quantity, unit, description] = parts;

        return {
          quantity: quantity ? +quantity : undefined, 
          unit,
          description,
        };
      })
      .filter((ing) => ing && ing.description);

    const newFormData = {
      title: formData.title,
      source_url: formData.source_url,
      image_url: formData.image_url,
      publisher: formData.publisher,
      cooking_time: +formData.cooking_time,
      servings: +formData.servings,
      ingredients: ingredientObject,
    };

    console.log("Final payload:", newFormData);

    try {
      const res = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes?key=d348a0b0-c7b8-4539-b6a6-80f883fdef51",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFormData),
        }
      );

      const data = await res.json();
      console.log("Response:", res);
      console.log("Data:", data);
    } catch (error) {
      console.log("Error uploading recipe: ", error);
    }
  };

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
                  type="number"
                  value={formData.cooking_time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cooking_time: parseInt(e.target.value),
                    })
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
                  type="number"
                  value={formData.servings}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      servings: parseInt(e.target.value),
                    })
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
                <input
                  type="text"
                  // value={
                  //   formData.ingredients[0]
                  //     ? `${formData.ingredients[0].quantity || ""} ${
                  //         formData.ingredients[0].unit
                  //       } ${formData.ingredients[0].description || ""}`
                  //     : ""
                  // }
                  value={ingredient[0] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(0, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 2</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  // value={
                  //   formData.ingredients[1]
                  //     ? `${formData.ingredients[1].quantity || ""}, ${
                  //         formData.ingredients[1].unit
                  //       }, ${formData.ingredients[1].description || ""}`
                  //     : ""
                  // }
                  value={ingredient[1] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(1, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 3</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value=""
                  placeholder="Format: 'Quantity,Unit,Description'"
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 4</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value=""
                  placeholder="Format: 'Quantity,Unit,Description'"
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 5</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value=""
                  placeholder="Format: 'Quantity,Unit,Description'"
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 6</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value=""
                  placeholder="Format: 'Quantity,Unit,Description"
                />
              </section>
            </section>
          </section>
        </section>
        <section className="footerContainer">
          <button onClick={() => uploadRecipe()}>UPLOAD</button>
        </section>
        {/* <p>{JSON.stringify(formData)}</p> */}
      </section>
    </section>
  );
};

export default NewRecipe;
