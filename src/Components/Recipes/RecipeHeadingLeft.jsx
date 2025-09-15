import React from "react";
import "./RecipeHeadingLeft.css";
import Logo from "../../Assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { handleInputField } from "../../app/slice/inputValue";

const RecipeHeadingLeft = () => {
  /**
   * Selects the current input value from the Redux store
   */
  const inputValue = useSelector((state) => state?.inputRecipe?.data);

  /**
   * Gets the disptach function to send actions to the Redux store
   */
  const dispatch = useDispatch();
  /**
   * Function that updates the value of input when we change
   */
  function updateInputValue(e) {
    dispatch(handleInputField(e.target.value));
  }

  return (
    <>
      <img src={Logo} alt="Website Logo" />
      <input
        type="text"
        placeholder="Search over 1,00,000 recipes"
        className="inputField"
        value={inputValue}
        onChange={updateInputValue}
        id="inputFieldId"
      />
    </>
  );
};

export default RecipeHeadingLeft;
