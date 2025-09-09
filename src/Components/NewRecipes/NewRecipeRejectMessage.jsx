import React from "react";
import "./NewRecipeRejectMessage.css";

const NewRecipeRejectMessage = ({ recipeNotAdded }) => {
  return (
    <>
      {recipeNotAdded && (
        <>
          <section className="rejectMessageContainer">
            <p className="message">
              Recipe upload failed check your input and try again.
            </p>
          </section>
        </>
      )}
    </>
  );
};

export default NewRecipeRejectMessage;
