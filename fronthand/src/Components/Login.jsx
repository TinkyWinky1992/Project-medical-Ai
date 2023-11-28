import "../style/LoginStyle.css";
import { getUser } from "../Services/ServerHandler";
import { Grid, Typography, Button } from "@mui/material";
import { InputPasswordField, InputEmailOrUsernameField } from "./TextField-comps";
import AlertModal from "./Alert";
import React, { useRef } from "react";


const RenderLogin = () => {
  const input_email_username_ref = useRef();
  const input_password_ref = useRef();
  const alert_ref = useRef();

  const logToSystem = async() => {    
    let data;
    try {
      data = await getUser(input_email_username_ref.current.text, input_password_ref.current.text);
      console.log(data);
    }catch(error) {
      if (error.response) {
        const mesg = error.response.data.message;
        if(mesg == "User not found.") {
          input_email_username_ref.current.errormsg(mesg);
          input_email_username_ref.current.setValid(false);
          return;
        }
        else if(mesg == "Password needs to be above 6 letters." || mesg == "Password incorrect.") {
          input_password_ref.current.errormsg(mesg);
          input_password_ref.current.setValid(false);
          return;
        }
      }
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
