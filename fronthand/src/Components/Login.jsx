import "../style/LoginStyle.css";
import { Grid, Typography, Button } from "@mui/material";
import {
  InputPasswordField,
  InputEmailOrUsernameField,
} from "./TextField-comps";
import { test } from "../Services/ServerHandler";
import AlertModal from "./Alert";
import React, { useRef } from "react";



const RenderLogin = () => {
  const input_email_username_ref = useRef();
  const input_password_ref = useRef();
  const alert_ref = useRef();

  const logToSystem = async() => {
    if (input_email_username_ref.current.text == null || input_password_ref.current.text == null) {
      alert_ref.current.open();
      return;
    }               
      
    if (!input_email_username_ref.current.error ||!input_password_ref.current.error) {
      alert_ref.current.open();
      return;
    }
        
    else {
      console.log("good")
    }
  };

  return (
    <div className="Login" style={{ margin: "auto" }}>
      <AlertModal ref={alert_ref}/>
      <Grid container alignItems="center" direction="column">
        <Typography variant="h3" style={{ color: "whitesmoke" }}>
          Log In
        </Typography>
      </Grid>
      <InputEmailOrUsernameField ref={input_email_username_ref} />
      <InputPasswordField ref={input_password_ref} />
      <Grid>
        <Button
          variant="contained"
          color="success"
          fullWidth
          style={{ width: "100%" }}
          onClick={async()=> {await logToSystem()}}
        >
          Log In
        </Button>
        
      </Grid>
    </div>
  );
};
export default RenderLogin;
