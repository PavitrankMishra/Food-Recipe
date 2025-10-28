import React, { useRef, useState } from "react";
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

  const [inputedValue, setInputedValue] = useState("");

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

  const handleMicClick = () => {
    const sendRequest = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/speak");

        if (!res.ok) {
          throw new Error("Response was not ok");
        }

        const data = await res.json();
        console.log(data);
        setInputedValue(data.text);
        dispatch(handleInputField(data.text));
      } catch (err) {
        console.log("The error is: ", err);
      }
    };

    sendRequest();
  };

  return (
    <>
      <img src={Logo} alt="Website Logo" />
      <section className="inputMicContainer">
        <input
          type="text"
          placeholder="Search over 1,00,000 recipes"
          className="inputField"
          value={inputedValue}
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

// const mediaStream = useRef(null);
// const mediaRecorder = useRef(null);
// const chunks = useRef([]);
// const [recordedURL, setRecordedURL] = useState("");

// const startRecording = async () => {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//     });
//     mediaStream.current = stream;

//     mediaRecorder.current = new MediaRecorder(stream);

//     mediaRecorder.current.ondataavailable = (e) => {
//       if (e.data.size > 0) {
//         chunks.current.push(e.data);
//       }
//     };

//     mediaRecorder.current.onstop = async () => {
//       const recordedBlob = new Blob(chunks.current, { type: "audio/mp3" });
//       const url = URL.createObjectURL(recordedBlob);
//       setRecordedURL(url);

//       console.log("🎧 Recorded Blob:", recordedBlob);
//       console.log("🎵 Recorded Audio URL:", url);

//       // 🎯 Step 1: Prepare form data to send Blob
//       const formData = new FormData();
//       formData.append("audio", recordedBlob, "recording.mp3");

//       try {
//         // 🎯 Step 2: Send to Flask backend
//         const response = await fetch("http://127.0.0.1:5000/upload_audio", {
//           method: "POST",
//           body: formData,
//         });

//         const data = await response.json();
//         console.log("✅ Server response:", data);
//       } catch (err) {
//         console.error("❌ Error uploading audio:", err);
//       }

//       // Stop mic
//       mediaStream.current.getTracks().forEach((track) => track.stop());
//       chunks.current = [];
//     };

//     // ⚠️ You missed parentheses here — this starts the recording
//     mediaRecorder.current.start();
//     console.log("Recording started...");

//     // Stop automatically after 5 seconds
//     setTimeout(() => {
//       mediaRecorder.current.stop();
//       console.log("Recording stopped.");
//     }, 5000);
//   } catch (error) {
//     console.error("Error accessing microphone:", error);
//   }
// };

// startRecording();

// const getMessage = async () => {
//   try {
//     const res = await fetch("http://127.0.0.1:5000/listen");

//     if (!res.ok) {
//       throw new Error("Response was not ok");
//     }

//     const data = await res.json();
//     console.log(data);
//     setInputedValue(data);
//   } catch (err) {
//     console.log("The error is: ", err);
//   }
// };
// setTimeout(() => {
//   getMessage();
// }, 2000);
