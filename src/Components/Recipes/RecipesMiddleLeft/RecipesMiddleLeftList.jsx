import React from "react";
import "./RecipesMiddleLeftList.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { fetchSingleRecipe } from "../../../app/slice/singleRecipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipesMiddleLeftList = ({ item }) => {
  const disptach = useDispatch();
  const handleSingleRecipe = (id) => {
    disptach(fetchSingleRecipe(id));
  };
  return (
    <>
      <section
        className="recipesList"
        key={item.id}
        onClick={() => handleSingleRecipe(item.id)}
      >
        <section className="recipesLeft">
          <section className="imageContainer">
            <img src={item.image_url} alt={item.recipe_title} />
          </section>
          <section className="nameContainer">
            <p className="itemTitle">{item.title}</p>
            <p className="itemPublisher">{item.publisher}</p>
          </section>
        </section>
        <section className="userContainer">
          <FontAwesomeIcon icon={faUser} />
        </section>
      </section>
    </>
  );
};

export default RecipesMiddleLeftList;
