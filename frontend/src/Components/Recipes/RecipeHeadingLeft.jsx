import React, { useEffect, useRef, useState } from "react";
import "./RecipeHeadingLeft.css";
import Logo from "../../Assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { handleInputField } from "../../app/slice/inputValue";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setMicListen } from "../../app/slice/allRecipes";

const RecipeHeadingLeft = ({ speechListen, setSpeechListen }) => {
  /**
   * Selects the current input value from the Redux store
   */
  const inputValue = useSelector((state) => state?.inputRecipe?.data);

  const [voiceInput, setVoiceInput] = useState("");

  /**
   * Gets the disptach function to send actions to the Redux store
   */
  const dispatch = useDispatch();
  /**
   * Function that updates the value of input when we change
   */

  useEffect(() => {
    dispatch(handleInputField(voiceInput));
  }, [voiceInput]);

  function updateInputValue(e) {
    dispatch(handleInputField(e.target.value));
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorder.onstop = async () => {
        // Stop the mic
        stream.getTracks().forEach((track) => track.stop());

        // Combine recorded data into a blob
        const blob = new Blob(chunks, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("audio", blob, "speech.webm");

        try {
          const res = await fetch(
            "https://food-recipe-19fn.onrender.com/speak",
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await res.json();
          console.log("Recognized text:", data.text);
          setVoiceInput(data.text || "");
        } catch (err) {
          console.error("Error sending audio:", err);
        }
      };

      // Start recording for 5 seconds (you can adjust)
      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const handleMicClick = () => {
    startRecording();
    dispatch(setMicListen(true));
  };

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
