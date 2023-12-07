import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MenuAppBar from "./Components/AppBar";
import router from "./routing/router";

function App() {
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

  return (
    <div className="App">
      <MenuAppBar/>
      <BrowserRouter>
   
      </BrowserRouter>
    </div>

  );
}

export default App;
