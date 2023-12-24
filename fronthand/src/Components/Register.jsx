import "../style/LoginStyle.css";
import { postUser } from "../Services/ServerHandler";
import { InputPasswordField, InputEmailField, InputUsernameField } from "./TextField-comps";
import AlertModal from "./Alert";
import { Grid, Typography, Button } from "@mui/material";
import React, { useRef } from "react";

const RenderRegister = () => {
  const input_email_ref = useRef();
  const input_username_ref = useRef();
  const input_password_ref = useRef();
  const alert_ref = useRef();


   const registerInSystem = async () => {
    let data;
    try {
        data = await postUser(
        input_username_ref.current.text,
        input_email_ref.current.text,
        input_password_ref.current.text
      );

    } catch (error) {
      if (error.response) {
        if(error.response.data.message == "Username is already in use.") 
        {
          input_username_ref.current.errormsg(error.response.data.message);
          input_username_ref.current.setValid(false);
          return;
        }

        if(error.response.data.message == "Email is already in use.")
        {
          input_email_ref.current.errormsg(error.response.data.message);
          input_email_ref.current.setValid(false);
          return;
        }

        if(error.response.data.message == "Password need to be above 6 letters.") 
        {
          input_password_ref.current.errormsg(error.response.data.message);
          input_password_ref.current.setValid(false);
          return;
        }
        if (error.response && error.response.data && error.response.data.statusCode === 500) 
        {
          input_email_ref.current.errormsg("There is a problem with your details");
          input_email_ref.current.setValid(false);
          return;
        }

      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received from the server');
        return;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
        return;
      }
    }
    return data;
  };

  return (
    <div className="Register" style={{ margin: "auto" }}>
       <AlertModal ref={alert_ref}/>
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
