import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderChatbox from "./Pages/ChatBoxWithAi";
import RenderLoginOrRegister from "./Pages/login-register";
import Menu from "./Pages/Menu";
import MenuAppBar from "./Components/AppBar";
import router from "./routing/router";

function App() {
  const reff = useRef();

  return (
    <Router>
      <div className="App">
        <MenuAppBar ref={reff} />

      </div>
    </Router>
  );
}

export default App;
