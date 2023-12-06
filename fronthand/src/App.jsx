import "./App.css";
import React, { useRef} from "react";
import * as ReactDOM from "react-dom/client";
import {
  Link,
  RouterProvider,
} from "react-router-dom";
import RenderChatbox from "./Pages/ChatBoxWithAi";
import RenderLoginOrRegister from "./Pages/login-register";
import Menu from "./Pages/Menu";
import router from "./routing/router";
import MenuAppBar from "./Components/AppBar";
function App() {
  const reff = useRef();
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  );
  return (
    <div className="App">
      <MenuAppBar ref={reff}/>
    </div>
  );
}

export default App;
