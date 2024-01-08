import "../StyleElements/style/LoginStyle.css";
import Cookies from 'js-cookie';
import React, { useRef } from "react";
import { postUser } from "../Services/ServerHandler";
import { InputPasswordField, InputEmailField, InputUsernameField } from "./TextField-comps";
import { Grid, Typography, Button } from "@mui/material";
import { main_pages, dialog_pages } from "../routing/routes";
import { useNavigate } from "react-router-dom";
const RenderRegister = () => {
  const input_email_ref = useRef();
  const input_username_ref = useRef();
  const input_password_ref = useRef();
  const navigate = useNavigate();

   const registerInSystem = async () => {
    let data;
    try {
      //getting the jwt token for authication route. 
      //to give the user premission to accses most of the routes
        data = await postUser(
        input_username_ref.current.text,
        input_email_ref.current.text,
        input_password_ref.current.text
      );
    console.log(data.accsesToken);
    Cookies.set('User_token',data.accsesToken);
    navigate(main_pages[0].route_url)

    
    } catch (error) {
      if (error.response) {
        if(error.response.data.message == "Username is already in use.") 
        {
          input_username_ref.current.errormsg(error.response.data.message);
          input_username_ref.current.setValid(false);
          
        }

        if(error.response.data.message == "Email is already in use.")
        {
          input_email_ref.current.errormsg(error.response.data.message);
          input_email_ref.current.setValid(false);
        
        }

        if(error.response.data.message == "Password need to be above 6 letters.") 
        {
          input_password_ref.current.errormsg(error.response.data.message);
          input_password_ref.current.setValid(false);

        }
        if (error.response && error.response.data && error.response.data.statusCode === 500) 
        {
          input_email_ref.current.errormsg("There is a problem with your details");
          input_email_ref.current.setValid(false);

        }

      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received from the server');
      
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
      
      }
    }
  };

  return (
    <div className="Register" style={{ margin: "auto" }}>
      <Grid container alignItems="center" direction="column">
        <Typography variant="h3" style={{ color: "whitesmoke" }}>
          Register
        </Typography>
      </Grid>
      <InputEmailField ref={input_email_ref} />
      <InputUsernameField ref={input_username_ref} />
      <InputPasswordField ref={input_password_ref} />
      <Grid>
        <Button
          variant="contained"
          color="success"
          style={{ width: "100%" }}
          onClick={async()=> { await registerInSystem()}}
        >
          Register
        </Button>
      </Grid>
    </div>
  );
};
export default RenderRegister;
