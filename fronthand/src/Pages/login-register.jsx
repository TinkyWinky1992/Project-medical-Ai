import "../style/LoginStyle.css";
import { Grid } from "@mui/material";
import React, { useRef } from "react";
import SelectersButtons from "../Components/SelecterButtons";
import RenderRegister from "../Components/Register";
import RenderLogin from "../Components/Login";
import logo from "../giphy.gif";


function RenderLoginOrRegister() {
    const login_ref = useRef();
    const register_ref = useRef();
  
    return (
      <div className="Login-Register">
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6}>
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="brand"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
          >
            <SelectersButtons login={login_ref} register={register_ref} />
            <div ref={login_ref}>
              <RenderLogin />
            </div>
            <div ref={register_ref}>
              <RenderRegister />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default RenderLoginOrRegister;
  