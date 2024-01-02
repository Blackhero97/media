import React, { useState } from "react";
import "./App.css";
import "./media.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Primary/Home";
import Movies from "./Pages/Primary/Movies";
import TvShows from "./Pages/Primary/TvShows";
import DetailsPage from "./Pages/Details/DetailsPage";
import TvShowsDetails from "./Pages/Details/TvShowsDetails";
import AddNewItem from "./Pages/Primary/AddNewItem";
import SuggestMe from "./Pages/Primary/SuggestMe";
import NotFound from "./Pages/Primary/NotFound";
function App() {
  const [value, setValue] = useState([]);
  const [shart, setShart] = useState(false);
  const searchbox = (
    <div className="input-boxes">
      <div className="input-box">
        <i class="bx bx-search-alt"></i>
        <input
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value.toLowerCase()), setShart(!shart);
          }}
          placeholder="Filmlar yoki Tvshowlar nomini kiriting "
        />
      </div>
      <p className={shart ? "active-p" : ""}>
        *Iltimos qidiruvni kichik harfda olib boring
      </p>
    </div>
  );
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={<Home search={searchbox} value={value} />}
            />
            <Route
              path="/movie"
              element={<Movies search={searchbox} value={value} />}
            />
            <Route
              path="/tv"
              element={<TvShows search={searchbox} value={value} />}
            />
            <Route path="/movieitem/:id" element={<DetailsPage />} />
            <Route path="/tvitem/:id" element={<TvShowsDetails />} />
            <Route path="/add" element={<AddNewItem />} />
            <Route path="/suggest" element={<SuggestMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
