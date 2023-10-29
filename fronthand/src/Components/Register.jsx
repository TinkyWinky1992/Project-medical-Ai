import '../style/LoginStyle.css';
import { InputPasswordField, InputEmailField, InputUsernameField } from './TextField-comps';
import { Grid, Typography, Button} from '@mui/material';
import React,{useRef} from 'react';


const RenderRegister = () => {
    const input_email_ref = useRef();
    const input_username_ref = useRef();
    const input_password_ref = useRef();

    const registerInSystem = () => {
      if(input_email_ref.current.text =="" || input_username_ref.current.text == "" || input_password_ref == "")
        alert("Empty Values, pls provide your details")
      if(!input_email_ref.current.error || !input_username_ref.current.error || !input_password_ref.current.error)
        alert("Thier is something worng with your details.")
      else{
          alert("your information is correct!")
        }
    }

    return (
      <div className='Register' style={{ margin: 'auto' }}>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h3" style={{ color: "whitesmoke" }}>Register</Typography>
        </Grid>
        <InputEmailField ref={input_email_ref} />
        <InputUsernameField ref={input_username_ref}/>
        <InputPasswordField ref={input_password_ref}/>
        <Grid>
            <Button variant="contained" color="success" style={{ width: "100%" }} onClick={registerInSystem} >Register</Button>
        </Grid>
      </div>
    );
  };
export default RenderRegister;