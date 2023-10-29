import '../style/LoginStyle.css';
import { Grid, Typography, Button} from '@mui/material';
import { InputPasswordField, InputEmailOrUsernameField } from './TextField-comps';
import React ,{useRef} from 'react';


const RenderLogin = () => {
  const input_email_username_ref = useRef();
  const input_password_ref = useRef();


  const logToSystem=() =>{
    if(input_email_username_ref.current.text == "" || input_password_ref.current.text == "")
        alert("Empty Values, pls provide your details1")
    if(!input_email_username_ref.current.error || !input_password_ref.current.error)
        alert("Thier is something worng with your details.1")
    else{
      alert("your information is correct!1")
    }
    
  }


    return (
      <div className='Login' style={{ margin: 'auto' }}>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h3" style={{ color: "whitesmoke" }}>Log In</Typography>
        </Grid>
        <InputEmailOrUsernameField ref={input_email_username_ref}/>
        <InputPasswordField ref={input_password_ref}/>
        <Grid>
          <Button variant="contained" color="success" fullWidth style={{ width: "100%" }} onClick={logToSystem}>Log In</Button>
        </Grid>
      </div>
    );
};
export default RenderLogin;