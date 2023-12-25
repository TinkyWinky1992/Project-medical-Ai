import "../style/LoginStyle.css";
import Cookies from 'js-cookie';
import React, { useRef } from "react";
import { getUser } from "../Services/ServerHandler";
import { Grid, Typography, Button } from "@mui/material";
import { InputPasswordField, InputEmailOrUsernameField } from "./TextField-comps";



const RenderLogin = () => {
  const input_email_username_ref = useRef();
  const input_password_ref = useRef();


  const logToSystem = async() => {    
    let token_jwt;
    try {
      //getting the jwt token for authication route. 
      //to give the user premission to accses most of the routes
      token_jwt = await getUser(input_email_username_ref.current.text, input_password_ref.current.text);
      Cookies.set('User_token',token_jwt.accsesToken);

    }catch(error) {
      if (error.response) {
        const mesg = error.response.data.message;
        if(mesg == "User not found.") {
          input_email_username_ref.current.errormsg(mesg);
          input_email_username_ref.current.setValid(false);
          
        }
        else if(mesg == "Password needs to be above 6 letters." || mesg == "Password incorrect.") {
          input_password_ref.current.errormsg(mesg);
          input_password_ref.current.setValid(false);
          
        }
      }
    }
  };

  return (
    <div className="Login" style={{ margin: "auto" }}>
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
