import React from "react";
import "./App.css";
import Todolist from "./Todolist";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      <MyWeather weather="맑음">일기예보</MyWeather>
      <Clock></Clock>
    </div>
  );
}

export default App;
