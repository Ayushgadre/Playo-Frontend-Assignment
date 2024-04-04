import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import DashboardTableHead from "./components/DashboardTableHead";
import "./App.css";

const App = () => {
  return (
    <div id="body-pd" className="body-text">
      <Header />
      <Sidebar />
      <div>
        <DashboardTableHead />
      </div>
    </div>
  );
};

export default App;
