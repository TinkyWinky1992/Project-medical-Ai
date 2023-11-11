import "../style/LoginStyle.css";
import { postUser } from "../Services/ServerHandler";
import { checkEmailValid, checkUsernameValid, checkPasswordValid} from "../utils/RegisterUtils";
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
    const validation_email = await checkEmailValid(input_email_ref.current.text);
    const validation_username = await checkUsernameValid(input_username_ref.current.text);
    const validation_password = await checkPasswordValid(input_password_ref.current.text);

    if(validation_email != null)
    {
      input_email_ref.current.errormsg(validation_email);
      input_email_ref.current.setValid(false);
      return;
    }
    else if(validation_username != null) 
    {
      input_username_ref.current.errormsg(validation_username);
      input_username_ref.current.setValid(false);
      return;
    }
    else if(validation_password != null) 
    {
      input_password_ref.current.errormsg(validation_password);
      input_password_ref.current.setValid(false);
    }
    else {
      await postUser(input_username_ref.current.text, input_email_ref.current.text, input_password_ref.current.text);
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
