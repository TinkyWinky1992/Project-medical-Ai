import "../style/LoginStyle.css";
import AlertModal from "./Alert";
import {
  InputPasswordField,
  InputEmailField,
  InputUsernameField,
} from "./TextField-comps";
import { Grid, Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import { postUser } from "../Services/ServerHandler";

const RenderRegister = () => {
  const input_email_ref = useRef();
  const input_username_ref = useRef();
  const input_password_ref = useRef();
  const alert_ref = useRef();

   const registerInSystem = async () => {
    if ( input_email_ref.current.text == null || input_username_ref.current.text ==  null || input_password_ref.current.text== null)
    {
      alert_ref.current.open();
      return;
    }

    if ( !input_email_ref.current.error || !input_username_ref.current.error || !input_password_ref.current.error) 
    {
      alert_ref.current.open();
      return;
    }
    else {
      await postUser(input_username_ref.current.text, input_email_ref.current.text,  input_password_ref.current.text )
    }
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
