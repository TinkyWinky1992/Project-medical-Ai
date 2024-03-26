import React,{useEffect, useRef}from "react";
import { useLocation } from 'react-router-dom';
import MenuAppBar from "./Components/AppBar";
import { Outlet} from "react-router-dom";
import { main_pages } from "./routing/routes";
function App() {
  const menubar_ref = useRef()
  let location = useLocation();
  useEffect(() => {

      const index = main_pages.findIndex(page => page.route_url === location.pathname)
      menubar_ref.current.setSelectedTab(index)

  });
  
  return (
    <div className="App">
      <MenuAppBar ref={menubar_ref}/>
      <Outlet/>
    </div>

  );
}

export default App;
