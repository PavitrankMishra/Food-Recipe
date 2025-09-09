import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Recipes from "./Components/Recipes/Recipes";
import NotFound from "./Components/NotFound";
import { useState, useEffect } from "react";
import AddRecipe from "./Components/AddRecipe";
import Login from "./Components/Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipe } from "./app/slice/allRecipes";
import { fetchSingleRecipe } from "./app/slice/singleRecipe";

const App = () => {
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const API_KEY = "d348a0b0-c7b8-4539-b6a6-80f883fdef51";

  const [inputV, setInputV] = useState("Pizza");
  const [inputID, setInputID] = useState("664c8f193e7aa067e94e8297");
  const [bookMarkedRecipes, setBookMarkedRecipes] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let allRecipe = useSelector((state) => state.allRecipe);
  let singleRecipe = useSelector((state) => state.singleRecipe);

  function getData(inputVal) {
    console.log("From App" + inputVal);
    setInputV(inputVal);
  }

  function getId(id) {
    console.log("The input Id is: " + id);
    setInputID(id);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/recipes"
          element={
            <Recipes
              data={data}
              recipe={recipe}
              getData={getData}
              getId={getId}
              setRecipe={setRecipe}
              bookMarkedRecipes={bookMarkedRecipes}
              setBookMarkedRecipes={setBookMarkedRecipes}
            />
          }
        />
        <Route path="/about" element={<Home />} />
        <Route path="/bookmarks" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/recipes" element={<AddRecipe />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
