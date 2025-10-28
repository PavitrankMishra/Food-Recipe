import React from "react";
import "./RecipeHeadingLeft.css";
import Logo from "../../Assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { handleInputField } from "../../app/slice/inputValue";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  function handleMicClick() {
    const getVoice = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/speak");
        if (!res.ok) {
          throw new Error("Response was not ok");
        }

        const data = await res.json();
        console.log("The response is: ", res);
        console.log("The data is: ", data);
      } catch (err) {
        console.log("The error is: ", err);
      }
    };

    getVoice();
  }

  return (
    <>
      <img src={Logo} alt="Website Logo" />
      <section className="inputMicContainer">
        <input
          type="text"
          placeholder="Search over 1,00,000 recipes"
          className="inputField"
          value={inputValue}
          onChange={updateInputValue}
          id="inputFieldId"
        />
        <FontAwesomeIcon
          icon={faMicrophone}
          className="microphone"
          size="xl"
          onClick={handleMicClick}
        />
      </section>
    </>
  );
};

export default RecipeHeadingLeft;
