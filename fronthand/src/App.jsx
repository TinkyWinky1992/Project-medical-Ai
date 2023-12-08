import React from "react";
import MenuAppBar from "./Components/AppBar";
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <MenuAppBar/>
      <Outlet/>
    </div>

  );
}

export default App;
