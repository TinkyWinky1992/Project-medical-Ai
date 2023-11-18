import "../style/menuStyle.css"
import React, { useRef } from "react";
import { Grid } from "@mui/material";
import MenuAppBar from "../Components/AppBar";

function Menu() {
  
    return (
      <div className="menu-screen">
        <Grid>
          <MenuAppBar/>
        </Grid>
      </div>
    );
  }
  
  export default Menu;

  