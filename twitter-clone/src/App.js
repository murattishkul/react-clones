import React from "react";
import SideBar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      {
        //BEM
      }
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
