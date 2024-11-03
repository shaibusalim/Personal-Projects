
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import FoodList from "./Component/FoodList";
import FoodDiary from "./Component/FoodDiary";
import Navbar from "./Component/NavBar.jsx";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/diary" element={<FoodDiary />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
