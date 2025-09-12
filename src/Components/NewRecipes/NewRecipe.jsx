import React, { useEffect, useState } from "react";
import "./NewRecipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Loader from "../Loader";
import NewRecipeLoader from "./NewRecipeLoader";
import NewRecipeConfirmMessage from "./NewRecipeConfirmMessage";
import NewRecipeCrossContainer from "./NewRecipeCrossContainer";
import NewRecipeMiddle from "./NewRecipeMiddle";
import NewRecipeRejectMessage from "./NewRecipeRejectMessage";
import NewIngredientInputButton from "./NewIngredientInputButton";

const NewRecipe = ({ isAddRecipeVisible, setIsAddRecipeVisible }) => {
  const [numberOfComma, setNumberOfComma] = useState(0);
  const [ingredient, setIngredient] = useState([]);
  function handleRecipeUpload() {
    setIsAddRecipeVisible((prev) => !prev);
  }

  function handleAddRecipeVisible() {
    setIsAddRecipeVisible((prev) => !prev);
  }

  const [recipeFormOpen, setRecipeFormOpen] = useState(true);
  const [isRecipeAdded, setIsRecipeAdded] = useState(false);
  const [recipeNotAdded, setRecipeNotAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    source_url: "",
    image_url: "",
    publisher: "",
    servings: "",
    cooking_time: "",
    ingredients: [],
  });

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
  };

  const uploadRecipe = async () => {
    try {
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

      setRecipeFormOpen(false);
      setLoading(true);

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

      if (res.ok) {
        setTimeout(() => {
          setLoading(false);
          setIsRecipeAdded(true);
        }, 2000);

        setTimeout(() => {
          setIsRecipeAdded(false);
          setRecipeFormOpen(true);
          setIsAddRecipeVisible(false);
        }, 4000);
      }

      if (!res.ok) {
        setTimeout(() => {
          setLoading(false);
          setRecipeNotAdded(true);
        }, 2000);

        setTimeout(() => {
          setRecipeNotAdded(false);
          setRecipeFormOpen(true);
        }, 4000);
      }
    } catch (err) {
      setLoading(false);
      setRecipeNotAdded(true);
      setTimeout(() => {
        setRecipeNotAdded(false);
        setRecipeFormOpen(true);
      }, 3000);
    }
  };

  let [inputFields, setInputFields] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <section className="newRecipeRequestContainer">
      <section className="newRequestInner">
        <NewRecipeCrossContainer
          handleAddRecipeVisible={handleAddRecipeVisible}
        />
        <section className="middleContainer">
          <NewRecipeMiddle
            recipeFormOpen={recipeFormOpen}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            ingredient={ingredient}
            inputFields={inputFields}
            setInputFields={setInputFields}
          />

          <NewRecipeLoader loading={loading} />

          <NewRecipeConfirmMessage isRecipeAdded={isRecipeAdded} />

          <NewRecipeRejectMessage recipeNotAdded={recipeNotAdded} />
        </section>
        <NewIngredientInputButton
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
        {recipeFormOpen && (
          <section className="footerContainer">
            <button onClick={() => uploadRecipe()}>UPLOAD</button>
          </section>
        )}
      </section>
    </section>
  );
};

export default NewRecipe;
