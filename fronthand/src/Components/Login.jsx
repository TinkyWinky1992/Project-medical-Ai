import '../style/LoginStyle.css';
import { Grid, Typography, Button} from '@mui/material';
import { InputPasswordField, InputEmailOrUsernameField } from './TextField-comps';
import React ,{useRef} from 'react';


const RenderLogin = () => {
  const input_email_username_ref =useRef();


  const test=() =>{
    const e = input_email_username_ref.current.error;
    console.log(e);
    
  }


    return (
      <div className='Login' style={{ margin: 'auto' }}>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h3" style={{ color: "whitesmoke" }}>Log In</Typography>
        </Grid>
        <InputEmailOrUsernameField ref={input_email_username_ref}/>
        <InputPasswordField />
        <Grid>
          <Button variant="contained" color="success" fullWidth style={{ width: "100%" }} onClick={test}>Log In</Button>
        </Grid>
      </div>
    );
};
export default RenderLogin;