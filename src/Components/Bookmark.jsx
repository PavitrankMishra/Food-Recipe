import React from "react";
import "./Bookmark.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

const Bookmark = ({ isVisible, setIsVisible }) => {
  const handleCross = () => {
    setIsVisible((prev) => !prev);
    console.log(isVisible);
  };

  const dispatch = useDispatch();
  const bookmarkedRecipes = useSelector(
    (state) => state?.bookmarkedRecipes || []
  );

  console.log(bookmarkedRecipes);
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
                <section key={item.id} className="content">
                  <section className="imageContainer">
                    <img src={item.image_url} alt={item.title} />
                  </section>
                  <section className="descriptionContainer">
                    <p>{item.title}</p>
                    <p>{item.publisher}</p>
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
