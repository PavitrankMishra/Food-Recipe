import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../CustomLoader/Loader";
import "./RecipesMiddle.css";
import RecipeDelete from "./RecipesMiddleRight/RecipeDelete";
import RecipeMiddleLeftButton from "./RecipesMiddleLeft/RecipeMiddleLeftButton";
import RecipesMiddleLeftList from "./RecipesMiddleLeft/RecipesMiddleLeftList";
import RecipesMiddleLeftFeatures from "./RecipesMiddleLeft/RecipesMiddleLeftFeatures";
import RecipeMiddleRightInformation from "./RecipesMiddleRight/RecipeMiddleRightInformation";
import { useSelector } from "react-redux";

const RecipesMiddle = ({
  loading,
  currentData,
  currentPage,
  setCurrentPage,
  totalPages,
  singleRecipes,
  handleBookmark,
  setIsAddRecipeVisible,
  setTrashClicked,
}) => {
  const searched = useSelector((state) => state?.allRecipe?.isSearched);
  return (
    <>
      <section className="middleLeft">
        {loading ? (
          <section className="loadingContainer">
            <Loader />
          </section>
        ) : currentData && currentData.length > 0 ? (
          <>
            {currentData.map((item) => (
              <RecipesMiddleLeftList item={item} />
            ))}
            <RecipeMiddleLeftButton
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </>
        ) : searched === false ? (
          <RecipesMiddleLeftFeatures />
        ) : (
          <section className="box1">
            <section className="right">
              <p>No results found for your search.</p>
            </section>
          </section>
        )}
      </section>

      <section className="middleRight" key={singleRecipes?.id}>
        <RecipeMiddleRightInformation
          handleBookmark={handleBookmark}
          setIsAddRecipeVisible={setIsAddRecipeVisible}
          setTrashClicked={setTrashClicked}
        />
      </section>
    </>
  );
};

export default RecipesMiddle;
