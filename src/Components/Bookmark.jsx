import React from "react";
import "./Bookmark.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleRecipe } from "../app/slice/singleRecipe";

const Bookmark = ({ isVisible, setIsVisible }) => {
  const handleCross = () => {
    setIsVisible((prev) => !prev);
  };

  const dispatch = useDispatch();
  const bookmarkedRecipes = useSelector(
    (state) => state?.bookmarkedRecipes || []
  );

  function handleRecipeCall(id) {
    dispatch(fetchSingleRecipe(id));
  }

  return (
    <>
      <section className="bookmarksSection">
        <section className="bookmarkCrossContainer">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleCross}
            className="crossIcon"
          />
        </section>
        <section className="bookmarkrecipeContainer">
          {bookmarkedRecipes.data.length > 0 ? (
            bookmarkedRecipes.data.map((item) => (
              <>
                <section
                  key={item.id}
                  className="content"
                  onClick={() => handleRecipeCall(item.id)}
                >
                  <section className="imageContainer">
                    <img src={item.image_url} alt={item.title} />
                  </section>
                  <section className="descriptionContainer">
                    <p className="title">{item.title}</p>
                    <p className="description">{item.publisher}</p>
                  </section>
                  <section className="userIcon">
                    <FontAwesomeIcon icon={faUser} />
                  </section>
                </section>
              </>
            ))
          ) : (
            <section className="emptyContainer">
              <p>No bookmarks yet</p>
            </section>
          )}
        </section>
      </section>
    </>
  );
};
export default Bookmark;
