import React from "react";
import "./NewRecipeMiddle.css";

const NewRecipeMiddle = ({
  recipeFormOpen,
  formData,
  setFormData,
  handleChange,
  ingredient,
}) => {
  return (
    <>
      {recipeFormOpen && (
        <>
          <section className="middleLeft">
            <section className="head">
              <h1>RECIPE DATA</h1>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Title</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>URL</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.source_url}
                  onChange={(e) =>
                    setFormData({ ...formData, source_url: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Image URL</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Publisher</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={formData.publisher}
                  onChange={(e) =>
                    setFormData({ ...formData, publisher: e.target.value })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Prep Time</span>
              </section>
              <section className="inputContainer">
                <input
                  type="number"
                  value={formData.cooking_time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cooking_time: parseInt(e.target.value),
                    })
                  }
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Servings</span>
              </section>
              <section className="inputContainer">
                <input
                  type="number"
                  value={formData.servings}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      servings: parseInt(e.target.value),
                    })
                  }
                />
              </section>
            </section>
          </section>
          <section className="middleRight">
            <section className="head">
              <h1>INGREDIENTS</h1>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 1</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={ingredient[0] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(0, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 2</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={ingredient[1] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(1, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 3</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={ingredient[2] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(2, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 4</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={ingredient[3] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(3, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 5</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={ingredient[4] || ""}
                  placeholder="Format: 'Quantity,Unit,Description'"
                  onChange={(e) => handleChange(4, e.target.value)}
                />
              </section>
            </section>
            <section className="dataContainer">
              <section className="textContainer">
                <span>Ingredient 6</span>
              </section>
              <section className="inputContainer">
                <input
                  type="text"
                  value={ingredient[5] || ""}
                  placeholder="Format: 'Quantity,Unit,Description"
                  onChange={(e) => handleChange(5, e.target.value)}
                />
              </section>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default NewRecipeMiddle;
