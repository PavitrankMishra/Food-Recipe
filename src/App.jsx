import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Recipes from "./Components/Recipes";
import NotFound from "./Components/NotFound";
import { useState, useEffect } from "react";
import AddRecipe from "./Components/AddRecipe";
import Login from "./Components/Login";

const App = () => {
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  // const [data2, setData2] = useState([]);
  const API_KEY = "d348a0b0-c7b8-4539-b6a6-80f883fdef51";

  const [inputV, setInputV] = useState("Pizza");
  const [inputID, setInputID] = useState("664c8f193e7aa067e94e8297");

  // const fetchData = async function () {
  //   try {
  //     const res = await fetch(
  //       "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=d348a0b0-c7b8-4539-b6a6-80f883fdef51"
  //     );
  //     if (!res.ok) {
  //       throw new Error("Response was not ok");
  //     }
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error :" + error);
  //   }
  // };

  // fetchData();

  useEffect(() => {
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputV}&key=d348a0b0-c7b8-4539-b6a6-80f883fdef51`
    )
      .then((res) => res.json())
      .then((resData) => {
        console.log("API Response Data:", resData);
        setData(resData?.data?.recipes || []);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [inputV]);

  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${inputID}`)
      .then((res) => res.json())
      .then((resData) => {
        setRecipe(resData.data.recipe);
        // console.log(resData.data.recipe.length);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, [inputID]);

  console.log(recipe);

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
