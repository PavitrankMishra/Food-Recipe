import React from "react";
import "./NewRecipeLoader.css";
import Loader from "../Loader";

const NewRecipeLoader = ({ loading }) => {
  return (
    <>
      {loading && (
        <section className="loadingContainer">
          <Loader />
        </section>
      )}
    </>
  );
};

export default NewRecipeLoader;
